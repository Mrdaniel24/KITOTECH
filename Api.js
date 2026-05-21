window.KitotechApi = (() => {
  const baseUrl = window.KITOTECH_API_BASE_URL || 'http://127.0.0.1:8000/api';

  const xhrRequest = (url, options, headers) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', url);
    Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
    xhr.onload = () => {
      const data = (() => {
        try { return JSON.parse(xhr.responseText || '{}'); }
        catch (_) { return {}; }
      })();
      if (xhr.status >= 200 && xhr.status < 300) resolve(data);
      else reject(new Error(data.message || 'Ombi halikukamilika. Jaribu tena.'));
    };
    xhr.onerror = () => reject(new Error('Muunganisho wa backend haujapatikana.'));
    xhr.send(options.body ? JSON.stringify(options.body) : null);
  });

  const getToken = () => localStorage.getItem('kitotech_admin_token') || '';
  const setToken = (token) => localStorage.setItem('kitotech_admin_token', token);
  const clearToken = () => localStorage.removeItem('kitotech_admin_token');

  const request = async (path, options = {}) => {
    const headers = {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.auth ? { Authorization: `Bearer ${getToken()}` } : {}),
      ...(options.headers || {}),
    };

    if (typeof window.fetch !== 'function') {
      return xhrRequest(`${baseUrl}${path}`, options, headers);
    }

    const response = await window.fetch(`${baseUrl}${path}`, {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || 'Ombi halikukamilika. Jaribu tena.');
    }

    return data;
  };

  // Multipart/form-data upload (for files)
  const requestFormData = (path, method, formData) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${baseUrl}${path}`);
    xhr.setRequestHeader('Accept', 'application/json');
    const token = getToken();
    if (token) xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.onload = () => {
      const data = (() => {
        try { return JSON.parse(xhr.responseText || '{}'); }
        catch (_) { return {}; }
      })();
      if (xhr.status >= 200 && xhr.status < 300) resolve(data);
      else reject(new Error(data.message || 'Ombi halikukamilika. Jaribu tena.'));
    };
    xhr.onerror = () => reject(new Error('Muunganisho wa backend haujapatikana.'));
    xhr.send(formData);
  });

  return {
    baseUrl,
    storageUrl: () => baseUrl.replace(/\/api$/, ''),
    request,
    getProducts: () => request('/products'),
    getServices: () => request('/services'),
    sendContact: (payload) => request('/contact', { method: 'POST', body: payload }),
    sendAiMessage: (question) => request('/ai/chat', { method: 'POST', body: { question } }),
    login: async (email, password) => {
      const data = await request('/login', { method: 'POST', body: { email, password } });
      if (data.token) setToken(data.token);
      return data;
    },
    logout: async () => {
      try {
        await request('/logout', { method: 'POST', auth: true });
      } finally {
        clearToken();
      }
    },
    getAdminDashboard: () => request('/admin/dashboard', { auth: true }),
    getContactInquiries: () => request('/admin/contact-inquiries', { auth: true }),
    getAiConversations: () => request('/admin/ai-conversations', { auth: true }),
    getServiceRequests: () => request('/admin/service-requests', { auth: true }),
    hasAdminToken: () => Boolean(getToken()),
    clearToken,

    // ─── Products ───
    getAdminProducts: (params = {}) => {
      const qs = new URLSearchParams(params).toString();
      return request(`/admin/products${qs ? '?' + qs : ''}`, { auth: true });
    },
    createProduct: (formData) => requestFormData('/admin/products', 'POST', formData),
    updateProduct: (id, formData) => requestFormData(`/admin/products/${id}`, 'POST', formData),
    deleteProduct: (id) => request(`/admin/products/${id}`, { method: 'DELETE', auth: true }),

    // ─── Product Images ───
    uploadProductImages: (id, formData) => requestFormData(`/admin/products/${id}/images`, 'POST', formData),
    deleteProductImage: (imgId) => request(`/admin/product-images/${imgId}`, { method: 'DELETE', auth: true }),

    // ─── Product Colours ───
    addProductColour: (productId, data) => request(`/admin/products/${productId}/colours`, { method: 'POST', body: data, auth: true }),
    deleteProductColour: (colourId) => request(`/admin/product-colours/${colourId}`, { method: 'DELETE', auth: true }),

    // ─── Categories ───
    getAdminCategories: () => request('/admin/categories', { auth: true }),
    createCategory: (data) => request('/admin/categories', { method: 'POST', body: data, auth: true }),
    updateCategory: (id, data) => request(`/admin/categories/${id}`, { method: 'PUT', body: data, auth: true }),
    deleteCategory: (id) => request(`/admin/categories/${id}`, { method: 'DELETE', auth: true }),
  };
})();

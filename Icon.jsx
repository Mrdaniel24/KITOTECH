// Tiny inline icon component — Lucide-style outline strokes.
const Icon = ({ name, size = 20, stroke = 1.5, className = '' }) => {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'square',
    strokeLinejoin: 'miter',
    className,
  };
  switch (name) {
    case 'arrow':       return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'arrow-right': return <svg {...props}><path d="M9 6l6 6-6 6"/></svg>;
    case 'arrow-left':  return <svg {...props}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'down':        return <svg {...props}><path d="M6 9l6 6 6-6"/></svg>;
    case 'plus':        return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case 'home':        return <svg {...props}><path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H10v7H4a1 1 0 0 1-1-1z"/></svg>;
    case 'building':    return <svg {...props}><rect x="4" y="3" width="16" height="18"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/></svg>;
    case 'book':        return <svg {...props}><path d="M4 4h11a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4z"/><path d="M4 4v15"/></svg>;
    case 'hospital':    return <svg {...props}><rect x="4" y="6" width="16" height="15"/><path d="M12 10v6M9 13h6M4 6l8-3 8 3"/></svg>;
    case 'camera':      return <svg {...props}><rect x="3" y="6" width="18" height="12" rx="1"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'lock':        return <svg {...props}><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
    case 'shield':      return <svg {...props}><path d="M12 2L3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6z"/></svg>;
    case 'cpu':         return <svg {...props}><rect x="5" y="5" width="14" height="14" rx="1"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>;
    case 'activity':    return <svg {...props}><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>;
    case 'globe':       return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'phone':       return <svg {...props}><path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
    case 'mail':        return <svg {...props}><rect x="3" y="5" width="18" height="14"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'map':         return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'chat':        return <svg {...props}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z"/></svg>;
    case 'spark':       return <svg {...props}><path d="M12 3v6m0 6v6M3 12h6m6 0h6M5.5 5.5l4 4m5 5l4 4M18.5 5.5l-4 4m-5 5l-4 4"/></svg>;
    case 'x':           return <svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'send':        return <svg {...props}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>;
    case 'instagram':   return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.5" fill="currentColor"/></svg>;
    case 'facebook':    return <svg {...props}><path d="M14 9V7a2 2 0 0 1 2-2h2V2h-3a5 5 0 0 0-5 5v2H7v3h3v9h4v-9h3l1-3z"/></svg>;
    case 'linkedin':    return <svg {...props}><rect x="3" y="3" width="18" height="18"/><path d="M7 10v8M7 7v.01M12 10v8M12 14a3 3 0 0 1 6 0v4"/></svg>;
    case 'whatsapp':    return <svg {...props} fill="currentColor" stroke="none"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-1.5-.7-2.5-1.3-3.5-3-.3-.4.3-.4.7-1.3.1-.1 0-.3 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.4-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.4 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2L7.4 18.5l-3.2.8.9-3.1-.2-.3C4.1 14.6 3.7 13.3 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8-8.3 8z"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;

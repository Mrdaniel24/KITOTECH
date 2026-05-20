// Top announcement bar
const Announce = () => (
  <div className="announce">
    <span>Wakala Aliyeidhinishwa Rasmi wa Hikvision &mdash; Afrika Mashariki &amp; Nigeria.</span>
    <a href="contact.html">Wasiliana Nasi &rsaquo;</a>
  </div>
);

// Detect current page for active link
const currentPage = () => {
  const p = window.location.pathname.split('/').pop() || 'index.html';
  return p;
};

// Main nav
const Nav = () => {
  const page = currentPage();
  return (
    <div className="nav-root">
      <div className="nav">
        <div className="container inner">
          <a href="index.html" className="brand">
            <img src="./assets/logo-mark.png" alt="Kitotech" />
            <span className="brand-word">KITOTECH</span>
          </a>
          <nav className="links">
            <a href="index.html"    className={page === 'index.html'    ? 'active' : ''}>NYUMBANI</a>
            <a href="about.html"    className={page === 'about.html'    ? 'active' : ''}>KUHUSU</a>
            <a href="products.html" className={page === 'products.html' ? 'active' : ''}>BIDHAA</a>
            <a href="solutions.html"className={page === 'solutions.html'? 'active' : ''}>SULUHISHO</a>
            <a href="contact.html"  className={page === 'contact.html'  ? 'active' : ''}>WASILIANA</a>
          </nav>
          <a href="contact.html" className="btn btn-primary btn-skew">Omba Onyesho <Icon name="arrow" size={14}/></a>
        </div>
      </div>
    </div>
  );
};

window.Announce = Announce;
window.Nav = Nav;

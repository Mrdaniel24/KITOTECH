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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`nav-root ${isOpen ? 'mobile-open' : ''}`}>
      <div className="nav">
        <div className="container inner">
          <a href="index.html" className="brand">
            <img src="./assets/logo-mark.png" alt="Kitotech" />
            <span className="brand-word">KITOTECH</span>
          </a>
          <nav className={`links ${isOpen ? 'open' : ''}`}>
            <a href="index.html"    className={page === 'index.html'    ? 'active' : ''} onClick={() => setIsOpen(false)}>NYUMBANI</a>
            <a href="about.html"    className={page === 'about.html'    ? 'active' : ''} onClick={() => setIsOpen(false)}>KUHUSU</a>
            <a href="products.html" className={page === 'products.html' ? 'active' : ''} onClick={() => setIsOpen(false)}>BIDHAA</a>
            <a href="solutions.html"className={page === 'solutions.html'? 'active' : ''} onClick={() => setIsOpen(false)}>SULUHISHO</a>
            <a href="contact.html"  className={page === 'contact.html'  ? 'active' : ''} onClick={() => setIsOpen(false)}>WASILIANA</a>
            <div className="mobile-only-cta">
              <a href="contact.html" className="btn btn-primary btn-skew" onClick={() => setIsOpen(false)}>Omba Onyesho <Icon name="arrow" size={14}/></a>
            </div>
          </nav>
          <a href="contact.html" className="btn btn-primary btn-skew nav-cta">Omba Onyesho <Icon name="arrow" size={14}/></a>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <div className={`hamburger ${isOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

window.Announce = Announce;
window.Nav = Nav;

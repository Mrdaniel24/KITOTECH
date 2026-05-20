const AboutIntro = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const children = ref.current.querySelectorAll('.reveal-left, .reveal-right');
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        children.forEach((el, i) => {
          setTimeout(() => el.classList.add('revealed'), i * 120);
        });
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="intro-section">
      <div className="container intro-grid" ref={ref}>
        <div className="intro-copy reveal-left">
          <span className="eyebrow">KUHUSU KITOTECH</span>
          <h2>Miaka 15 ya <span className="accent-red">ujenzi wa usalama</span> <span className="black">unaotegemeka.</span></h2>
          <p>Kitotech Group Limited ilianzishwa 2011 kwa dhamira moja — kuleta teknolojia ya usalama ya kiwango cha dunia kwenye biashara za Afrika. Leo tunashirikiana na hospitali, hoteli, viwanda, na taasisi za serikali katika nchi 6.</p>
          <p>Kama wakala aliyeidhinishwa rasmi wa <strong>Hikvision</strong> — kampuni nambari moja ya usalama duniani — tunatoa bidhaa za kweli, usakinishaji wa kitaalamu, na msaada wa muda wote.</p>
          <a href="about.html" className="intro-more">Jifunze Zaidi Kuhusu Sisi <Icon name="arrow" size={12}/></a>
          <div className="hik-badge">
            <img src="./assets/logo-mark.png" alt="Kitotech" className="hik-badge-logo"/>
            <div className="hik-badge-divider"/>
            <div>
              <div className="hik-badge-title">WAKALA ALIYEIDHINISHWA RASMI</div>
              <div className="hik-badge-sub">Hikvision &middot; Afrika Mashariki &amp; Nigeria</div>
            </div>
          </div>
        </div>

        <div className="intro-image reveal-right">
          <div className="intro-img-bg" style={{backgroundImage:"url('./assets/images/about.jpg')"}}/>
          <div className="intro-img-fallback">
            <Icon name="building-2" size={48}/>
            <span>Picha ya timu / ofisi</span>
          </div>
          <div className="intro-img-badge">Tangu 2011</div>
        </div>
      </div>
    </section>
  );
};

window.AboutIntro = AboutIntro;

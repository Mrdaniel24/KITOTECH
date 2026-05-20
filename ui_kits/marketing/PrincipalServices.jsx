const PrincipalServices = () => {
  const sectionRef = React.useRef(null);
  const gridRef = React.useRef(null);
  React.useEffect(() => {
    const targets = [];
    if (sectionRef.current) {
      const head = sectionRef.current.querySelector('.ps-head');
      if (head) targets.push(head);
    }
    if (gridRef.current) {
      gridRef.current.querySelectorAll('.ps-card').forEach(c => targets.push(c));
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  const services = [
    { img:'product-cam',  title:'Kamera za Usalama',  desc:'4K · ColorVu · AI · IR 60m. Picha ya rangi usiku na mchana bila kuacha.' },
    { img:'product-door', title:'Udhibiti wa Milango', desc:'Vitambulisho vya uso, kadi, na QR — ufikiaji unaosimamiwa kwa usahihi.' },
    { img:'product-ai',   title:'AI na Tahadhari',    desc:'Tahadhari ndani ya ms 80. Utambuzi wa magari, watu, na mienendo isiyo ya kawaida.' },
    { img:'product-nvr',  title:'Usimamizi wa Picha', desc:'NVR/DVR za hadi chaneli 256. Uhifadhi wa muda mrefu, cloud, na ufikiaji wa mbali.' },
  ];

  return (
    <section className="principal-services">
      <div className="container" ref={sectionRef}>
        <div className="ps-head">
          <span className="eyebrow">HUDUMA ZETU</span>
          <h2>Suluhisho <span className="accent">kamili</span> la usalama.</h2>
          <p>Kamera, milango, AI, na ukaguzi — vyote vikitengenezwa kufanya kazi pamoja. Mfumo mmoja, tovuti moja, timu moja ya msaada.</p>
        </div>
        <div className="ps-grid" ref={gridRef}>
          {services.map((s, i) => (
            <a href="products.html" className="ps-card" key={i} style={{'--delay': `${i * 0.1}s`}}>
              <div className="ps-media">
                <div className="ps-media-img" style={{backgroundImage:`url('../../assets/images/${s.img}.jpg')`}}/>
                <div className="ps-media-fallback"><Icon name="camera" size={32}/></div>
                <div className="ps-media-overlay"/>
              </div>
              <div className="ps-info">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <span className="ps-link">Soma zaidi <Icon name="arrow" size={12}/></span>
              </div>
            </a>
          ))}
        </div>
        <div className="ps-cta">
          <a href="products.html" className="btn btn-dark btn-skew">Angalia Bidhaa Zote <Icon name="arrow" size={14}/></a>
        </div>
      </div>
    </section>
  );
};

window.PrincipalServices = PrincipalServices;

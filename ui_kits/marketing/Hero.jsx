const Hero = () => {
  const [slide, setSlide] = React.useState(0);
  const [vals, setVals] = React.useState([0, 0, 0, 0]);
  const counted = React.useRef(false);
  const panelRef = React.useRef(null);

  const slides = [
    {
      eyebrow: 'WAKALA ALIYEIDHINISHWA — HIKVISION',
      headline: <>Usalama wa daraja la <em className="accent">kimataifa,</em> unaofika kwako.</>,
      sub: 'Kamera za 4K, AI ya ndani ya kifaa, udhibiti wa milango — mfumo mmoja unaounganisha vituo vyako vyote.',
      img: 'hero-1',
    },
    {
      eyebrow: 'MIFUMO YA USALAMA',
      headline: <>Tahadhari ndani ya <em className="accent">milisekunde 80.</em></>,
      sub: 'AI yetu inagundua tukio na kuwasiliana na timu yako — kabla hata mtu hajaona kwa macho.',
      img: 'hero-2',
    },
    {
      eyebrow: 'HUDUMA YA SAA 24',
      headline: <>Wataalamu wetu wako <em className="accent">zamu.</em> Kila wakati.</>,
      sub: 'Wahandisi walioidhinishwa, msaada wa dakika 4 kupitia WhatsApp, na dhamana ya miaka 2 kwa kila mradi.',
      img: 'hero-3',
    },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || counted.current) return;
      counted.current = true;
      const targets = [1240, 99.99, 80, 6];
      const decs    = [0, 2, 0, 0];
      targets.forEach((target, i) => {
        const steps = 55, dur = 1600;
        let step = 0;
        const t = setInterval(() => {
          step++;
          const p = 1 - Math.pow(1 - step / steps, 3);
          setVals(v => {
            const next = [...v];
            next[i] = +(target * p).toFixed(decs[i]);
            return next;
          });
          if (step >= steps) {
            setVals(v => { const next=[...v]; next[i]=target; return next; });
            clearInterval(t);
          }
        }, dur / steps);
      });
    }, { threshold: 0.2 });
    if (panelRef.current) obs.observe(panelRef.current);
    return () => obs.disconnect();
  }, []);

  const cur = slides[slide];
  const [v1, v2, v3, v4] = vals;

  return (
    <section className="hero">

      {/* ── Kizuizi cha rangi kushoto — brand signature ── */}
      <div className="hero-edge"/>

      {/* ── Split area ─────────────────────────────────── */}
      <div className="hero-inner">

        {/* LEFT — Nakala */}
        <div className="hero-copy">

          {/* Eyebrow — mstari mwekundu + maandishi madogo */}
          <div className="hero-eyebrow" key={'e' + slide}>
            {cur.eyebrow}
          </div>

          {/* Kichwa kikuu */}
          <h1 key={'h' + slide}>{cur.headline}</h1>

          {/* Maelezo */}
          <p className="hero-sub" key={'s' + slide}>{cur.sub}</p>

          {/* Vitufe vya vitendo */}
          <div className="hero-actions">
            <a href="contact.html" className="btn btn-primary btn-skew">
              Wasiliana Nasi <Icon name="arrow" size={14}/>
            </a>
            <a href="products.html" className="btn btn-outline-light btn-skew">
              Angalia Bidhaa <Icon name="arrow" size={14}/>
            </a>
          </div>

          {/* Dots za slide */}
          <div className="hero-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={i === slide ? 'active' : ''}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Picha + overlay ya tech */}
        <div className="hero-visual">

          {/* Picha za slides — zinaonyesha moja baada ya nyingine */}
          {slides.map((s, i) => (
            <div
              key={i}
              className={`hero-img ${i === slide ? 'active' : ''}`}
              style={{ backgroundImage: `url('../../assets/images/${s.img}.jpg')` }}
            />
          ))}

          {/* Overlay ya tech: scan line + corner brackets */}
          <div className="hero-tech-overlay">
            <div className="hero-scan-line"/>
            <div className="hero-corner tl"/>
            <div className="hero-corner tr"/>
            <div className="hero-corner bl"/>
            <div className="hero-corner br"/>

          </div>

          {/* Fallback — inaonekana pale picha haipo */}
          <div className="hero-fallback">
            <div className="hero-fallback-grid"/>
            <div className="hero-fallback-glow"/>
            <img
              src="../../assets/logo-mark-white.png"
              alt=""
              className="hero-fallback-logo"
            />
          </div>
        </div>
      </div>

      {/* ── Stats panel inayoelea chini ────────────────── */}
      <div className="hero-float-stats" ref={panelRef}>

        <div className="hfs-item">
          <div className="hfs-num">
            <span className="hfs-val">{v1.toLocaleString()}</span>
            <span className="hfs-unit">+</span>
          </div>
          <div className="hfs-label">Kamera zilizosanikishwa</div>
        </div>

        <div className="hfs-sep"/>

        <div className="hfs-item">
          <div className="hfs-num">
            <span className="hfs-val">{v2.toFixed(2)}</span>
            <span className="hfs-unit">%</span>
          </div>
          <div className="hfs-label">Wakati wa kazi (Uptime)</div>
        </div>

        <div className="hfs-sep"/>

        <div className="hfs-item">
          <div className="hfs-num">
            <span className="hfs-prefix">&lt;</span>
            <span className="hfs-val">{v3}</span>
            <span className="hfs-unit">ms</span>
          </div>
          <div className="hfs-label">Ucheleweshaji wa tahadhari</div>
        </div>

        <div className="hfs-sep"/>

        <div className="hfs-item">
          <div className="hfs-num">
            <span className="hfs-val">{v4}</span>
          </div>
          <div className="hfs-label">Nchi za kazi</div>
        </div>

      </div>

    </section>
  );
};

window.Hero = Hero;
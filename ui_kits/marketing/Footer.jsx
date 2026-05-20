// Footer — the ONE place where black/dark lives
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="cols">
        <div className="brand-col">
          <img src="../../assets/logo-horizontal-dark.png" alt="Kitotech Group LTD"/>
          <p>
            Miundombinu ya usalama wa biashara — kamera, udhibiti wa milango,
            tahadhari za AI, na jukwaa moja la udhibiti. Tumeundwa Lagos,
            tunafanya kazi katika nchi 48.
          </p>
        </div>

        <div>
          <h5>TULIPO</h5>
          <div className="item"><span className="ic"><Icon name="map" size={14}/></span><span>Plot 12, Allen Avenue<br/>Ikeja, Lagos · Nigeria</span></div>
          <div className="item"><span className="ic"><Icon name="building" size={14}/></span><span>Dubai · London · Nairobi</span></div>
        </div>

        <div>
          <h5>WASILIANA NASI</h5>
          <div className="item"><span className="ic"><Icon name="phone" size={14}/></span><span>+234 (0) 9-555-0142</span></div>
          <div className="item"><span className="ic"><Icon name="whatsapp" size={14} stroke={0}/></span><span>+234 (0) 9-555-0143</span></div>
          <div className="item"><span className="ic"><Icon name="mail" size={14}/></span><span>biashara@kitotech.com</span></div>
        </div>

        <div>
          <h5>TUFUATE</h5>
          <div className="socials">
            <a aria-label="Instagram"><Icon name="instagram" size={16}/></a>
            <a aria-label="Facebook"><Icon name="facebook" size={16}/></a>
            <a aria-label="LinkedIn"><Icon name="linkedin" size={16}/></a>
            <a aria-label="WhatsApp"><Icon name="whatsapp" size={16} stroke={0}/></a>
          </div>

          <h5 style={{marginTop:24}}>KURASA</h5>
          <ul>
            <li><a href="index.html">Nyumbani</a></li>
            <li><a href="about.html">Kuhusu Kitotech</a></li>
            <li><a href="products.html">Bidhaa Zetu</a></li>
            <li><a href="solutions.html">Suluhisho</a></li>
            <li><a href="contact.html">Wasiliana Nasi</a></li>
          </ul>
          <div style={{marginTop:20, padding:'10px 12px', border:'1px solid var(--hair-d)', display:'flex', alignItems:'center', gap:10}}>
            <img src="../../assets/logo-mark-light.png" alt="Hikvision Authorized" style={{height:28, opacity:0.7}}/>
            <span style={{font:'500 10px/1.3 var(--font-mono)', color:'var(--fg-on-dark-3)', textTransform:'uppercase', letterSpacing:'0.12em'}}>Wakala Aliyeidhinishwa<br/>Hikvision</span>
          </div>
        </div>
      </div>
    </div>
    <div className="legal">
      © 2026 KITOTECH GROUP LTD · Haki zote zimehifadhiwa · SOC 2 · ISO 27001
    </div>
  </footer>
);

window.Footer = Footer;

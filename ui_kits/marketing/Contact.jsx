// Contact section — form + info + map
const Contact = () => {
  const [form, setForm] = React.useState({ jina:'', barua:'', simu:'', mada:'', ujumbe:'' });
  const [sent, setSent] = React.useState(false);
  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };

  return (
    <section className="contact">
      <div className="container">
        <h2>USIPOTEZE MUDA, ONGEA SASA NA<br/><span className="accent">WATAALAMU WETU WA ZAMU!</span></h2>
        <p className="lede">
          Ili kuongea nasi ni rahisi — jaza fomu hii na mmoja wa wataalamu wetu
          atakuwasiliana hivi karibuni. Au tumia mawasiliano yaliyo upande.
        </p>

        <div className="contact-grid">
          <form className="form-stack" onSubmit={onSubmit}>
            <div className="form-row">
              <label>Jina:</label>
              <input className="field" value={form.jina} onChange={onChange('jina')} placeholder="Jina kamili"/>
            </div>
            <div className="form-row">
              <label>Barua pepe:</label>
              <input className="field" type="email" value={form.barua} onChange={onChange('barua')} placeholder="jina@kampuni.com"/>
            </div>
            <div className="form-row">
              <label>Simu:</label>
              <input className="field" value={form.simu} onChange={onChange('simu')} placeholder="+234 ..."/>
            </div>
            <div className="form-row">
              <label>Mada:</label>
              <input className="field" value={form.mada} onChange={onChange('mada')} placeholder="K.m. Bei ya kamera 32"/>
            </div>
            <div className="form-row">
              <label>Ujumbe:</label>
              <textarea className="field" value={form.ujumbe} onChange={onChange('ujumbe')} placeholder="Andika ujumbe wako hapa..."/>
            </div>
            <button type="submit" className="btn btn-primary btn-skew submit-btn">
              {sent ? 'IMETUMWA ✓' : 'TUMA'} <Icon name="send" size={14}/>
            </button>
          </form>

          <aside className="contact-info">
            <div>
              <h4>MAWASILIANO</h4>
              <div className="item"><span className="ic"><Icon name="phone" size={16}/></span><span>Simu<br/><strong style={{color:'var(--fg-on-light-1)'}}>+234 (0) 9-555-0142</strong></span></div>
              <div className="item"><span className="ic"><Icon name="whatsapp" size={16} stroke={0}/></span><span>WhatsApp<br/><strong style={{color:'var(--fg-on-light-1)'}}>+234 (0) 9-555-0143</strong></span></div>
              <div className="item"><span className="ic"><Icon name="mail" size={16}/></span><span>Barua pepe<br/><strong style={{color:'var(--fg-on-light-1)'}}>biashara@kitotech.com</strong></span></div>
            </div>

            <div>
              <h4>TULIPO</h4>
              <div className="item">
                <span className="ic"><Icon name="map" size={16}/></span>
                <span>Plot 12, Allen Avenue<br/>Ikeja, Lagos<br/>Nigeria · 100271</span>
              </div>
              <div className="map">
                <div className="pin"></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;

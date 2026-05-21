// Floating WhatsApp + AI assistant
const Floaters = () => {
  const [aiOpen, setAiOpen] = React.useState(false);
  const [waOpen, setWaOpen] = React.useState(false);
  return (
    <div className="floaters">
      {aiOpen && <AIPanel onClose={() => setAiOpen(false)} />}
      {waOpen && <WhatsappPanel onClose={() => setWaOpen(false)} />}
      <button className="float-btn float-ai" aria-label="Msaidizi wa AI" onClick={() => { setAiOpen(o => !o); setWaOpen(false); }}>
        <span className="pulse"></span>
        <Icon name="spark" size={22} stroke={1.5}/>
      </button>
      <button className="float-btn float-whatsapp" aria-label="WhatsApp" onClick={() => { setWaOpen(o => !o); setAiOpen(false); }}>
        <Icon name="whatsapp" size={28} stroke={0}/>
      </button>
    </div>
  );
};

const AIPanel = ({ onClose }) => {
  const [msgs, setMsgs] = React.useState([
    { from: 'bot', text: "Habari! Mimi ni Sentinel, msaidizi wa Kitotech. Naweza kukusaidia kuchagua kamera, kulinganisha mipango, au kupata bei. Ungependa kuanzia wapi?" },
  ]);
  const [input, setInput] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const suggestions = ['Kamera 32 kwa eneo moja', 'Linganisha mipango', 'Angalia bei', 'Bei ya milango 200'];
  const send = async (text) => {
    const userMsg = (text ?? input).trim();
    if (!userMsg || sending) return;
    setMsgs(m => [...m, { from: 'user', text: userMsg }]);
    setInput('');
    setSending(true);
    try {
      const data = await KitotechApi.sendAiMessage(userMsg);
      setMsgs(m => [...m, { from: 'bot', text: data.response }]);
    } catch (err) {
      setMsgs(m => [...m, { from: 'bot', text: 'Nimepokea ujumbe wako, lakini muunganisho wa backend haujapatikana sasa. Tafadhali jaribu tena baada ya muda mfupi.' }]);
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="ai-panel" onClick={e => e.stopPropagation()}>
      <div className="ai-panel-head">
        <div className="avatar">K</div>
        <div>
          <div className="title">Sentinel AI</div>
          <div className="sub">Mtandaoni · Hujibu &lt;dak 1</div>
        </div>
        <div className="close" onClick={onClose}><Icon name="x" size={18}/></div>
      </div>
      <div className="ai-msgs">
        {msgs.map((m, i) => <div key={i} className={`ai-msg ${m.from}`}>{m.text}</div>)}
        {msgs.length === 1 && (
          <div className="ai-suggest">
            {suggestions.map(s => <button key={s} onClick={() => send(s)}>{s}</button>)}
          </div>
        )}
      </div>
      <div className="ai-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Uliza kuhusu bidhaa, bei, ujumbe..."
        />
        <button onClick={() => send()}>{sending ? '...' : 'Tuma'}</button>
      </div>
    </div>
  );
};

const WhatsappPanel = ({ onClose }) => (
  <div style={{
    width: 320, padding: 18, background: '#fff', border: '1px solid var(--hair-l)',
    boxShadow: 'var(--shadow-4)'
  }} onClick={e => e.stopPropagation()}>
    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom: 12 }}>
      <div style={{ width: 32, height: 32, borderRadius: 999, background:'#25D366', display:'grid', placeItems:'center', color:'#fff' }}>
        <Icon name="whatsapp" size={20} stroke={0}/>
      </div>
      <div>
        <div style={{font:'700 13px/1.2 var(--font-display)'}}>Msaada wa WhatsApp</div>
        <div style={{font:'500 11px/1 var(--font-mono)', color:'var(--fg-on-light-3)', letterSpacing:'0.12em', textTransform:'uppercase'}}>SOC · 24 / 7</div>
      </div>
      <div onClick={onClose} style={{marginLeft:'auto', cursor:'pointer', color:'var(--fg-on-light-3)'}}><Icon name="x" size={18}/></div>
    </div>
    <p style={{font:'400 13px/1.55 var(--font-body)', color:'var(--fg-on-light-2)', margin:'0 0 14px'}}>
      Pata mhandisi wa Kitotech kupitia WhatsApp — msaada wa kufunga vifaa,
      maswali ya kabla ya ununuzi, au matatizo ya operesheni. Wakati wa wastani
      wa kujibu ni dakika 4.
    </p>
    <a className="btn btn-primary btn-skew" style={{width:'100%', justifyContent:'center', background:'#25D366'}}>
      Anza Mazungumzo <Icon name="arrow" size={14}/>
    </a>
  </div>
);

window.Floaters = Floaters;

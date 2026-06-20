/* eslint-disable */
function BookingModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex:100,
      background:'rgba(58,51,40,0.55)', backdropFilter:'blur(4px)',
      display:'flex', alignItems:'center', justifyContent:'center', padding:24,
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        background:'var(--cream-50)', borderRadius:24, padding:'40px 44px',
        maxWidth:520, width:'100%', boxShadow:'var(--shadow-lg)',
        position:'relative',
      }}>
        <button onClick={onClose} style={{
          position:'absolute', top:18, right:18,
          width:36, height:36, borderRadius:999, border:'none',
          background:'var(--mist-200)', cursor:'pointer',
          fontFamily:'var(--font-body)', fontSize:18, color:'var(--ink-700)',
        }}>×</button>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--purple-500)', marginBottom: 12,
        }}>Kennenlerngespräch</div>
        <h2 style={{
          fontFamily:'var(--font-display)', fontWeight:500, fontSize:32,
          lineHeight:1.15, color:'var(--ink-900)', margin:'0 0 8px',
        }}>Schreib mir gerne.</h2>
        <p style={{fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.6, color:'var(--ink-700)', margin:'0 0 24px'}}>
          Erzähl mir kurz, was dich beschäftigt, ich melde mich zeitnah zurück.
        </p>
        <form onSubmit={(e)=>{e.preventDefault(); alert('Danke! Eine richtige Formularverarbeitung wird hier später angebunden.');}} style={{display:'flex', flexDirection:'column', gap:14}}>
          <Field label="Dein Name" type="text" placeholder="Vor- und Nachname"/>
          <Field label="E-Mail" type="email" placeholder="du@beispiel.de"/>
          <Field label="Worum geht es?" textarea placeholder="Ein paar Worte reichen, z. B. Schlaf, Stress, oder Begleitung für dich und dein Tier …"/>
          <button type="submit" style={{
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
            color:'var(--cream-50)', background:'var(--purple-500)',
            border:'none', padding:'14px 28px', borderRadius:999, cursor:'pointer',
            marginTop:8,
          }}>Anfrage senden</button>
        </form>
      </div>
    </div>
  );
}
function Field({ label, type='text', placeholder, textarea }) {
  const inputStyle = {
    fontFamily:'var(--font-body)', fontSize:15, color:'var(--ink-900)',
    background:'var(--white)', border:'1px solid var(--mist-300)',
    borderRadius:12, padding:'12px 14px', outline:'none', width:'100%',
    boxSizing:'border-box',
  };
  return (
    <label style={{display:'flex', flexDirection:'column', gap:6}}>
      <span style={{fontFamily:'var(--font-body)', fontSize:12, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--purple-600)'}}>{label}</span>
      {textarea
        ? <textarea rows={4} placeholder={placeholder} style={{...inputStyle, resize:'vertical'}}/>
        : <input type={type} placeholder={placeholder} style={inputStyle}/>}
    </label>
  );
}
window.BookingModal = BookingModal;

/* eslint-disable */

// ─────────────────────────────────────────────────────────────────────────────
// HIER deinen Web3Forms Access Key eintragen.
// So bekommst du ihn (kostenlos, ~1 Minute, kein Login nötig):
//   1. Gehe auf  https://web3forms.com
//   2. Gib deine E-Mail-Adresse ein (dorthin werden die Anfragen geschickt).
//   3. Du bekommst per Mail einen "Access Key" (lange Zeichenfolge).
//   4. Trage ihn unten zwischen die Anführungszeichen ein und speichere.
// Solange hier "DEIN-ACCESS-KEY" steht, ist das Formular im Test-Modus.
const WEB3FORMS_ACCESS_KEY = "DEIN-ACCESS-KEY";
// ─────────────────────────────────────────────────────────────────────────────

function BookingModal({ open, onClose }) {
  const [status, setStatus] = React.useState('idle'); // idle | sending | ok | error
  const [errorMsg, setErrorMsg] = React.useState('');

  // Reset the form state each time the modal is (re)opened.
  React.useEffect(() => { if (open) { setStatus('idle'); setErrorMsg(''); } }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'DEIN-ACCESS-KEY') {
      setStatus('error');
      setErrorMsg('Das Formular ist noch nicht fertig eingerichtet (Access Key fehlt).');
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    data.access_key = WEB3FORMS_ACCESS_KEY;
    data.subject = 'Neue Anfrage über die Website';
    data.from_name = 'Aromaberatung Website';

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) { setStatus('ok'); }
      else { setStatus('error'); setErrorMsg(json.message || 'Senden fehlgeschlagen.'); }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Verbindung fehlgeschlagen. Bitte später erneut versuchen.');
    }
  };

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
        <button onClick={onClose} aria-label="Schließen" style={{
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

        {status === 'ok' ? (
          <div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500, fontSize:32,
              lineHeight:1.15, color:'var(--ink-900)', margin:'0 0 8px',
            }}>Danke dir!</h2>
            <p style={{fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.6, color:'var(--ink-700)', margin:'0 0 24px'}}>
              Deine Nachricht ist angekommen. Ich melde mich zeitnah bei dir zurück.
            </p>
            <button onClick={onClose} style={{
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
              color:'var(--cream-50)', background:'var(--purple-500)',
              border:'none', padding:'14px 28px', borderRadius:999, cursor:'pointer',
            }}>Schließen</button>
          </div>
        ) : (
          <React.Fragment>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500, fontSize:32,
              lineHeight:1.15, color:'var(--ink-900)', margin:'0 0 8px',
            }}>Schreib mir gerne.</h2>
            <p style={{fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.6, color:'var(--ink-700)', margin:'0 0 24px'}}>
              Erzähl mir kurz, was dich beschäftigt, ich melde mich zeitnah zurück.
            </p>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:14}}>
              <Field label="Dein Name" name="name" type="text" placeholder="Vor- und Nachname" required/>
              <Field label="E-Mail" name="email" type="email" placeholder="du@beispiel.de" required/>
              <Field label="Worum geht es?" name="message" textarea placeholder="Ein paar Worte reichen, z. B. Schlaf, Stress, oder Begleitung für dich und dein Tier …" required/>
              {/* Honeypot gegen Spam – von Menschen unsichtbar */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off"
                     style={{display:'none'}} aria-hidden="true"/>
              {status === 'error' && (
                <div style={{fontFamily:'var(--font-body)', fontSize:14, color:'var(--clay-600, #b4452f)'}}>
                  {errorMsg}
                </div>
              )}
              <button type="submit" disabled={status==='sending'} style={{
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
                color:'var(--cream-50)', background:'var(--purple-500)',
                border:'none', padding:'14px 28px', borderRadius:999,
                cursor: status==='sending' ? 'default' : 'pointer',
                opacity: status==='sending' ? 0.7 : 1,
                marginTop:8,
              }}>{status==='sending' ? 'Wird gesendet …' : 'Anfrage senden'}</button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type='text', placeholder, textarea, required }) {
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
        ? <textarea name={name} rows={4} placeholder={placeholder} required={required} style={{...inputStyle, resize:'vertical'}}/>
        : <input name={name} type={type} placeholder={placeholder} required={required} style={inputStyle}/>}
    </label>
  );
}
window.BookingModal = BookingModal;

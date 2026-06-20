/* eslint-disable */
// Kontakt mit "Karte" (stilisierte SVG, kein API-Key)
function HomepageKontakt({ onBook }) {
  return (
    <section id="kontakt" style={{
      padding:'112px 32px',
      background:'var(--bg)',
    }}>
      <div style={{maxWidth: 1240, margin:'0 auto'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr', gap: 64, alignItems:'stretch',
        }}>
          <div>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kontakt</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(40px, 4.4vw, 60px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 28px', textWrap:'balance',
            }}>Schreib mir. Ruf an.</h2>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.65,
              color:'var(--ink-700)', margin:'0 0 40px', maxWidth: 480, textWrap:'pretty',
            }}>
              Du erreichst mich auf den Wegen, die dir am liebsten sind. Beratungen finden in <strong>Magdeburg</strong> statt, oder online, ganz wie es für dich passt.
            </p>

            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:0}}>
              {[
                ['Telefon', '0163 / 788 2018', 'tel:+491637882018'],
                ['E-Mail', 'valor.mut@gmx.de', 'mailto:valor.mut@gmx.de'],
                ['Instagram', '@mehr.lebensfreude.ac', 'https://instagram.com/mehr.lebensfreude.ac'],
                ['Beratungsort', 'Magdeburg &middot; und online', null],
              ].map(([label, val, href]) => (
                <li key={label} style={{
                  display:'grid', gridTemplateColumns:'140px 1fr', gap:24,
                  padding:'18px 0', borderTop:'1px solid var(--mist-300)',
                  alignItems:'baseline',
                }}>
                  <div style={{
                    fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                    letterSpacing:'0.22em', textTransform:'uppercase',
                    color:'var(--ink-500)',
                  }}>{label}</div>
                  {href ? (
                    <a href={href} style={{
                      fontFamily:'var(--font-display)', fontSize: 22,
                      color:'var(--ink-900)', textDecoration:'none', fontWeight:500,
                    }} dangerouslySetInnerHTML={{__html: val}}/>
                  ) : (
                    <span style={{
                      fontFamily:'var(--font-display)', fontSize: 22,
                      color:'var(--ink-900)', fontWeight:500,
                    }} dangerouslySetInnerHTML={{__html: val}}/>
                  )}
                </li>
              ))}
            </ul>

            <button onClick={onBook} style={{
              marginTop: 40,
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
              color:'var(--cream-50)', background:'var(--brand)',
              border:'none', padding:'14px 32px', borderRadius:999, cursor:'pointer',
            }}>Kostenloses Kennenlerngespräch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HomepageKontakt = HomepageKontakt;

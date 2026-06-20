/* eslint-disable */
// 5-up Werte / Versprechen — verbatim from the Postkarte.
function HomepageWerte() {
  const items = [
    { n: '01', t: 'Individuelle Beratung', d: 'Für dein Wohlbefinden — keine Schubladen, keine fertigen Pakete.' },
    { n: '02', t: 'Stress­reduzierung', d: 'Entspannung, die du im Körper spürst. Kein „mach dir mal weniger Druck".' },
    { n: '03', t: 'Innere Balance', d: 'Mehr Vertrauen und emotionale Stärke — auch an den herausfordernden Tagen.' },
    { n: '04', t: 'Gesunder Schlaf', d: 'Sanfte Abendrituale mit Lavendel, Vetiver, römischer Kamille.' },
    { n: '05', t: 'Natürliche Unterstützung', d: 'Ätherische Öle als Begleiter im Alltag — ergänzend zu allem, was sonst gut tut.' },
  ];
  return (
    <section id="werte" style={{
      padding: '112px 32px',
      background: 'var(--bg)',
      borderBottom: '1px solid var(--mist-200)',
    }}>
      <div style={{maxWidth: 1240, margin: '0 auto'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1.6fr', gap: 80,
          alignItems:'end', marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Was du mitnehmen kannst</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(40px, 4.4vw, 64px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)', margin:0,
              textWrap:'balance',
            }}>Fünf kleine Versprechen.</h2>
          </div>
          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:24, color:'var(--ink-700)', lineHeight:1.45,
            margin:0, maxWidth:560, textWrap:'pretty',
          }}>
            „Ätherische Öle können dich auf natürliche Weise unterstützen — für mehr Wohlbefinden, innere Balance, emotionale Stärke, Vertrauen und Lebensfreude im Alltag."
          </p>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 0,
          borderTop:'1px solid var(--mist-300)',
        }}>
          {items.map((it, i) => (
            <div key={it.n} style={{
              padding: '32px 24px 0',
              borderRight: i < items.length-1 ? '1px solid var(--mist-200)' : 'none',
              minHeight: 240,
            }}>
              <div style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize:32, color:'var(--accent-strong)', lineHeight:1, marginBottom:18,
              }}>{it.n}</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:22,
                margin:'0 0 10px', color:'var(--ink-900)', lineHeight:1.2,
              }}>{it.t}</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:14.5, lineHeight:1.6,
                color:'var(--ink-700)', margin:0, textWrap:'pretty',
              }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HomepageWerte = HomepageWerte;

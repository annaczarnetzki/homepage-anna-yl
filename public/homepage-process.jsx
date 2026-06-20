/* eslint-disable */
// "So läuft eine Beratung ab" — editorial step-by-step.
function HomepageProcess({ onBook }) {
  const steps = [
    { n:'I', t:'Kennenlernen', dur:'20 Min · kostenlos', d:'Ein Vorgespräch — telefonisch oder per Video. Wir schauen, ob es passt. Keine Verpflichtung.' },
    { n:'II', t:'Anamnese', dur:'60–75 Min · persönlich oder online', d:'Im Termin nehmen wir uns Zeit für deine Themen, deinen Alltag, deine Vorlieben. Du erzählst, ich höre zu.' },
    { n:'III', t:'Empfehlung', dur:'persönlich für dich', d:'Du bekommst eine klare Empfehlung — welche fertigen Mischungen oder welche einzelnen ätherischen Öle, in welcher Anwendung (Inhalation, Roll-On, Bad, Pflegeöl) und in welchem Rhythmus zu deinem Alltag passen.' },
    { n:'IV', t:'Begleitung', dur:'nach 2–4 Wochen', d:'Wir besprechen, wie es dir mit der Empfehlung geht — und passen an, wo es nötig ist. So entsteht etwas, das wirklich trägt.' },
  ];
  return (
    <section style={{
      padding:'112px 32px',
      background:'var(--bg-tinted)',
    }}>
      <div style={{maxWidth: 1100, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom: 72}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>So läuft eine Beratung ab</div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(40px, 4.4vw, 60px)', lineHeight:1.05,
            letterSpacing:'-0.018em', color:'var(--ink-900)', margin:'0 0 16px',
            textWrap:'balance',
          }}>Vier Schritte. In deinem Tempo.</h2>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.6,
            color:'var(--ink-700)', maxWidth: 560, margin:'0 auto', textWrap:'pretty',
          }}>
            Du musst nichts vorbereiten. Du musst nichts wissen. Komm einfach so, wie du gerade bist.
          </p>
        </div>

        <ol style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:0}}>
          {steps.map((s, i) => (
            <li key={s.n} style={{
              display:'grid', gridTemplateColumns:'120px 1fr auto', gap: 40,
              padding: '32px 0',
              borderTop:'1px solid var(--mist-300)',
              borderBottom: i === steps.length-1 ? '1px solid var(--mist-300)' : 'none',
              alignItems:'baseline',
            }}>
              <div style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize: 56, lineHeight:0.9, color:'var(--accent-strong)',
                letterSpacing:'-0.02em',
              }}>{s.n}</div>
              <div>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:32,
                  margin:'0 0 6px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                }}>{s.t}</h3>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.65,
                  color:'var(--ink-700)', margin:0, maxWidth: 620, textWrap:'pretty',
                }}>{s.d}</p>
              </div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:12, fontWeight:600,
                letterSpacing:'0.16em', textTransform:'uppercase',
                color:'var(--ink-500)', whiteSpace:'nowrap',
                paddingTop: 12,
              }}>{s.dur}</div>
            </li>
          ))}
        </ol>

        <div style={{textAlign:'center', marginTop:56}}>
          <button onClick={onBook} style={{
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
            color:'var(--cream-50)', background:'var(--brand)',
            border:'none', padding:'14px 32px', borderRadius:999, cursor:'pointer',
          }}>Schritt I beginnen — kostenlos</button>
        </div>
      </div>
    </section>
  );
}
window.HomepageProcess = HomepageProcess;

/* eslint-disable */
function AboutAnnaLena() {
  return (
    <section id="ueber" style={{ background: 'var(--cream-50)', padding: '96px 32px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'center',
      }}>
        <div style={{
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          boxShadow: 'var(--shadow-md)', aspectRatio: '4/5',
        }}>
          <img src="assets/portrait-placeholder.svg"
               alt="Anna-Lena Czarnetzki"
               style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--sage-700)', marginBottom: 16,
          }}>Über mich</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 44,
            lineHeight: 1.15, color: 'var(--ink-900)', margin: 0,
            letterSpacing: '-0.015em',
          }}>Schön, dass du da bist.</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6,
            color: 'var(--ink-700)', marginTop: 24, textWrap: 'pretty', maxWidth: 540,
          }}>
            Ich bin <strong style={{color:'var(--ink-900)'}}>Anna-Lena</strong> — Aromaberaterin,
            Krankenschwester und Sozialarbeiterin. Aus drei Berufen, in denen ich Menschen
            in herausfordernden Momenten begleite, ist ein Wunsch gewachsen: dir
            <em> sanfte, natürliche Werkzeuge</em> mitzugeben, die im Alltag tragen.
          </p>
          <div style={{
            marginTop: 28, padding: '20px 24px', borderRadius: 16,
            background: 'var(--clay-50)', border: '1px solid var(--clay-100)',
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 999, background: 'var(--white)',
              display:'flex',alignItems:'center',justifyContent:'center',
              border: '1px solid var(--gold-300)',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20,
                color: 'var(--gold-500)',
              }}>✦</span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--ink-900)' }}>
                Dipl. Aromaberaterin
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-600)' }}>
                Institut SITYA · 2026 · mit Auszeichnung bestanden
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.AboutAnnaLena = AboutAnnaLena;

/* eslint-disable */
function Hero({ onBook }) {
  return (
    <section id="top" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #F4EDDF 0%, #FAF6EF 80%)',
      paddingTop: 80, paddingBottom: 96, overflow: 'hidden',
    }}>
      <img src="assets/gold-leaves.png"
           style={{ position: 'absolute', right: 40, top: 40, opacity: 0.85, width: 140, pointerEvents:'none' }}
           alt=""/>
      <img src="assets/gold-drop.png"
           style={{ position: 'absolute', right: 200, bottom: 60, opacity: 0.6, width: 60, pointerEvents:'none' }}
           alt=""/>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--sage-700)', marginBottom: 24,
        }}>Aromaberatung · Magdeburg &amp; Online</div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1.04,
          letterSpacing: '-0.018em', color: 'var(--ink-900)',
          margin: 0, maxWidth: 880, textWrap: 'balance',
        }}>
          Mehr Wohlbefinden, innere Balance und Lebensfreude — mit ätherischen Ölen.
        </h1>
        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontWeight: 400, fontSize: 28, color: 'var(--sage-700)',
          marginTop: 24, marginBottom: 0,
        }}>Natürlich. Ganzheitlich. Für dich.</p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55,
          color: 'var(--ink-700)', marginTop: 28, maxWidth: 620, textWrap: 'pretty',
        }}>
          Ich nehme mir Zeit für dich und deine Themen. Ätherische Öle
          können dich auf natürliche Weise unterstützen — für mehr emotionale Stärke,
          Vertrauen und Lebensfreude im Alltag.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={onBook} style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
            color: 'var(--cream-50)', background: 'var(--sage-700)',
            border: 'none', padding: '14px 28px', borderRadius: 999, cursor: 'pointer',
            letterSpacing: '0.01em',
          }}>Kostenloses Kennenlerngespräch</button>
          <a href="#angebote" style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
            color: 'var(--sage-700)', textDecoration: 'none',
            border: '1.5px solid var(--sage-700)',
            padding: '12.5px 26px', borderRadius: 999,
          }}>Mehr erfahren</a>
          <span style={{
            fontFamily: 'var(--font-script)', fontWeight: 500,
            fontSize: 26, color: 'var(--clay-500)', marginLeft: 6,
          }}>— ich freue mich auf dich</span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

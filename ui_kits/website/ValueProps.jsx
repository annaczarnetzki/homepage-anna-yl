/* eslint-disable */
function ValueProps() {
  const items = [
    { t: 'Individuelle Beratung', s: 'Für dein ganz persönliches Wohlbefinden — kein Schema F.' },
    { t: 'Stress &amp; Entspannung', s: 'Werkzeuge für den Alltag, wenn alles zu viel wird.' },
    { t: 'Innere Balance', s: 'Mehr Vertrauen, emotionale Stärke und Klarheit.' },
    { t: 'Gesunder Schlaf', s: 'Sanfte Routinen, die zur Ruhe kommen lassen.' },
    { t: 'Natürliche Unterstützung', s: 'Ätherische Öle als Begleiter im Alltag.' },
  ];
  return (
    <section style={{ background: 'var(--bg-tinted)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--sage-700)', marginBottom: 16,
        }}>Was Aromaberatung dir geben kann</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 48,
          lineHeight: 1.15, color: 'var(--ink-900)', margin: 0,
          letterSpacing: '-0.015em', maxWidth: 720, textWrap: 'balance',
        }}>Sanfte Begleitung — für die kleinen und die großen Themen.</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16, marginTop: 48,
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: 'var(--white)', borderRadius: 20,
              boxShadow: '0 1px 2px rgba(58,51,40,.04), 0 2px 6px rgba(58,51,40,.04)',
              padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 999,
                background: 'var(--sage-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src="assets/icons/leaf.svg" width="20" height="20" style={{ filter: 'invert(22%) sepia(8%) saturate(929%) hue-rotate(45deg)'}}/>
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22,
                color: 'var(--ink-900)', lineHeight: 1.2,
              }} dangerouslySetInnerHTML={{__html: it.t}}/>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55,
                color: 'var(--ink-700)', margin: 0,
              }}>{it.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ValueProps = ValueProps;

/* eslint-disable */
function OffersSection({ onBook }) {
  const offers = [
    {
      tag: 'Kostenlos · 30 Min',
      title: 'Kennenlerngespräch',
      body: 'Wir lernen uns kennen und du erzählst mir, was dich gerade beschäftigt. Unverbindlich, online oder telefonisch.',
      cta: 'Termin finden',
      featured: false,
    },
    {
      tag: 'Einzeltermin · 60 Min',
      title: 'Individuelle Aromaberatung',
      body: 'Wir schauen gemeinsam auf dein Thema und ich stelle dir eine persönliche Empfehlung mit ätherischen Ölen zusammen.',
      cta: 'Buchen',
      featured: true,
    },
    {
      tag: 'Begleitung · 3 Termine',
      title: 'Vertieftes Begleiten',
      body: 'Drei Termine über sechs bis acht Wochen, um Routinen wirklich zu verankern — Schlaf, Stress, innere Balance.',
      cta: 'Anfragen',
      featured: false,
    },
  ];
  return (
    <section id="angebote" style={{ background: 'var(--cream-50)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--sage-700)', marginBottom: 16,
        }}>Angebote</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 48,
          lineHeight: 1.15, color: 'var(--ink-900)', margin: 0,
          letterSpacing: '-0.015em', maxWidth: 700, textWrap: 'balance',
        }}>Drei Wege, wie wir gemeinsam gehen können.</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24, marginTop: 56,
        }}>
          {offers.map((o, i) => (
            <article key={i} style={{
              background: o.featured ? 'var(--sage-700)' : 'var(--white)',
              color: o.featured ? 'var(--cream-50)' : 'var(--ink-900)',
              borderRadius: 20,
              padding: '32px 28px',
              boxShadow: o.featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <span style={{
                alignSelf: 'flex-start',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: o.featured ? 'var(--sage-100)' : 'var(--clay-600)',
                background: o.featured ? 'rgba(255,255,255,.08)' : 'var(--clay-50)',
                padding: '6px 12px', borderRadius: 999,
              }}>{o.tag}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30,
                lineHeight: 1.15, margin: 0, letterSpacing: '-0.01em',
              }}>{o.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55,
                color: o.featured ? 'rgba(250,246,239,.82)' : 'var(--ink-700)',
                margin: 0, flex: 1,
              }}>{o.body}</p>
              <button onClick={onBook} style={{
                alignSelf: 'flex-start',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                color: o.featured ? 'var(--sage-700)' : 'var(--cream-50)',
                background: o.featured ? 'var(--cream-50)' : 'var(--sage-700)',
                border: 'none', padding: '11px 22px', borderRadius: 999, cursor: 'pointer',
              }}>{o.cta} →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.OffersSection = OffersSection;

/* eslint-disable */
function BookingCTA({ onBook }) {
  return (
    <section id="kontakt" style={{ padding: '96px 32px', background: 'var(--cream-50)' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        background: 'var(--sage-700)', color: 'var(--cream-50)',
        borderRadius: 32, padding: '72px 56px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -30, top: -20, opacity: 0.18,
          width: 200, height: 200,
        }}>
          <img src="assets/illustration-bottle.svg" width="200" height="200" alt=""
               style={{ filter: 'brightness(2.5) hue-rotate(40deg)' }}/>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--sage-200)', marginBottom: 14,
          }}>Kostenloses Kennenlerngespräch</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 44,
            lineHeight: 1.15, margin: 0, letterSpacing: '-0.015em', textWrap: 'balance',
          }}>Ich nehme mir Zeit für dich und deine Themen.</h2>
          <p style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontWeight: 400, fontSize: 22, marginTop: 16, color: 'var(--sage-100)',
          }}>Natürlich. Ganzheitlich. Für dich.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <button onClick={onBook} style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16,
            color: 'var(--sage-800)', background: 'var(--cream-50)',
            border: 'none', padding: '16px 28px', borderRadius: 999, cursor: 'pointer',
          }}>Termin finden →</button>
          <a href="tel:01637882018" style={{
            fontFamily: 'var(--font-body)', fontSize: 15,
            color: 'var(--cream-50)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
            padding: '12px', borderRadius: 999,
            border: '1.5px solid rgba(250,246,239,.4)',
          }}>
            <img src="assets/icons/phone.svg" width="18" height="18" style={{filter:'invert(95%) sepia(8%) saturate(216%) hue-rotate(7deg) brightness(105%)'}}/>
            0163 / 788 2018
          </a>
        </div>
      </div>
    </section>
  );
}
window.BookingCTA = BookingCTA;

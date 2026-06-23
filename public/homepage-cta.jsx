/* eslint-disable */
// Großer CTA-Block am Ende der Startseite
function HomepageCTA({ onBook }) {
  return (
    <section style={{
      padding:'112px 32px',
      background:'var(--brand)',
      color:'var(--cream-50)',
    }}>
      <div style={{maxWidth: 880, margin:'0 auto', textAlign:'center'}}>
        <div style={{
          fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
          letterSpacing:'0.22em', textTransform:'uppercase',
          color:'var(--accent)', marginBottom:24,
          display:'inline-flex', alignItems:'center', gap:14,
        }}>
          <span style={{width:32, height:1, background:'var(--accent)'}}></span>
          Kennenlernen
          <span style={{width:32, height:1, background:'var(--accent)'}}></span>
        </div>
        <h2 style={{
          fontFamily:'var(--font-display)', fontWeight:500,
          fontSize:'clamp(40px, 4.8vw, 64px)', lineHeight:1.05,
          letterSpacing:'-0.02em', color:'var(--cream-50)',
          margin:'0 0 24px', textWrap:'balance',
        }}>Du hast Fragen oder möchtest mich kennenlernen?</h2>
        <p style={{
          fontFamily:'var(--font-body)', fontSize:19, lineHeight:1.6,
          color:'rgba(250,246,239,0.88)', margin:'0 auto 40px',
          maxWidth:600, textWrap:'pretty',
        }}>
          Ich biete dir ein kostenfreies, unverbindliches Kennenlerngespräch an,
          ganz egal, wie du dich danach entscheidest.
        </p>
        <button onClick={onBook} style={{
          fontFamily:'var(--font-body)', fontWeight:600, fontSize:16,
          color:'var(--brand)', background:'var(--accent)',
          border:'none', padding:'16px 36px', borderRadius:999, cursor:'pointer',
          letterSpacing:'0.01em',
        }}>Kennenlerngespräch vereinbaren</button>

        <p style={{
          fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.6,
          color:'rgba(250,246,239,0.88)', margin:'32px auto 0', maxWidth:600,
        }}>
          Lieber erst in Ruhe reinschnuppern?{' '}
          <a href="#" target="_blank" rel="noopener noreferrer" style={{
            color:'var(--cream-50)', fontWeight:600,
            textDecoration:'underline', textUnderlineOffset:'3px',
            textDecorationColor:'var(--accent)',
          }}>Starte mit dem kostenfreien 10-Tage-E-Mail-Kurs →</a>
        </p>
      </div>
    </section>
  );
}
window.HomepageCTA = HomepageCTA;

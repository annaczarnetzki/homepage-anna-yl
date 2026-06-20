/* eslint-disable */
// Kurzer Über-Mich-Teaser auf der Startseite
function HomepageTeaser({ setPage }) {
  return (
    <section style={{
      padding:'112px 32px',
      background:'var(--bg-tinted)',
    }}>
      <div style={{maxWidth: 1100, margin:'0 auto'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'320px 1fr', gap:64, alignItems:'center',
        }}>
          <div style={{
            borderRadius:'var(--radius-lg)', overflow:'hidden',
            aspectRatio:'4/5', boxShadow:'var(--shadow-md)',
            border:'1px solid var(--mist-300)',
          }}>
            <img src="assets/heros/hero-about.jpg" alt="Anna-Lena Czarnetzki"
                 style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
          </div>
          <div>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Wer dich begleitet</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4vw, 52px)', lineHeight:1.05,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 24px', textWrap:'balance',
            }}>Ich bin Anna-Lena.</h2>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.7,
              color:'var(--ink-800)', margin:'0 0 16px', maxWidth:560, textWrap:'pretty',
            }}>
              Aromaberaterin, Krankenschwester, Sozialarbeiterin im Krankenhaus und Mama.
              Was als Neugier begann, ist zu einer Herzenssache geworden:
              Menschen und Tiere mit ätherischen Ölen auf ihrem Weg zu begleiten.
            </p>
            <button onClick={()=>{setPage('about'); window.scrollTo({top:0});}} style={{
              marginTop: 16,
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
              color:'var(--brand)', background:'transparent',
              border:'1.5px solid var(--brand)',
              padding:'12.5px 26px', borderRadius:999, cursor:'pointer',
            }}>Mehr über mich erfahren →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HomepageTeaser = HomepageTeaser;

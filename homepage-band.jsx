/* eslint-disable */
// Wide visual band — a cinematic photo with an editorial quote alongside.
// Used on Welcome page to break up sections with breathing room.
function HomepageBand() {
  return (
    <section style={{
      padding:'112px 32px',
      background:'var(--bg)',
      borderBottom:'1px solid var(--mist-200)',
    }}>
      <div style={{maxWidth: 1240, margin:'0 auto'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:64, alignItems:'center',
        }}>
          <div style={{
            borderRadius:'var(--radius-lg)', overflow:'hidden',
            aspectRatio:'4/3',
            boxShadow:'var(--shadow-md)',
            border:'1px solid var(--mist-300)',
          }}>
            <img src="assets/heros/hero-allgemein.jpg"
                 alt="Stilleben — ätherische Öle, Diffuser, Lavendel, Eukalyptus"
                 style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
          </div>
          <div>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:20,
              display:'inline-flex', alignItems:'center', gap:14,
            }}>
              <span style={{width:32, height:1, background:'var(--accent)'}}></span>
              Mein Versprechen
            </div>
            <p style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(28px, 3.2vw, 44px)', lineHeight:1.2,
              letterSpacing:'-0.015em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>Hochwertige ätherische Öle, sanft, ehrlich, zu dir passend.</p>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:'clamp(20px, 2.2vw, 24px)', lineHeight:1.4,
              color:'var(--brand)', margin:'18px 0 0', textWrap:'pretty',
            }}>Reinheit, die du riechen kannst. Und ein Mensch, der zuhört.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HomepageBand = HomepageBand;

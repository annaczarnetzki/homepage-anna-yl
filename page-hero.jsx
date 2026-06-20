/* eslint-disable */
// Shared page hero — used on every content page (not the Willkommen one,
// which has its own tweakable hero). Editorial side-by-side: text left, photo right.
function PageHero({ eyebrow, headline, subtitle, image, imageAlt, intro, children, reversed }) {
  return (
    <section style={{
      position:'relative', overflow:'hidden',
      background:'var(--bg)',
      paddingTop: 64, paddingBottom: 72,
      borderBottom:'1px solid var(--mist-200)',
    }}>
      <div style={{maxWidth: 1240, margin:'0 auto', padding:'0 32px'}}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 1.05fr',
          gap: 56, alignItems:'center',
          direction: reversed ? 'rtl' : 'ltr',
        }}>
          <div style={{direction:'ltr'}}>
            {eyebrow && (
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:22,
                display:'inline-flex', alignItems:'center', gap:14,
              }}>
                <span style={{width:32, height:1, background:'var(--accent)'}}></span>
                {eyebrow}
              </div>
            )}
            <h1 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.6vw, 64px)', lineHeight:1.04,
              letterSpacing:'-0.02em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>{headline}</h1>
            {subtitle && (
              <p style={{
                fontFamily:'var(--font-display)', fontStyle:'italic', fontWeight:400,
                fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.35,
                color:'var(--brand)', margin:'20px 0 0', textWrap:'balance',
              }}>{subtitle}</p>
            )}
            {intro && (
              <p style={{
                fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.7,
                color:'var(--ink-700)', margin:'24px 0 0', maxWidth:540, textWrap:'pretty',
              }}>{intro}</p>
            )}
            {children && <div style={{marginTop:28}}>{children}</div>}
          </div>
          <div style={{
            direction:'ltr',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            boxShadow:'var(--shadow-md)',
            border: image ? '1px solid var(--mist-300)' : '1px dashed var(--mist-300)',
            aspectRatio: '4/3',
            background: image
              ? 'var(--bg-warm)'
              : 'linear-gradient(135deg, var(--brand-soft) 0%, var(--bg-warm) 100%)',
            display: image ? 'block' : 'flex',
            flexDirection:'column', alignItems:'center', justifyContent:'center',
            gap:14, padding: image ? 0 : 32, textAlign:'center',
          }}>
            {image ? (
              <img src={image} alt={imageAlt || ''}
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            ) : (
              <React.Fragment>
                <DSIcon name="leaf" size={96} variant="gold-on-cream" iconSize={50}/>
                <div style={{
                  fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                  letterSpacing:'0.22em', textTransform:'uppercase',
                  color:'var(--ink-500)',
                }}>Foto folgt</div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.PageHero = PageHero;

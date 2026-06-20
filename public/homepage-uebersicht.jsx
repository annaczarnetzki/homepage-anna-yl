/* eslint-disable */
// "Was dich auf dieser Seite erwartet" — 4 Übersichtskarten mit Links zu den Unterseiten.
function HomepageUebersicht({ setPage }) {
  const cards = [
    { key:'allgemein', img:'assets/heros/allgemein-hero.png', sub:'allgemein',
      t:'Ätherische Öle',
      d:'Was Öle sind, wie sie wirken und wie du sie achtsam in deinen Alltag holst.' },
    { key:'familie', img:'assets/heros/familie-hero.png', sub:'für die ganze Familie',
      t:'Familie & Kinder',
      d:'Sanfte Begleitung für die Kleinsten und die ganze Familie.' },
    { key:'hund', img:'assets/heros/hero-willkommen-neu.png', sub:'Aromatologie für deinen Hund',
      t:'Hund',
      d:'Achtsame Rituale für deinen treuen Vierbeiner.' },
    { key:'pferde', img:'assets/heros/pferde-hero.png', sub:'Aromatologie für dein Pferd',
      t:'Pferde',
      d:'Aromatologie für dein Pferd, ehrlich und wirkungsvoll.' },
  ];
  return (
    <section id="uebersicht" style={{
      padding:'112px 32px',
      background:'var(--bg)',
      borderBottom:'1px solid var(--mist-200)',
    }}>
      <div style={{maxWidth: 1240, margin:'0 auto'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:80,
          alignItems:'end', marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Übersicht</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(40px, 4.4vw, 60px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)', margin:0,
              textWrap:'balance',
            }}>Was dich auf dieser Seite erwartet.</h2>
          </div>
          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:22, color:'var(--ink-700)', lineHeight:1.5,
            margin:0, maxWidth: 520, textWrap:'pretty',
          }}>
            Vier Welten, in denen ätherische Öle wirklich etwas verändern können. Wähle deinen Einstieg.
          </p>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0,
          borderTop:'1px solid var(--mist-300)',
        }}>
          {cards.map((c, i) => (
            <button key={c.key} onClick={()=>{setPage(c.key); window.scrollTo({top:0});}}
              style={{
                appearance:'none', textAlign:'left', cursor:'pointer',
                background:'transparent', border:'none',
                padding:'32px 24px 32px',
                borderRight: i < cards.length-1 ? '1px solid var(--mist-200)' : 'none',
                minHeight: 320, display:'flex', flexDirection:'column',
                transition:'background 200ms var(--ease-standard)',
              }}
              onMouseEnter={e=>e.currentTarget.style.background='var(--bg-warm)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <div style={{
                width:'100%', aspectRatio:'4/3', borderRadius:'var(--radius-md)',
                overflow:'hidden', marginBottom:24,
                boxShadow:'var(--shadow-sm)', border:'1px solid var(--mist-200)',
              }}>
                <img src={c.img} alt={c.t}
                     style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--ink-500)', marginBottom:10,
              }}>{c.sub}</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:24,
                margin:'0 0 12px', color:'var(--ink-900)', lineHeight:1.2,
                letterSpacing:'-0.01em',
              }}>{c.t}</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.55,
                color:'var(--ink-700)', margin:0, textWrap:'pretty', flex:1,
              }}>{c.d}</p>
              <div style={{
                marginTop:24, fontFamily:'var(--font-body)', fontSize:13,
                fontWeight:600, color:'var(--brand)',
                display:'inline-flex', alignItems:'center', gap:8,
              }}>
                <span>Weiterlesen</span>
                <span style={{display:'inline-block', transition:'transform 200ms'}}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HomepageUebersicht = HomepageUebersicht;

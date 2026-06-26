/* eslint-disable */
// Typo-first hero variants for Anna-Lena's homepage.
// HERO_LAYOUT decides which variant renders.

function HomepageHero({ onBook, onAbout, layout, headline, showImage, showDiplom }) {
  const tag = (
    <div style={{
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: 'var(--brand)', marginBottom: 28,
      display:'inline-flex', alignItems:'center', gap:14,
    }}>
      <span style={{width:32, height:1, background:'var(--accent)'}}></span>
      Aromaberatung · Magdeburg &amp; Online
    </div>
  );

  const triplet = (
    <p style={{
      fontFamily: 'var(--font-display)', fontStyle: 'italic',
      fontWeight: 400, fontSize: 26, color: 'var(--brand)',
      marginTop: 24, marginBottom: 0, letterSpacing:'-0.005em',
    }}>Ätherische Öle für dich, deine Familie und dein Tier.</p>
  );

  const lede = (
    <div style={{
      fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65,
      color: 'var(--ink-700)', marginTop: 28, maxWidth: 560, textWrap: 'pretty',
      marginBottom: 0, display:'flex', flexDirection:'column', gap: 14,
    }}>
      <p style={{margin:0}}>
        Du suchst nach sanften, natürlichen Wegen, um dich und die, die du liebst, zu begleiten?
        Du möchtest verstehen, was ätherische Öle wirklich können, und wie du sie klug im Alltag einsetzt?
      </p>
      <p style={{margin:0, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, color:'var(--ink-900)'}}>
        Dann bist du hier richtig.
      </p>
      <p style={{margin:0}}>
        Ich begleite Menschen, Familien und Pferdebesitzer auf ihrem Weg mit hochwertigen ätherischen Ölen,
        als ausgebildete Aromaberaterin, Krankenschwester und Sozialarbeiterin, die genau zuhört
        und an deiner Seite bleibt.
      </p>
    </div>
  );

  const ctas = (
    <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
      <button onClick={onBook} style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
        color: 'var(--cream-50)', background: 'var(--brand)',
        border: 'none', padding: '14px 28px', borderRadius: 999, cursor: 'pointer',
        letterSpacing: '0.01em',
      }}>Kostenloses Kennenlerngespräch</button>
      <a href="#uebersicht" onClick={(e)=>{e.preventDefault(); document.getElementById('uebersicht')?.scrollIntoView({behavior:'smooth'});}} style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
        color: 'var(--brand)', textDecoration: 'none',
        border: '1.5px solid var(--brand)',
        padding: '12.5px 26px', borderRadius: 999,
      }}>Übersicht ansehen</a>
      <a href="#about" onClick={(e)=>{e.preventDefault(); onAbout && onAbout();}} style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
        color: 'var(--brand)', textDecoration: 'none',
        border: '1.5px solid var(--brand)',
        padding: '12.5px 26px', borderRadius: 999,
        display:'inline-flex', alignItems:'center', gap:8,
      }}>
        Über mich
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );

  // ---- TYPO-FIRST: editorial headline + wide hero photo -------------------
  if (layout === 'typo-first') {
    const headlineEl = (
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(38px, 5.2vw, 76px)', lineHeight: 1.02,
        letterSpacing: '-0.02em', color: 'var(--ink-900)',
        margin: 0, textWrap: 'balance',
      }}>{headline}</h1>
    );

    return (
      <section style={{
        position:'relative', overflow:'hidden',
        background: 'var(--bg)',
        paddingTop: 64, paddingBottom: 80,
        borderBottom: '1px solid var(--mist-200)',
      }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          {tag}
          {showImage && (
            <div style={{
              position:'relative',
              borderRadius:'var(--radius-lg)',
              overflow:'hidden',
              boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)',
              marginBottom: 56,
              aspectRatio: '16/9',
              maxHeight: 520,
            }}>
              <img src="assets/heros/hero-familie.jpg"
                   alt="Anna-Lena Czarnetzki im Garten"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 22%'}}/>
              {showDiplom && (
                <img src="assets/seal-gold.png" alt="Diplom — Dipl. Aromaberaterin"
                     style={{
                       position:'absolute', right:24, bottom:24, width:96,
                       filter:'drop-shadow(0 6px 14px rgba(58,51,40,0.25))',
                     }}/>
              )}
            </div>
          )}
          <div style={{
            display:'grid',
            gridTemplateColumns:'1.1fr 1fr',
            gap: 64, alignItems:'start',
          }}>
            <div>
              {headlineEl}
              {triplet}
            </div>
            <div>
              {lede}
              {ctas}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ---- SPLIT: classic two-column, text left, photo right --------------------
  if (layout === 'split') {
    return (
      <section style={{
        position:'relative', overflow:'hidden',
        background: 'linear-gradient(180deg, var(--cream-100) 0%, var(--cream-50) 80%)',
        paddingTop: 80, paddingBottom: 80,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{
            display:'grid',
            gridTemplateColumns: showImage ? '1.15fr 1fr' : '1fr',
            gap: 64, alignItems:'center',
          }}>
            <div>
              {tag}
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1.05,
                letterSpacing: '-0.02em', color: 'var(--ink-900)',
                margin: 0, maxWidth: 720, textWrap: 'balance',
              }}>{headline}</h1>
              {triplet}
              {lede}
              {ctas}
            </div>
            {showImage && (
              <div style={{position:'relative'}}>
                <div style={{
                  borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5',
                  border: '1px solid var(--mist-300)',
                }}>
                  <img src="assets/portrait-anna-lena.jpg" alt="Anna-Lena Czarnetzki"
                       style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                {showDiplom && (
                  <img src="assets/seal-gold.png" alt="Diplom"
                       style={{
                         position:'absolute', bottom:-22, right:-22, width:104,
                         filter:'drop-shadow(0 6px 14px rgba(58,51,40,0.2))',
                       }}/>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ---- EDITORIAL: oversized serif words stack, image as inline badge --------
  // Headline is split into lines to feel like an editorial cover.
  if (layout === 'editorial') {
    const lines = headline.split(/[—\-]/).map(s=>s.trim()).filter(Boolean);
    const useLines = lines.length >= 2 ? lines : [headline];
    return (
      <section style={{
        position:'relative', overflow:'hidden',
        background: 'var(--bg)',
        paddingTop: 88, paddingBottom: 96,
        borderBottom: '1px solid var(--mist-200)',
      }}>
        <div style={{
          maxWidth: 1240, margin:'0 auto', padding:'0 32px',
          display:'flex', justifyContent:'space-between', alignItems:'center',
          marginBottom: 56,
        }}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-700)',
          }}>№ 01 · Frühjahr 2026</div>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-700)',
          }}>Aromaberatung &middot; Magdeburg</div>
        </div>
        <div style={{ maxWidth: 1240, margin:'0 auto', padding:'0 32px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(64px, 11vw, 168px)', lineHeight: 0.92,
            letterSpacing: '-0.03em', color:'var(--ink-900)',
            margin: 0, textWrap:'balance',
          }}>
            {useLines.map((line, i) => (
              <span key={i} style={{
                display:'block',
                fontStyle: i % 2 === 1 ? 'italic' : 'normal',
                color: i % 2 === 1 ? 'var(--brand)' : 'var(--ink-900)',
                paddingLeft: i === 1 ? '12%' : 0,
              }}>
                {line}{i < useLines.length-1 && '\u00A0—'}
              </span>
            ))}
          </h1>
          <div style={{
            marginTop: 56,
            display:'grid', gridTemplateColumns: showImage ? '1fr 200px 1fr' : '1fr 1fr',
            gap: 48, alignItems:'start',
          }}>
            <div>
              {triplet}
              {lede}
            </div>
            {showImage && (
              <div style={{justifySelf:'center', position:'relative'}}>
                <div style={{
                  borderRadius:'var(--radius-lg)', overflow:'hidden',
                  width: 200, height: 250, boxShadow:'var(--shadow-md)',
                  border:'1px solid var(--mist-300)',
                }}>
                  <img src="assets/portrait-anna-lena.jpg" alt="Anna-Lena"
                       style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                {showDiplom && (
                  <img src="assets/seal-gold.png" alt="Diplom"
                       style={{position:'absolute', right:-20, bottom:-20, width:78,
                               filter:'drop-shadow(0 6px 14px rgba(58,51,40,0.18))'}}/>
                )}
                <div style={{
                  marginTop:14, fontFamily:'var(--font-body)', fontSize:11,
                  letterSpacing:'0.16em', textTransform:'uppercase',
                  color:'var(--ink-500)', textAlign:'center',
                }}>Anna-Lena C.</div>
              </div>
            )}
            <div style={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end', height:'100%'}}>
              {ctas}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
window.HomepageHero = HomepageHero;

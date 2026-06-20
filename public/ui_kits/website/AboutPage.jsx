/* eslint-disable */
// "Über mich" — vollständig neu nach Anna-Lenas Text.
function AboutPage({ onBook }) {
  return (
    <div data-screen-label="06 Über mich">

      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Über mich"
        headline="Hallo, ich bin Anna-Lena."
        subtitle={<>Mama. Krankenschwester. Sozialarbeiterin. Aromaberaterin.<br/>Und vor allem: ein Mensch, der weiß, wie kostbar das Leben ist.</>}
        image="assets/heros/hero-about.png"
        imageAlt="Anna-Lena Czarnetzki — Portrait im Herbst"
      />

      {/* ============ 1 — Meine Geschichte ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>Kapitel I &mdash; Meine Geschichte</div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.05,
            letterSpacing:'-0.018em', color:'var(--ink-900)',
            margin:'0 0 40px', textWrap:'balance',
          }}>Mein Weg hierher war kein gerader.</h2>

          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <p style={proseLg}>
              Ich bin 1985 geboren, lebe in Magdeburg mit meinem Partner und meinen beiden
              Töchtern, und mein Weg hierher war kein gerader.
            </p>
            <p style={proseLg}>
              2018 habe ich meinen Ehemann verloren. Er war 33 Jahre alt, als er an Lungenkrebs
              starb, mit Hirn- und Rückenmetastasen. Fast zwei Jahre lang sind wir diesen Weg
              gemeinsam gegangen: mit der schulmedizinischen Therapie, mit einem Heilpraktiker,
              mit einer anthroposophischen Klinik. Wir haben alles ausgeschöpft, was uns möglich
              war, und wir haben es zusammen getan.
            </p>
            <p style={proseLg}>
              Diese Zeit hat uns Momente geschenkt, die ich für immer bei mir trage. Fünf Wochen,
              bevor er starb, waren wir noch gemeinsam an der Ostsee. Er war da. Wir waren da.
              Diese Wochen sind ein Geschenk, das mir niemand mehr nehmen kann.
            </p>
            <p style={proseLg}>
              Was ich damals noch nicht kannte, waren ätherische Öle. Niemand hat uns davon
              erzählt. Heute sind sie ein Teil meines Alltags geworden: kleine Rituale, die mir
              Halt und ein gutes Gefühl geben, in leichten wie in schweren Stunden. Manchmal denke
              ich, wie schön es gewesen wäre, diese Begleiter schon damals gekannt zu haben.
            </p>
            <p style={proseLg}>
              Genau deshalb sitze ich heute hier und schreibe diese Zeilen. Ich möchte, dass
              Menschen wissen, was es gibt, damit sie selbst entscheiden können, was zu ihnen passt.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 2 — Wie ich zu den Ölen kam ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:64, alignItems:'flex-start',
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
              }}>Kapitel II</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.05,
                letterSpacing:'-0.018em', color:'var(--ink-900)',
                margin:'0 0 28px', textWrap:'balance',
              }}>Wie ich zu den Ölen kam.</h2>
              <div style={{
                width:'100%', aspectRatio:'4/3', borderRadius:'var(--radius-lg)',
                overflow:'hidden',
                boxShadow:'var(--shadow-md)',
                border:'1px solid var(--mist-300)',
              }}>
                <img src="assets/heros/about-pferd.png"
                     alt="Anna-Lena Stirn an Stirn mit ihrem Pferd im Lavendelfeld bei Sonnenuntergang"
                     style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <p style={{
                fontFamily:'var(--font-script)', fontSize:24,
                color:'var(--accent-strong)', lineHeight:1.2,
                margin:'20px 0 0', textAlign:'center',
              }}>Über mein Pferd kam alles ins Rollen.</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:20}}>
              <p style={proseLg}>
                Den Weg zu den ätherischen Ölen habe ich <em>nicht</em> durch die Krankheit
                meines Mannes gefunden, sondern durch mein Pferd. Genauer gesagt: durch die
                Trainerin meines damaligen Pferdes.
              </p>
              <p style={proseLg}>
                Sie hat mir gezeigt, wie sensibel Pferde auf ätherische Öle reagieren. Wie
                ehrlich sie zeigen, was ihnen guttut. Und ziemlich schnell wurde mir klar:
                Was meinem Pferd guttut, kann auch für mich, für meine Kinder und für die
                Menschen um mich herum eine schöne Begleitung im Alltag sein.
              </p>
              <p style={proseLg}>
                Heute habe ich leider kein eigenes Pferd mehr, aber die Pferdewelt liegt mir
                nach wie vor sehr am Herzen, und ich begleite Pferdemenschen mit großer Freude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3 — Hintergrund / Timeline ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1000, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:64}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kapitel III &mdash; Mein Hintergrund</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.05,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>Was mich heute trägt.</h2>
          </div>

          <ol style={{
            listStyle:'none', padding:0, margin:0,
            display:'flex', flexDirection:'column',
            position:'relative',
          }}>
            {/* Vertical line */}
            <span style={{
              position:'absolute', left:23, top:24, bottom:24,
              width:1, background:'var(--mist-300)',
            }} aria-hidden="true"></span>

            {[
              {y:'2007', t:'Ausbildung zur Krankenschwester abgeschlossen'},
              {y:'2011', t:'Bachelor of Arts in Sozialer Arbeit'},
              {y:'seit 2012', t:'als Sozialarbeiterin im Krankenhaus tätig'},
              {y:'2026', t:'Zertifikat als Aromaberaterin'},
              {y:'Persönlich', t:'fast zwei Jahre intensive Erfahrung mit ganzheitlicher Begleitung eines geliebten Menschen in einer schweren Erkrankung',
               soft:true},
            ].map((it, i) => (
              <li key={i} style={{
                display:'grid', gridTemplateColumns:'48px 1fr',
                gap:32, padding:'20px 0', position:'relative',
              }}>
                <DSIcon name="leaf" size={48}
                        variant={it.soft ? 'purple-on-light' : 'gold-on-cream'}
                        style={{position:'relative', zIndex:1}}/>
                <div style={{paddingTop:10}}>
                  <div style={{
                    fontFamily:'var(--font-display)', fontStyle:'italic',
                    fontSize:18, color: it.soft ? 'var(--accent-strong)' : 'var(--brand)',
                    marginBottom:4,
                  }}>{it.y}</div>
                  <h3 style={{
                    fontFamily:'var(--font-display)', fontWeight:500, fontSize:22,
                    margin:0, color:'var(--ink-900)', letterSpacing:'-0.01em', lineHeight:1.3,
                  }}>{it.t}</h3>
                </div>
              </li>
            ))}
          </ol>

          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.5,
            color:'var(--ink-700)', textAlign:'center',
            margin:'56px auto 0', maxWidth:720, textWrap:'pretty',
            paddingTop:40, borderTop:'1px solid var(--mist-300)',
          }}>
            Diese Mischung aus medizinischem Hintergrund, sozialer Arbeit, persönlicher
            Erfahrung und aromaberaterischer Ausbildung macht meine Arbeit aus.
          </p>
        </div>
      </section>

      {/* ============ Bildband ============ */}
      <section style={{
        padding:'0', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{
          width:'100%', maxHeight: 520, overflow:'hidden',
          position:'relative',
        }}>
          <img src="assets/heros/hero-onkologie.png"
               alt="Anna-Lena in ihrer Praxis mit dem Ölekoffer"
               style={{display:'block', width:'100%', height:'auto', objectFit:'cover'}}/>
        </div>
      </section>

      {/* ============ 4 — Was mir wichtig ist ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:64}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kapitel IV</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.05,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>Was mir wichtig ist.</h2>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24,
          }}>
            {[
              {n:'01', t:'Ganzheitlich denken.',
               d:'Körper, Geist und Seele gehören zusammen. Schulmedizin und sanfte Begleitung schließen sich nicht aus, sie ergänzen sich. Ätherische Öle sind für mich genau das: eine Begleitung im Alltag, niemals ein Ersatz für den Rat einer Ärztin, eines Arztes oder einer Tierärztin.'},
              {n:'02', t:'Aufklären, nicht überreden.',
               d:'Du sollst wissen, was es gibt. Was du daraus machst, entscheidest du selbst.'},
              {n:'03', t:'Da sein.',
               d:'Ich höre zu. Ich begleite dich auf Augenhöhe, ob es um unruhige Nächte mit deinen Kindern geht, um dein Pferd oder um eine schwere Diagnose.'},
              {n:'04', t:'Echt sein.',
               d:'Ich erzähle dir nichts, was ich nicht selbst erfahren oder gründlich gelernt habe.'},
            ].map(c => (
              <div key={c.n} style={{
                background:'var(--bg-elevated)', borderRadius:'var(--radius-lg)',
                padding:'36px 36px 32px',
                boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)',
                display:'flex', flexDirection:'column', gap:14,
              }}>
                <div style={{
                  fontFamily:'var(--font-display)', fontStyle:'italic',
                  fontSize:36, color:'var(--accent-strong)', lineHeight:1,
                }}>{c.n}</div>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:28,
                  margin:0, color:'var(--ink-900)', letterSpacing:'-0.01em',
                  lineHeight:1.2,
                }}>{c.t}</h3>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.65,
                  color:'var(--ink-700)', margin:0, textWrap:'pretty',
                }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5 — Mein Wunsch für dich ============ */}
      <section style={{
        padding:'128px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:820, margin:'0 auto', textAlign:'center'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:24,
            display:'inline-flex', alignItems:'center', gap:14,
          }}>
            <span style={{width:32, height:1, background:'var(--accent)'}}></span>
            Zum Schluss
            <span style={{width:32, height:1, background:'var(--accent)'}}></span>
          </div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(44px, 5.4vw, 80px)', lineHeight:1.04,
            letterSpacing:'-0.02em', color:'var(--ink-900)',
            margin:'0 0 36px', textWrap:'balance',
          }}>Mein Wunsch für dich.</h2>
          <p style={{
            fontFamily:'var(--font-display)', fontWeight:400,
            fontSize:'clamp(24px, 2.8vw, 36px)', lineHeight:1.4,
            letterSpacing:'-0.01em', color:'var(--ink-800)',
            margin:0, textWrap:'balance',
          }}>
            Dass du dich gut aufgehoben fühlst. Dass du Werkzeuge in die Hand
            bekommst, mit denen du selbst gestalten kannst.
          </p>
          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic', fontWeight:500,
            fontSize:'clamp(24px, 2.8vw, 36px)', lineHeight:1.4,
            letterSpacing:'-0.01em', color:'var(--brand)',
            margin:'18px 0 0', textWrap:'balance',
          }}>
            Und dass du spürst: Du bist nicht allein.
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{
        padding:'112px 32px',
        background:'var(--brand)',
        color:'var(--cream-50)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto', textAlign:'center'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--accent)', marginBottom:24,
          }}>Kennenlernen</div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(40px, 4.8vw, 64px)', lineHeight:1.05,
            letterSpacing:'-0.02em', color:'var(--cream-50)',
            margin:'0 0 24px', textWrap:'balance',
          }}>Lust, mich kennenzulernen?</h2>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:19, lineHeight:1.6,
            color:'rgba(250,246,239,0.88)', margin:'0 auto 40px',
            maxWidth:560, textWrap:'pretty',
          }}>
            Ich freue mich auf dich, bei einem kostenfreien, unverbindlichen Gespräch.
          </p>
          <button onClick={onBook} style={{
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:16,
            color:'var(--brand)', background:'var(--accent)',
            border:'none', padding:'16px 36px', borderRadius:999, cursor:'pointer',
            letterSpacing:'0.01em',
          }}>Kennenlerngespräch vereinbaren</button>
        </div>
      </section>

    </div>
  );
}

const proseLg = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.75,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

const primaryBtn = {
  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
  color: 'var(--cream-50)', background: 'var(--brand)',
  border: 'none', padding: '14px 28px', borderRadius: 999, cursor: 'pointer',
  letterSpacing:'0.01em',
};
const ghostBtn = {
  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
  color: 'var(--brand)', textDecoration: 'none',
  border: '1.5px solid var(--brand)',
  padding: '12.5px 26px', borderRadius: 999,
};

window.AboutPage = AboutPage;
// btnStyles is read by BeratungPage/OnkologiePage from the kit — keep it set.
window.btnStyles = { primaryBtn, ghostBtn };

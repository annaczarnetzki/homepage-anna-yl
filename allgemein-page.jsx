/* eslint-disable */
// Ätherische Öle — allgemein. Komplette Seite nach Anna-Lenas Text.
function AllgemeinPage({ onBook }) {
  return (
    <div data-screen-label="02 Ätherische Öle – allgemein">

      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Ätherische Öle — allgemein"
        headline="Die Kraft der ätherischen Öle."
        subtitle="Sanft. Vielseitig. Natürlich."
        image="assets/heros/allgemein-hero.jpg"
        imageAlt="Ätherische Öle inmitten von Lavendel, Kamille, Eukalyptus und Zitronen"
      />

      {/* ============ EINLEITUNG ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center',
          }}>
            <div style={{
              borderRadius:'var(--radius-lg)', overflow:'hidden',
              aspectRatio:'4/3', boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)',
            }}>
              <img src="assets/heros/allgemein-quellen.jpg"
                   alt="Blüten, Blätter, Harz, Schalen, Kräuter — Quellen ätherischer Öle"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:20}}>
              <p style={proseLg}>
                Ätherische Öle sind kleine <strong>Wunderwerke der Natur</strong>, konzentrierte
                Pflanzenessenzen, die seit Jahrtausenden genutzt werden, um Körper, Geist und Seele
                zu unterstützen.
              </p>
              <p style={proseLg}>
                Sie können beruhigen oder beleben, klären oder erden, reinigen oder schützen.
                Sie wirken über den Geruchssinn direkt auf unser <strong>limbisches System</strong>
                {' '}und damit auf unsere Emotionen. Und sie können über die Haut aufgenommen
                werden, um lokal zu wirken.
              </p>
              <blockquote style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize:'clamp(22px, 2.4vw, 30px)', lineHeight:1.35,
                color:'var(--brand)', margin:'12px 0 0',
                borderLeft:'2px solid var(--accent)',
                paddingLeft:28, textWrap:'balance',
              }}>
                Doch nicht jedes Öl ist gleich. Qualität ist alles.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 1 — Warum Qualität entscheidet ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'flex-start',
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
              }}>Kapitel I</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
                letterSpacing:'-0.018em', color:'var(--ink-900)',
                margin:'0 0 32px', textWrap:'balance',
              }}>Warum Qualität entscheidet.</h2>
              <div style={{
                borderRadius:'var(--radius-lg)', overflow:'hidden',
                aspectRatio:'4/3', boxShadow:'var(--shadow-md)',
                border:'1px solid var(--mist-300)',
              }}>
                <img src="assets/heros/allgemein-destillation.jpg"
                     alt="Destillationsapparatur mit ätherischen Ölen"
                     style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <p style={{
                fontFamily:'var(--font-script)', fontSize:24,
                color:'var(--accent-strong)', lineHeight:1.2,
                margin:'18px 0 0', textAlign:'center',
              }}>Aus der Pflanze, ins Fläschchen.</p>
            </div>
            <div>
              <ul style={{
                listStyle:'none', padding:0, margin:0,
                display:'flex', flexDirection:'column', gap:0,
              }}>
                {[
                  {t:'Reinheit', d:'Ohne synthetische Zusätze, ohne Streckungen.'},
                  {t:'Anbau', d:'Ideal aus eigenen, kontrollierten Anbauflächen.'},
                  {t:'Destillation', d:'Schonend, ohne chemische Lösungsmittel.'},
                  {t:'Transparenz', d:'Jeder Schritt nachvollziehbar.'},
                ].map((it, i) => (
                  <li key={it.t} style={{
                    display:'grid', gridTemplateColumns:'auto 1fr', gap:24,
                    padding:'24px 0',
                    borderTop:'1px solid var(--mist-300)',
                    borderBottom: i === 3 ? '1px solid var(--mist-300)' : 'none',
                    alignItems:'flex-start',
                  }}>
                    <div style={{
                      width:36, height:36, borderRadius:999,
                      background:'var(--brand)', color:'var(--cream-50)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      flexShrink:0,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8 6.5 11.5 13 4.5" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily:'var(--font-display)', fontWeight:500, fontSize:24,
                        margin:'0 0 4px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                      }}>{it.t}</h3>
                      <p style={{
                        fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.55,
                        color:'var(--ink-700)', margin:0,
                      }}>{it.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.4,
                color:'var(--ink-800)', margin:'32px 0 0', textWrap:'pretty',
              }}>
                Ich arbeite ausschließlich mit Ölen einer Marke, die genau diese Standards
                erfüllt, und das schon seit über <strong>30 Jahren</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2 — Was Öle für dich tun können ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:64,
            alignItems:'end', marginBottom: 56,
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
              }}>Kapitel II</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
                letterSpacing:'-0.018em', color:'var(--ink-900)',
                margin:0, textWrap:'balance',
              }}>Was Öle für dich tun können.</h2>
            </div>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--ink-700)', lineHeight:1.5,
              margin:0, maxWidth:560, textWrap:'pretty',
            }}>
              Fünf Welten, in denen ätherische Öle den Alltag spürbar verändern können.
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(5, 1fr)', gap:0,
            borderTop:'1px solid var(--mist-300)',
            borderBottom:'1px solid var(--mist-300)',
          }}>
            {[
              {icon:'droplet', t:'Schlaf & Entspannung',
               d:'Sanfte Begleiter für ruhige Nächte.'},
              {icon:'leaf', t:'Energie & Konzentration',
               d:'Frischer Fokus für deinen Tag.'},
              {icon:'check', t:'Immunsystem & Wohlbefinden',
               d:'Stark durch jede Jahreszeit.'},
              {icon:'heart', t:'Emotionale Balance',
               d:'Wenn die Seele Halt braucht.'},
              {icon:'droplet', t:'Natürlicher Haushalt',
               d:'Frei von Chemie.'},
            ].map((c, i, arr) => (
              <div key={c.t} style={{
                padding:'36px 24px 32px',
                borderRight: i < arr.length-1 ? '1px solid var(--mist-200)' : 'none',
                display:'flex', flexDirection:'column', gap:14, minHeight: 280,
              }}>
                <DSIcon name={c.icon} size={52} variant="gold-on-cream"/>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:22,
                  margin:'4px 0 0', color:'var(--ink-900)', letterSpacing:'-0.01em',
                  lineHeight:1.2,
                }}>{c.t}</h3>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.55,
                  color:'var(--ink-700)', margin:0, textWrap:'pretty',
                }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Ergänzende Kapitel III–VI ============ */}
      <AllgemeinKapitel onBook={onBook}/>

      {/* ============ Bildband — Kleine Auszeiten ============ */}
      <section style={{
        padding:'0', background:'var(--bg)',
      }}>
        <div style={{
          position:'relative', overflow:'hidden',
          maxHeight: 520,
        }}>
          <img src="assets/heros/allgemein-auszeiten.jpg"
               alt="Kleine Auszeiten für Körper & Seele — Diffuser, Tee, Lavendel, Notizbuch"
               style={{display:'block', width:'100%', height:'auto', objectFit:'cover'}}/>
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
            margin:'0 0 40px', textWrap:'balance',
          }}>Du möchtest starten oder erst einmal mehr erfahren?</h2>
          <button onClick={onBook} style={{
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:16,
            color:'var(--brand)', background:'var(--accent)',
            border:'none', padding:'16px 36px', borderRadius:999, cursor:'pointer',
            letterSpacing:'0.01em',
          }}>Kostenfreies Kennenlerngespräch</button>
        </div>
      </section>

    </div>
  );
}

const proseLg = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.75,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

window.AllgemeinPage = AllgemeinPage;

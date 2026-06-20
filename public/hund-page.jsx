/* eslint-disable */
// Hund — vollständige Seite. Texte exakt nach Vorgabe übernommen.
function HundPage({ onBook }) {
  return (
    <div data-screen-label="04 Hund">

      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Hund"
        headline="Ätherische Öle im Alltag mit deinem Hund"
        subtitle="Sanft begleiten, immer mit Respekt vor dem, was dein Hund verträgt."
        image="assets/heros/hund-hero.png"
        imageAlt="Familie mit Golden Retriever auf einer Picknickdecke im Lavendelfeld bei Sonnenuntergang"
      />

      {/* ============ INTRO ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <p style={proseLgHund}>
            Tiere haben mich von Anfang an auf diesen Weg mitgenommen. Über die Pferdewelt
            bin ich zu den ätherischen Ölen gekommen, und heute gehört auch unser Hund ganz
            selbstverständlich zu der Familie, in der natürliche Düfte dazugehören. Wenn du
            deinen Alltag mit deinem Hund mit ätherischen Ölen begleiten möchtest, zeige ich
            dir gern, wie das mit Ruhe und Achtsamkeit geht. Denn so vertraut die Öle für uns
            Menschen sind: Beim Hund gelten eigene Regeln.
          </p>
        </div>
      </section>

      {/* ============ Was bei uns dazugehört ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center',
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
              }}>Was bei uns dazugehört</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
                letterSpacing:'-0.018em', color:'var(--ink-900)',
                margin:'0 0 32px', textWrap:'balance',
              }}>Kleine Rituale im Alltag.</h2>
              <p style={proseLgHund}>
                Bei uns sind es kleine Rituale im Alltag: ein ruhiger Moment beim Bürsten, ein
                angenehmer Duft im Raum am Abend, ein bisschen Entspannung nach einem langen
                Spaziergang. Mir geht es dabei ums Wohlfühlen und um unsere gemeinsame Zeit,
                nicht um die Behandlung von Beschwerden. Dafür ist und bleibt deine Tierärztin
                oder dein Tierarzt die richtige Adresse.
              </p>
            </div>
            <div style={{
              borderRadius:'var(--radius-lg)', overflow:'hidden',
              aspectRatio:'3/4', boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)', maxHeight:520, justifySelf:'center',
            }}>
              <img src="assets/heros/hund-fenster.png"
                   alt="Hund am Fenster mit Diffuser und Lavendel im Abendlicht"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Bildband — Bewegung & Nähe ============ */}
      <section style={{padding:'0', background:'var(--bg)'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:0,
        }}>
          <div style={{aspectRatio:'3/2', overflow:'hidden'}}>
            <img src="assets/heros/hund-rennen.png"
                 alt="Australian Shepherd läuft fröhlich über einen Feldweg"
                 style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
          </div>
          <div style={{aspectRatio:'3/2', overflow:'hidden'}}>
            <img src="assets/heros/hund-wald.png"
                 alt="Familie spaziert mit ihrem Hund durch den Wald"
                 style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
          </div>
        </div>
      </section>

      {/* ============ Welche Öle gelten als sanft ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center',
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
              }}>Welche Öle gelten als sanft</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(32px, 3.8vw, 44px)', lineHeight:1.1,
                letterSpacing:'-0.018em', color:'var(--ink-900)',
                margin:'0 0 24px', textWrap:'balance',
              }}>Mild und sorgsam gewählt.</h2>
              <p style={proseLgHund}>
                Als vergleichsweise milde Öle werden im Zusammenhang mit Hunden oft
                Lavendel, Zypresse und Weihrauch genannt. Young Living hat außerdem
                eine eigene, auf Tiere abgestimmte Linie (Animal Scents). Welches Öl zu
                deinem Hund passt, ist sehr individuell. Das schauen wir uns am besten
                gemeinsam an.
              </p>
            </div>
            <div style={{
              display:'flex', flexDirection:'column', gap:16,
            }}>
              {[
                ['Lavendel', 'gilt als sanft & beruhigend'],
                ['Zypresse', 'mild im Umgang mit Tieren'],
                ['Weihrauch', 'erdend für ruhige Momente'],
                ['Animal Scents', 'die auf Tiere abgestimmte Linie'],
              ].map(([t, d]) => (
                <div key={t} style={{
                  display:'grid', gridTemplateColumns:'auto 1fr', gap:18,
                  alignItems:'center',
                  background:'var(--bg-elevated)', borderRadius:'var(--radius-md)',
                  padding:'18px 22px', boxShadow:'var(--shadow-sm)',
                  border:'1px solid var(--mist-200)',
                }}>
                  <DSIcon name="droplet" size={40} variant="gold-on-cream"/>
                  <div>
                    <div style={{
                      fontFamily:'var(--font-display)', fontWeight:500, fontSize:20,
                      color:'var(--ink-900)', lineHeight:1.2,
                    }}>{t}</div>
                    <div style={{
                      fontFamily:'var(--font-body)', fontSize:14, lineHeight:1.5,
                      color:'var(--ink-600)',
                    }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Sicherheit zuerst ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Sicherheit zuerst</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 20px', textWrap:'balance',
            }}>Was mir wirklich am Herzen liegt.</h2>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.65,
              color:'var(--ink-700)', margin:'0 auto', maxWidth:620, textWrap:'pretty',
            }}>
              Hunde nehmen Düfte viel intensiver wahr als wir und verarbeiten ätherische Öle
              anders. Deshalb ein paar Dinge, die mir wirklich am Herzen liegen:
            </p>
          </div>

          <div style={{
            display:'flex', flexDirection:'column', gap:0,
            border:'1px solid var(--mist-300)', borderRadius:'var(--radius-lg)',
            overflow:'hidden', background:'var(--bg-elevated)',
          }}>
            {[
              'Ätherische Öle immer gut verdünnen.',
            ].map((t, i) => (
              <div key={i} style={{
                display:'grid', gridTemplateColumns:'auto 1fr', gap:20,
                padding:'24px 28px',
                borderTop: i > 0 ? '1px solid var(--mist-200)' : 'none',
                alignItems:'flex-start',
              }}>
                <DSIcon name="check" size={32} variant="gold-on-cream" style={{marginTop:2}}/>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.65,
                  color:'var(--ink-800)', margin:0, textWrap:'pretty',
                }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Kurse, Challenges & Community ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:56}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kurse, Challenges &amp; Community</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 16px', textWrap:'balance',
            }}>Du gehst den Weg nicht allein.</h2>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--brand)', lineHeight:1.5,
              margin:'0 auto', maxWidth:560, textWrap:'pretty',
            }}>
              Rund um die Öle ist eine warme Gemeinschaft entstanden, mit Raum für jede Frage.
            </p>
          </div>

          <div style={{
            display:'flex', flexDirection:'column', gap:0,
            border:'1px solid var(--mist-300)', borderRadius:'var(--radius-lg)',
            overflow:'hidden', background:'var(--bg-elevated)',
          }}>
            {[
              {n:'01', t:'5-tägiger Hundestarterkurs',
               d:'Kostenfrei und auch ohne Bestellung, Start einmal im Monat. Eine ruhige Einführung in den achtsamen Alltag mit ätherischen Ölen für deinen Hund.'},
              {n:'02', t:'Monatliche Challenges für Pferd & Hund',
               d:'Begleitete Challenges über 21 Tage zu wechselnden Schwerpunkten, angeleitet in exklusiven WhatsApp-Gruppen.'},
              {n:'03', t:'Wöchentliche Webinare',
               d:'Vorträge mit erfahrenen Referent*innen. Für Hunde (und Katzen) gibt es immer wieder eigene Themen.'},
              {n:'04', t:'Hundearomatologie-Fragegruppe',
               d:'Auf WhatsApp, werktags rund um die Uhr für deine Fragen zur Anwendung der Öle bei deinem Hund.'},
            ].map((it, i) => (
              <div key={it.n} style={{
                display:'grid', gridTemplateColumns:'80px 1fr', gap:32,
                padding:'28px 36px',
                borderTop: i > 0 ? '1px solid var(--mist-200)' : 'none',
                alignItems:'flex-start',
              }}>
                <div style={{
                  fontFamily:'var(--font-display)', fontStyle:'italic',
                  fontSize:40, color:'var(--accent-strong)', lineHeight:0.9,
                  letterSpacing:'-0.02em',
                }}>{it.n}</div>
                <div>
                  <h3 style={{
                    fontFamily:'var(--font-display)', fontWeight:500, fontSize:24,
                    margin:'4px 0 6px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                  }}>{it.t}</h3>
                  <p style={{
                    fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.6,
                    color:'var(--ink-700)', margin:0, textWrap:'pretty',
                  }}>{it.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge-Übersicht */}
          <div style={{marginTop:40}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--ink-500)', marginBottom:20, textAlign:'center',
            }}>Challenges im Überblick</div>
            <div style={{
              display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center',
            }}>
              {[
                ['Darmchallenge', 'jeden 5. im Monat · Hund individuell'],
                ['Leberchallenge', 'jeden 7. & 25. im Monat'],
                ['Believe Challenge', 'jeden 15. im Monat'],
                ['Chakrenbalance', '3 bis 4 Mal im Jahr'],
              ].map(([t, d]) => (
                <div key={t} style={{
                  background:'var(--bg-warm)', borderRadius:'var(--radius-md)',
                  padding:'14px 20px', border:'1px solid var(--mist-200)',
                  display:'flex', flexDirection:'column', gap:2,
                }}>
                  <span style={{
                    fontFamily:'var(--font-display)', fontWeight:500, fontSize:18,
                    color:'var(--ink-900)', lineHeight:1.2,
                  }}>{t}</span>
                  <span style={{
                    fontFamily:'var(--font-body)', fontSize:13, color:'var(--ink-600)',
                  }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Disclaimer-Box ============ */}
      <section style={{
        padding:'80px 32px 96px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:760, margin:'0 auto'}}>
          <div style={{
            background:'var(--bg-warm)',
            border:'1px solid var(--mist-300)',
            borderRadius:'var(--radius-lg)',
            padding:'28px 32px',
            display:'grid', gridTemplateColumns:'auto 1fr', gap:24,
            alignItems:'flex-start',
          }}>
            <DSIcon name="check" size={40} variant="gold-on-cream"/>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.7,
              color:'var(--ink-800)', margin:0, textWrap:'pretty',
            }}>
              Die Informationen auf dieser Seite dienen dem allgemeinen Wohlbefinden und
              ersetzen keine tierärztliche Beratung, Diagnose oder Behandlung. Bitte sprich
              die Anwendung ätherischer Öle bei deinem Hund vorab mit deiner Tierärztin oder
              deinem Tierarzt ab.
            </p>
          </div>
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
          <p style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(28px, 3.4vw, 44px)', lineHeight:1.25,
            letterSpacing:'-0.015em', color:'var(--cream-50)',
            margin:'0 auto 40px', maxWidth:720, textWrap:'balance',
          }}>
            Unsicher, ob und wie ätherische Öle zu deinem Hund passen? In einem kostenfreien
            Kennenlerngespräch schauen wir gemeinsam, was sinnvoll und sicher ist, ganz
            unverbindlich.
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

const proseLgHund = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.8,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

window.HundPage = HundPage;

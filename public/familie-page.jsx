/* eslint-disable */
// Familie & Kinder — komplette Seite nach Anna-Lenas Text.
function FamiliePage({ onBook }) {
  return (
    <div data-screen-label="03 Familie & Kinder">

      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Familie & Kinder"
        headline="Sanfte Begleitung für die ganze Familie."
        subtitle="Von den Kleinsten bis zu den Großen."
        image="assets/heros/familie-hero.jpg"
        imageAlt="Kinderzimmer-Stilleben mit Teddy, Regenbogen, Kinderölen"
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
            <div style={{display:'flex', flexDirection:'column', gap:20}}>
              <p style={proseLgFam}>
                Kinder sind <strong>besonders sensibel</strong>, und gerade deshalb sprechen
                sie wunderbar auf ätherische Öle an. Ob Bauchweh vor der Schule, unruhige
                Nächte, kleine Wehwehchen oder einfach der Wunsch nach mehr Natürlichkeit
                im Familienalltag: Öle können eine wertvolle Unterstützung sein.
              </p>
              <p style={proseLgFam}>
                In unserer Community gibt es einen riesigen <strong>Erfahrungsschatz</strong>
                {' '}rund um Familie, Kinder und Schwangerschaft, und ich teile ihn gerne mit dir.
              </p>
            </div>
            <div style={{
              borderRadius:'var(--radius-lg)', overflow:'hidden',
              aspectRatio:'4/3', boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)',
            }}>
              <img src="assets/heros/familie-natuerlich.jpg"
                   alt="Natürliche Unterstützung — Ruhe, Schlaf, Wohlbefinden, Atemwege, Muskeln & Gelenke"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 1 — Themen / 6 Karten ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
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
              }}>Kapitel I</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
                letterSpacing:'-0.018em', color:'var(--ink-900)',
                margin:0, textWrap:'balance',
              }}>Themen, bei denen Öle begleiten können.</h2>
            </div>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--ink-700)', lineHeight:1.5,
              margin:0, maxWidth:520, textWrap:'pretty',
            }}>
              Sechs Felder, in denen viele Familien starten, und wo Öle leise viel bewegen.
            </p>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24,
          }}>
            {[
              {icon:'droplet', t:'Einschlafen & Durchschlafen',
               d:'Wenn die Nächte unruhig sind und die Tage müde machen.'},
              {icon:'leaf', t:'Schule & Konzentration',
               d:'Bauchweh vor dem Unterricht, Prüfungsstress, Konzentration bei den Hausaufgaben.'},
              {icon:'heart', t:'Mut & Selbstvertrauen',
               d:'Wenn dein Kind schüchtern ist, sich nicht traut oder vor neuen Situationen Angst hat.'},
              {icon:'droplet', t:'Erkältungszeit',
               d:'Sanfte Begleitung durch Schnupfen, Husten und kratzigen Hals.'},
              {icon:'heart', t:'Schwangerschaft, Geburt & Stillzeit',
               d:'Eine besondere Zeit, mit besonderen Begleitern.'},
              {icon:'heart', t:'Emotionale Themen',
               d:'Wenn große Gefühle in kleinen Menschen wohnen.'},
            ].map(c => (
              <div key={c.t} style={{
                background:'var(--bg-elevated)',
                borderRadius:'var(--radius-lg)',
                padding:'32px 28px',
                boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)',
                display:'flex', flexDirection:'column', gap:14,
              }}>
                <DSIcon name={c.icon} size={52} variant="gold-on-cream"/>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:22,
                  margin:'4px 0 0', color:'var(--ink-900)', letterSpacing:'-0.01em',
                  lineHeight:1.2,
                }}>{c.t}</h3>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.6,
                  color:'var(--ink-700)', margin:0, textWrap:'pretty',
                }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 2 — Little Oilers Set ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kapitel II &mdash; Speziell für Kinder</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>Das Little-Oilers-Set.</h2>
          </div>

          <div style={{
            background:'linear-gradient(135deg, var(--brand-soft) 0%, var(--bg-warm) 100%)',
            borderRadius:'var(--radius-xl)',
            padding:'56px 56px',
            boxShadow:'var(--shadow-md)',
            border:'1px solid var(--mist-200)',
            display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:56,
            alignItems:'center',
          }}>
            <div style={{
              aspectRatio:'1/1',
              borderRadius:'50%',
              overflow:'hidden',
              boxShadow:'var(--shadow-md)',
              position:'relative',
              maxWidth:320, justifySelf:'center', width:'100%',
              border:'1px solid var(--mist-300)',
            }}>
              <img src="assets/heros/familie-kind-mutter.jpg"
                   alt="Mutter und Kind im liebevollen Moment mit Diffuser"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--accent-strong)', marginBottom:12,
              }}>Kinder-Starterset</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:36,
                margin:'0 0 16px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                lineHeight:1.15,
              }}>Ein wunderschönes Starterset speziell für Kinder.</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.7,
                color:'var(--ink-800)', margin:'0 0 24px', textWrap:'pretty',
              }}>
                Mit dem beliebten <strong>„Feather the Owl"</strong>-Diffusor (mit
                White-Noise-Funktion!) und einer eigenen Kinderöl-Linie.
                Sanft formuliert, kindgerecht dosiert.
              </p>
              <ul style={{
                listStyle:'none', padding:0, margin:0,
                display:'flex', flexDirection:'column', gap:12,
              }}>
                {[
                  ['leaf', '„Feather the Owl"-Diffusor mit White-Noise'],
                  ['heart', 'Eigene Kinderöl-Linie, sanft formuliert'],
                  ['check', 'Kindgerechte Dosierung'],
                ].map(([icon, text]) => (
                  <li key={text} style={{
                    display:'grid', gridTemplateColumns:'32px 1fr', gap:14,
                    alignItems:'center',
                  }}>
                    <DSIcon name={icon} size={32} variant="gold-on-cream"/>
                    <span style={{
                      fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.5,
                      color:'var(--ink-800)',
                    }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Bildband — Ruhe für die Großen ============ */}
      <section style={{
        padding:'0', background:'var(--bg)',
      }}>
        <div style={{position:'relative', overflow:'hidden', maxHeight:520}}>
          <img src="assets/heros/familie-erwachsene.jpg"
               alt="Auch Erwachsene brauchen Ruhe — Lavendel, Tee und kleine Rituale für jeden Tag"
               style={{display:'block', width:'100%', height:'auto', objectFit:'cover'}}/>
        </div>
      </section>

      {/* ============ 3 — Begleitung für die ganze Familie ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:56}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kapitel III</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 16px', textWrap:'balance',
            }}>Begleitung für die ganze Familie.</h2>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--brand)', lineHeight:1.5,
              margin:'0 auto', maxWidth:560, textWrap:'pretty',
            }}>
              Du startest nicht allein, eine warme Community trägt mit.
            </p>
          </div>

          <div style={{
            display:'flex', flexDirection:'column', gap:0,
            border:'1px solid var(--mist-300)', borderRadius:'var(--radius-lg)',
            overflow:'hidden', background:'var(--bg-elevated)',
          }}>
            {[
              {n:'01', t:'Geführte Gruppen für jede Lebensphase',
               d:'Schwangerschaft, Geburt & Stillzeit · Familienalltag mit Kindern · Schulkinder.'},
              {n:'02', t:'Believe-Challenge (für Kinder & Erwachsene)',
               d:'Eine monatliche Challenge rund um Mut, Selbstvertrauen und in die eigene Kraft kommen. Mit nur ca. 10 Minuten täglich.'},
              {n:'03', t:'Monatsgruppen für Familienthemen',
               d:'Wohlbefinden, Konzentration, Ernährung, DIY-Pflegeprodukte.'},
              {n:'04', t:'Webinare mit Ärztinnen & Therapeutinnen',
               d:'Wöchentlich, kostenfrei, zu vielen Themen rund um den Familienalltag.'},
            ].map((it, i, arr) => (
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
        </div>
      </section>

      {/* ============ 4 — Persönliche Begleitung ============ */}
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
            }}>Kapitel IV</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>Persönliche Begleitung.</h2>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24,
          }}>
            {/* Kennenlerngespräch */}
            <div style={{
              background:'var(--bg-elevated)', borderRadius:'var(--radius-lg)',
              padding:'40px 36px', boxShadow:'var(--shadow-sm)',
              border:'1px solid var(--mist-200)',
              display:'flex', flexDirection:'column',
            }}>
              <DSIcon name="leaf" size={48} variant="gold-on-cream" style={{marginBottom:18}}/>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:8,
              }}>kostenfrei · ca. 30 Min.</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:28,
                margin:'0 0 14px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                lineHeight:1.2,
              }}>Kennenlerngespräch</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.65,
                color:'var(--ink-700)', margin:'0 0 24px', textWrap:'pretty',
                flex:1,
              }}>
                Wir lernen uns in Ruhe kennen, du erzählst mir, was bei dir und deiner
                Familie gerade Thema ist, und wir schauen gemeinsam, wie ich euch begleiten
                kann. <strong>Ganz unverbindlich.</strong>
              </p>
              <button onClick={onBook} style={{
                alignSelf:'flex-start',
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
                color:'var(--cream-50)', background:'var(--brand)',
                border:'none', padding:'12px 24px', borderRadius:999, cursor:'pointer',
              }}>Termin vereinbaren</button>
            </div>

            {/* 10-Tage-E-Mail-Kurs */}
            <div style={{
              background:'var(--bg-warm)', borderRadius:'var(--radius-lg)',
              padding:'40px 36px', boxShadow:'var(--shadow-sm)',
              border:'1px solid var(--mist-200)',
              display:'flex', flexDirection:'column',
            }}>
              <DSIcon name="mail" size={48} variant="gold-on-cream" style={{marginBottom:18}}/>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--accent-strong)', marginBottom:8,
              }}>kostenfrei · 10 Tage</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:28,
                margin:'0 0 14px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                lineHeight:1.2,
              }}>10-Tage-E-Mail-Kurs</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.65,
                color:'var(--ink-700)', margin:'0 0 24px', textWrap:'pretty',
                flex:1,
              }}>
                Lerne in Ruhe die Möglichkeiten kennen: zehn kurze E-Mails mit kleinen
                Impulsen und Alltagsideen rund um ätherische Öle. <strong>In deinem Tempo.</strong>
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{
                alignSelf:'flex-start',
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
                color:'var(--brand)', background:'transparent',
                border:'1.5px solid var(--brand)',
                padding:'12px 24px', borderRadius:999, cursor:'pointer',
                textDecoration:'none',
              }}>Zum E-Mail-Kurs</a>
            </div>
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
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(40px, 4.8vw, 64px)', lineHeight:1.05,
            letterSpacing:'-0.02em', color:'var(--cream-50)',
            margin:'0 0 40px', textWrap:'balance',
          }}>Du möchtest dein Familienleben sanft begleiten?</h2>
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

const proseLgFam = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.75,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

window.FamiliePage = FamiliePage;

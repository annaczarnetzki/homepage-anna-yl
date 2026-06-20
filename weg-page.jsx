/* eslint-disable */
// Der Weg zu den ätherischen Ölen — vollständige Seite. Texte exakt nach Vorgabe.
function WegPage({ onBook }) {
  const YL_LINK = "https://www.youngliving.com/vo/#/signup/new-start?sponsorid=39639723&enrollerid=39639723&isocountrycode=DE&culture=de-DE&type=member";
  return (
    <div data-screen-label="07 Der Weg zu den Ölen">

      {/* ============ HERO / Abschnitt 1 ============ */}
      <PageHero
        eyebrow="Der Weg zu den Ölen"
        headline="Schön, dass du da bist."
        subtitle="Du darfst einfach mal schnuppern, im wörtlichen wie im übertragenen Sinn."
        image="assets/heros/weg-hero.png"
        imageAlt="Young Living Öle — Valor, Frankincense, Believe, Lavender, Lemon — mit Diffuser und Lavendel"
      />

      {/* ============ Abschnitt 1 — Fließtext ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <p style={proseLgWeg}>
              Vielleicht bist du neugierig geworden, auf diese kleinen Fläschchen, die in
              immer mehr Zuhause zum Alltag gehören. Bei mir sind ätherische Öle längst ein
              selbstverständlicher Begleiter: für entspannte Abende, kleine Rituale mit
              meinen Töchtern, einen guten Duft im Haus und für die vielen Momente, in denen
              ich mir etwas Natürliches an meiner Seite wünsche.
            </p>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:'clamp(22px, 2.4vw, 30px)', lineHeight:1.4,
              color:'var(--brand)', margin:'8px 0 0', textWrap:'balance',
            }}>
              Es muss kein großer Schritt sein. Du darfst einfach mal schnuppern, im
              wörtlichen wie im übertragenen Sinn.
            </p>
          </div>
        </div>
      </section>

      {/* ============ E-Mail-Kurs ============ */}
      <section style={{
        padding:'96px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1000, margin:'0 auto'}}>
          <div style={{
            background:'var(--bg-tinted)',
            borderRadius:'var(--radius-xl)',
            padding:'48px 56px',
            border:'1px solid var(--mist-200)',
            display:'grid', gridTemplateColumns:'auto 1fr auto', gap:40,
            alignItems:'center',
          }}>
            <DSIcon name="mail" size={72} variant="gold-on-cream"/>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:12,
              }}>Kostenfreier 10-Tage-E-Mail-Kurs</div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontWeight:500,
                fontSize:'clamp(28px, 3.2vw, 40px)', lineHeight:1.1,
                letterSpacing:'-0.015em', color:'var(--ink-900)',
                margin:'0 0 12px', textWrap:'balance',
              }}>Lerne die Möglichkeiten kennen.</h2>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.65,
                color:'var(--ink-700)', margin:0, maxWidth:520, textWrap:'pretty',
              }}>
                In zehn kurzen E-Mails nehme ich dich mit in die Welt der ätherischen Öle:
                kleine Impulse, Alltagsideen und ein erstes Gefühl dafür, was zu dir passt.
                In deinem Tempo, ganz unverbindlich.
              </p>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
              color:'var(--cream-50)', background:'var(--brand)',
              border:'none', padding:'15px 30px', borderRadius:999,
              textDecoration:'none', whiteSpace:'nowrap', letterSpacing:'0.01em',
            }}>Zum E-Mail-Kurs anmelden</a>
          </div>
        </div>
      </section>

      {/* ============ Abschnitt 2 — Warum Young Living ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center',
          }}>
            <div style={{
              borderRadius:'var(--radius-lg)', overflow:'hidden',
              aspectRatio:'4/3', boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)',
            }}>
              <img src="assets/heros/allgemein-quellen.png"
                   alt="Pflanzliche Quellen ätherischer Öle"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
              }}>Warum ich mit Young Living arbeite</div>
              <p style={proseLgWeg}>
                Auf den Geschmack gebracht hat mich vor Jahren die Trainerin meines damaligen
                Pferdes, geblieben bin ich, weil mich Qualität und Herkunft überzeugt haben.
                Mir ist wichtig, genau zu wissen, was ich empfehle und woher es kommt. Deshalb
                arbeite ich heute mit den Ölen von Young Living, und genauso schön wie die
                Öle ist für mich die Gemeinschaft, die dahintersteht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Abschnitt 3 — Gemeinschaft ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>Was dich in der Gemeinschaft erwartet</div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
            letterSpacing:'-0.018em', color:'var(--ink-900)',
            margin:'0 0 28px', textWrap:'balance',
          }}>Nie nur das Fläschchen, die Menschen drumherum.</h2>
          <p style={{...proseLgWeg, marginBottom:36}}>
            Das Schöne an den Ölen ist für mich nie nur das Fläschchen, sondern die Menschen
            drumherum. Wenn du magst, begleite ich dich hinein:
          </p>

          <div style={{
            display:'flex', flexDirection:'column', gap:16, marginBottom:36,
          }}>
            {[
              'eine persönliche, kostenfreie Begleitung durch mich',
              'Zugang zu Schnupperkursen und Live-Webinaren aus unserem Team',
              'eine Gruppe, in der du jede Frage stellen darfst, egal, ob du ganz am Anfang stehst oder schon länger dabei bist',
            ].map((t, i) => (
              <div key={i} style={{
                display:'grid', gridTemplateColumns:'auto 1fr', gap:20,
                background:'var(--bg-elevated)', borderRadius:'var(--radius-md)',
                padding:'22px 26px', boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)', alignItems:'center',
              }}>
                <DSIcon name="heart" size={40} variant="gold-on-cream"/>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:16.5, lineHeight:1.6,
                  color:'var(--ink-800)', margin:0, textWrap:'pretty',
                }}>{t}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.4,
            color:'var(--brand)', margin:0, textWrap:'balance',
          }}>
            Hier entstehen Austausch, Verbindungen und oft auch echte Freundschaften.
          </p>
        </div>
      </section>

      {/* ============ Abschnitt 4 — Stimmen ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:56}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Stimmen</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:0, textWrap:'balance',
            }}>Was andere erzählen.</h2>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24,
          }}>
            {[
              {q:'Anna-Lena hat sich richtig Zeit für mich genommen und alles in Ruhe erklärt. Ich hatte nie das Gefühl, zu etwas gedrängt zu werden, sondern dass ich selbst entscheiden darf.', a:'[Vorname, Ort]'},
              {q:'Was mir am meisten gegeben hat, war das Gefühl, nicht allein dazustehen. Bei Fragen kann ich mich jederzeit melden, und es ist immer jemand da.', a:'[Vorname, Ort]'},
              {q:'Die kleinen Rituale gehören bei uns inzwischen einfach dazu. Es ist schön, etwas Eigenes gefunden zu haben, auf das wir uns freuen.', a:'[Vorname, Ort]'},
            ].map((s, i) => (
              <figure key={i} style={{
                margin:0,
                background:'var(--bg-elevated)', borderRadius:'var(--radius-lg)',
                padding:'36px 32px', boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)',
                display:'flex', flexDirection:'column', gap:20,
              }}>
                <div style={{
                  fontFamily:'var(--font-display)', fontStyle:'italic',
                  fontSize:44, lineHeight:0.6, color:'var(--accent)',
                }}>&ldquo;</div>
                <blockquote style={{
                  fontFamily:'var(--font-display)', fontStyle:'italic',
                  fontSize:19, lineHeight:1.5, color:'var(--ink-800)',
                  margin:0, padding:0, textWrap:'pretty', flex:1,
                }}>{s.q}</blockquote>
                <figcaption style={{
                  fontFamily:'var(--font-body)', fontSize:13, fontWeight:600,
                  letterSpacing:'0.06em', color:'var(--ink-500)',
                }}>{s.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Abschnitt 5 — Noch unsicher ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:760, margin:'0 auto', textAlign:'center'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:20,
          }}>Noch unsicher? Lass uns reden</div>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:19, lineHeight:1.7,
            color:'var(--ink-800)', margin:'0 auto 36px', textWrap:'pretty',
          }}>
            Du musst dich zu nichts entscheiden und nichts bestellen. Wenn du erst einmal in
            Ruhe Fragen stellen möchtest, ist der beste Einstieg ein kostenfreies,
            unverbindliches Kennenlerngespräch, in deinem Tempo. Erzähl mir, was dich
            interessiert, und wir schauen gemeinsam, was zu dir und deinem Alltag passt.
          </p>
          <button onClick={onBook} style={{
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:16,
            color:'var(--cream-50)', background:'var(--brand)',
            border:'none', padding:'16px 36px', borderRadius:999, cursor:'pointer',
            letterSpacing:'0.01em',
          }}>Kostenfreies Kennenlerngespräch vereinbaren</button>
        </div>
      </section>

      {/* ============ Abschnitt 6 — Starterset ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1000, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Womit du startest</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 16px', textWrap:'balance',
            }}>Das Premium-Starterset.</h2>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.65,
              color:'var(--ink-700)', margin:'0 auto', maxWidth:560, textWrap:'pretty',
            }}>
              Die meisten beginnen mit einem Premium-Starterset, deinem Handwerkszeug für
              unzählige Themen.
            </p>
          </div>

          <div style={{
            background:'var(--bg-elevated)', borderRadius:'var(--radius-lg)',
            padding:'48px', boxShadow:'var(--shadow-md)',
            border:'1px solid var(--mist-200)',
            display:'grid', gridTemplateColumns:'1.2fr auto 1fr', gap:48,
            alignItems:'center',
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--accent-strong)', marginBottom:10,
              }}>Premium-Starterset</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:32,
                margin:'0 0 24px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                lineHeight:1.15,
              }}>Was drin ist.</h3>
              <ul style={{
                listStyle:'none', padding:0, margin:0,
                display:'flex', flexDirection:'column', gap:14,
              }}>
                {[
                  'Hochwertiger Diffusor',
                  '12 der wichtigsten Basisöle',
                  'Probenflaschen und Karten',
                  'Ein Wellness-Drink-Konzentrat als Bonus',
                ].map(item => (
                  <li key={item} style={{
                    display:'grid', gridTemplateColumns:'24px 1fr', gap:14,
                    alignItems:'flex-start',
                  }}>
                    <DSIcon name="check" size={22} variant="gold-on-cream" style={{marginTop:2}}/>
                    <span style={{
                      fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.5,
                      color:'var(--ink-800)',
                    }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              width:1, alignSelf:'stretch', background:'var(--mist-300)',
            }} aria-hidden="true"></div>

            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--accent-strong)', marginBottom:10,
              }}>Individuell beraten</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:26,
                margin:'0 0 14px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                lineHeight:1.2,
              }}>Was zu dir passt, finden wir gemeinsam.</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.65,
                color:'var(--ink-700)', margin:'0 0 24px', textWrap:'pretty',
              }}>
                Welches Set und welcher Einstieg für dich sinnvoll sind, schauen wir in Ruhe
                zusammen an. Im kostenfreien Kennenlerngespräch, ganz unverbindlich.
              </p>
              <button onClick={onBook} style={{
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
                color:'var(--cream-50)', background:'var(--brand)',
                border:'none', padding:'14px 28px', borderRadius:999, cursor:'pointer',
                letterSpacing:'0.01em',
              }}>Kostenfreies Kennenlerngespräch</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Abschnitt 7 — Vorteilskonto ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1000, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:56}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Schon bereit?</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 20px', textWrap:'balance',
            }}>Dein kostenloses Vorteilskonto.</h2>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.65,
              color:'var(--ink-700)', margin:'0 auto', maxWidth:620, textWrap:'pretty',
            }}>
              Wenn du die Öle selbst ausprobieren möchtest, brauchst du nur ein kostenloses
              Vorteilskonto bei Young Living. Das Wichtigste in Kürze, ganz ehrlich:
            </p>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:20, marginBottom:40,
          }}>
            {[
              ['Kostenlos und unverbindlich', 'Kein Abo, kein Mindestumsatz, kein Kaufzwang.'],
              ['24 % Rabatt', 'Auf deine Bestellungen, solange dein Konto aktiv ist.'],
              ['Du entscheidest', 'Ob, wann und wie viel du bestellst. Bestellst du ein Jahr lang nichts, wird dein Konto einfach inaktiv gesetzt, mehr passiert nicht.'],
              ['Ich bin für dich da', 'Ich bin als deine Beraterin hinterlegt, mein persönlicher Support gehört für dich dazu.'],
            ].map(([t, d]) => (
              <div key={t} style={{
                background:'var(--bg-elevated)', borderRadius:'var(--radius-lg)',
                padding:'28px 30px', boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)',
                display:'flex', flexDirection:'column', gap:12,
              }}>
                <DSIcon name="check" size={40} variant="gold-on-cream"/>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:22,
                  margin:0, color:'var(--ink-900)', letterSpacing:'-0.005em', lineHeight:1.2,
                }}>{t}</h3>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.6,
                  color:'var(--ink-700)', margin:0, textWrap:'pretty',
                }}>{d}</p>
              </div>
            ))}
          </div>

          <div style={{textAlign:'center'}}>
            <a href={YL_LINK} target="_blank" rel="noopener noreferrer" style={{
              display:'inline-block',
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:16,
              color:'var(--cream-50)', background:'var(--brand)',
              border:'none', padding:'16px 36px', borderRadius:999,
              textDecoration:'none', letterSpacing:'0.01em',
            }}>Jetzt kostenloses Vorteilskonto einrichten</a>
          </div>

          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.45,
            color:'var(--brand)', margin:'56px auto 0', maxWidth:720,
            textAlign:'center', textWrap:'balance',
          }}>
            Du möchtest die Öle irgendwann nicht nur nutzen, sondern wie ich zu deiner
            eigenen Herzenssache machen? Dann erzähl mir davon. Ich begleite dich gern auch
            auf diesem Weg.
          </p>
        </div>
      </section>

    </div>
  );
}

const proseLgWeg = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.8,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

window.WegPage = WegPage;

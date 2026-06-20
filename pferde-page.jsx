/* eslint-disable */
// Pferdearomatologie — komplette Seite nach Anna-Lenas Text.
function PferdePage({ onBook }) {
  return (
    <div data-screen-label="05 Pferdearomatologie">

      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Pferdearomatologie"
        headline="Ätherische Öle für dein Pferd."
        subtitle="Ehrlich. Sanft. Wirkungsvoll."
        image="assets/heros/pferde-hero.jpg"
        imageAlt="Ätherische Öle im Stall — Pferd im Hintergrund, Lavendel und Pflegebürste"
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
              <img src="assets/heros/pferde-interessiert.jpg"
                   alt="Pferd schnuppert interessiert an einer Flasche Lavendelöl"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:22}}>
              <blockquote style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize:'clamp(28px, 3.2vw, 40px)', lineHeight:1.3,
                color:'var(--brand)', margin:0, padding:0,
                borderLeft:'2px solid var(--accent)',
                paddingLeft:28, textWrap:'balance',
              }}>
                Pferde lügen nicht.
              </blockquote>
              <p style={proseLgPferd}>
                Sie reagieren auf ätherische Öle <strong>ehrlich, klar und manchmal in
                Sekundenschnelle</strong>, sie zeigen uns, was sie brauchen, wenn wir lernen,
                ihnen zuzuhören.
              </p>
              <p style={proseLgPferd}>
                Als Mentorin in einer großen Aromatologie-Community begleite ich Pferdemenschen
                seit Jahren auf diesem Weg. Gemeinsam finden wir heraus, was deinem Pferd
                guttut, <strong>körperlich, emotional und energetisch</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 1 — Wobei ich dich begleite ============ */}
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
              }}>Wobei ich dich begleite.</h2>
            </div>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--ink-700)', lineHeight:1.5,
              margin:0, maxWidth:520, textWrap:'pretty',
            }}>
              Sechs Bereiche, in denen Aromatologie für dein Pferd leise viel bewegen kann.
            </p>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24,
          }}>
            {[
              {t:'Anspannung & Angst',
               d:'Nach Stürzen, schlechten Erfahrungen, Verladeangst, Stress beim Tierarzt oder Hufschmied.'},
              {t:'Körperliche Themen',
               d:'Achtsame Begleitung rund um Fell, Haut und Bewegung im Alltag.'},
              {t:'Emotionale & energetische Begleitung',
               d:'Loslassen alter Muster, Stallwechsel, neue Herde, Trauer, Nervosität.'},
              {t:'Stute, Hengst, Wallach',
               d:'Achtsame Begleitung für jede Lebensphase und jedes Temperament.'},
              {t:'Senior-Pferde',
               d:'Begleitung im Alter und Wohlbefinden bis zum Schluss.'},
              {t:'Du und dein Pferd',
               d:'Denn oft beginnt die Veränderung beim Menschen. Wir arbeiten an eurer Verbindung.'},
            ].map(c => (
              <div key={c.t} style={{
                background:'var(--bg-elevated)',
                borderRadius:'var(--radius-lg)',
                padding:'32px 28px',
                boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)',
                display:'flex', flexDirection:'column', gap:14,
              }}>
                <DSIcon name="leaf" size={52} variant="gold-on-cream"/>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:22,
                  margin:'4px 0 0', color:'var(--ink-900)', letterSpacing:'-0.005em',
                  lineHeight:1.25,
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

      {/* ============ Bildband — Ruhe ============ */}
      <section style={{
        padding:'96px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:64, alignItems:'center',
          }}>
            <div style={{
              borderRadius:'var(--radius-lg)', overflow:'hidden',
              aspectRatio:'4/3', boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)',
            }}>
              <img src="assets/heros/pferde-entspannt.jpg"
                   alt="Anna-Lena beruhigt ein Pferd mit Lavendelöl im Lavendelfeld"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
                display:'inline-flex', alignItems:'center', gap:14,
              }}>
                <span style={{width:32, height:1, background:'var(--accent)'}}></span>
                Im Moment
              </div>
              <p style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize:'clamp(24px, 2.8vw, 34px)', lineHeight:1.35,
                color:'var(--ink-900)', margin:0, textWrap:'balance',
              }}>Ein Atemzug, ein Duft, und das Nervensystem entspannt sich.</p>
              <p style={{
                fontFamily:'var(--font-script)', fontSize:24,
                color:'var(--accent-strong)', lineHeight:1.2,
                margin:'18px 0 0',
              }}>So sieht Vertrauen aus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2 — Unsere Pferde-Community ============ */}
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
            }}>Kapitel II</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(36px, 4.2vw, 56px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 16px', textWrap:'balance',
            }}>Unsere Pferde-Community.</h2>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--brand)', lineHeight:1.5,
              margin:'0 auto', maxWidth:560, textWrap:'pretty',
            }}>
              Du gehst nicht allein. Eine warme Gemeinschaft trägt mit.
            </p>
          </div>

          <div style={{
            display:'flex', flexDirection:'column', gap:0,
            border:'1px solid var(--mist-300)', borderRadius:'var(--radius-lg)',
            overflow:'hidden', background:'var(--bg-elevated)',
          }}>
            {[
              {n:'01', t:'Pferdearomatologie-Gruppe',
               d:'Austausch mit anderen Pferdemenschen, geleitet von erfahrenen Mentorinnen.'},
              {n:'02', t:'Regelmäßige Pferde-Webinare',
               d:'Mit Tierärztinnen, Therapeutinnen und Aromaexpertinnen.'},
              {n:'03', t:'„Magic Horse" Kurs',
               d:'Bei aktiver Teilnahme am Treueprogramm kostenfrei für dich.',
               badge:'Bonus'},
              {n:'04', t:'Challenges für Pferd & Mensch',
               d:'Themenfokussierte Gruppen für gemeinsames Eintauchen.'},
              {n:'05', t:'Robuster Stall-Diffusor',
               d:'Speziell für die Anwendung am Stall oder in der Box.'},
            ].map((it, i) => (
              <div key={it.n} style={{
                display:'grid', gridTemplateColumns:'80px 1fr auto', gap:32,
                padding:'28px 36px',
                borderTop: i > 0 ? '1px solid var(--mist-200)' : 'none',
                alignItems:'center',
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
                    lineHeight:1.2,
                  }}>{it.t}</h3>
                  <p style={{
                    fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.6,
                    color:'var(--ink-700)', margin:0, textWrap:'pretty',
                  }}>{it.d}</p>
                </div>
                {it.badge && (
                  <span style={{
                    fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                    letterSpacing:'0.18em', textTransform:'uppercase',
                    color:'var(--brand)', background:'var(--brand-soft)',
                    padding:'6px 14px', borderRadius:999, whiteSpace:'nowrap',
                  }}>{it.badge}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3 — Persönliche Begleitung ============ */}
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
              margin:0, textWrap:'balance',
            }}>Persönliche Begleitung.</h2>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24}}>
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
                fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.7,
                color:'var(--ink-700)', margin:'0 0 24px', textWrap:'pretty', flex:1,
              }}>
                Wir lernen uns in Ruhe kennen, du erzählst mir von dir und deinem Pferd,
                und wir schauen, ob und wie ich euch begleiten kann.
                <strong> Unverbindlich.</strong>
              </p>
              <button onClick={onBook} style={{
                alignSelf:'flex-start',
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
                color:'var(--cream-50)', background:'var(--brand)',
                border:'none', padding:'12px 24px', borderRadius:999, cursor:'pointer',
              }}>Termin vereinbaren</button>
            </div>

            <div style={{
              background:'var(--bg-warm)', borderRadius:'var(--radius-lg)',
              padding:'40px 36px', boxShadow:'var(--shadow-sm)',
              border:'1px solid var(--mist-200)',
              display:'flex', flexDirection:'column',
            }}>
              <DSIcon name="leaf" size={48} variant="gold-on-cream" style={{marginBottom:18}}/>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--accent-strong)', marginBottom:8,
              }}>Honorar nach Absprache · ca. 60 Min.</div>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:500, fontSize:28,
                margin:'0 0 14px', color:'var(--ink-900)', letterSpacing:'-0.01em',
                lineHeight:1.2,
              }}>Persönliche Beratung</h3>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.7,
                color:'var(--ink-700)', margin:'0 0 24px', textWrap:'pretty', flex:1,
              }}>
                <strong>Individuelle Empfehlungen</strong>, telefonisch, per Zoom oder
                vor Ort nach Absprache.
              </p>
              <button onClick={onBook} style={{
                alignSelf:'flex-start',
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
                color:'var(--brand)', background:'transparent',
                border:'1.5px solid var(--brand)',
                padding:'12px 24px', borderRadius:999, cursor:'pointer',
              }}>Anfragen</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Bildband — Verbindung ============ */}
      <section style={{
        padding:'96px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:64, alignItems:'center',
          }}>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--brand)', marginBottom:18,
                display:'inline-flex', alignItems:'center', gap:14,
              }}>
                <span style={{width:32, height:1, background:'var(--accent)'}}></span>
                Die Verbindung
              </div>
              <p style={{
                fontFamily:'var(--font-display)', fontStyle:'italic',
                fontSize:'clamp(24px, 2.8vw, 34px)', lineHeight:1.35,
                color:'var(--ink-900)', margin:0, textWrap:'balance',
              }}>Wenn Stirn an Stirn ruht, wird der Tag still, und das Vertrauen wächst leise.</p>
              <p style={{
                fontFamily:'var(--font-script)', fontSize:24,
                color:'var(--accent-strong)', lineHeight:1.2,
                margin:'18px 0 0',
              }}>Du und dein Pferd.</p>
            </div>
            <div style={{
              borderRadius:'var(--radius-lg)', overflow:'hidden',
              aspectRatio:'4/3', boxShadow:'var(--shadow-md)',
              border:'1px solid var(--mist-300)',
            }}>
              <img src="assets/heros/pferde-sonnenuntergang.jpg"
                   alt="Inniger Moment zwischen Mensch und Pferd im Sonnenuntergang"
                   style={{display:'block', width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Tierarzt-Hinweis ============ */}
      <section style={{
        padding:'80px 32px 96px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth: 760, margin:'0 auto'}}>
          <div style={{
            background:'var(--bg-warm)',
            border:'1px solid var(--mist-300)',
            borderRadius:'var(--radius-lg)',
            padding:'28px 32px',
            display:'grid', gridTemplateColumns:'auto 1fr', gap:24,
            alignItems:'flex-start',
          }}>
            <DSIcon name="check" size={40} variant="gold-on-cream"/>
            <div>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--accent-strong)', marginBottom:8,
              }}>Wichtiger Hinweis</div>
              <p style={{
                fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.7,
                color:'var(--ink-800)', margin:0, textWrap:'pretty',
              }}>
                Ätherische Öle <strong>ersetzen keinen Tierarzt</strong>. Bei akuten oder
                ernsthaften Beschwerden konsultiere bitte immer eine Tierärztin oder einen
                Tierarzt.
              </p>
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
          }}>Dein Pferd verdient diese sanfte Unterstützung.</h2>
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

const proseLgPferd = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.8,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

window.PferdePage = PferdePage;

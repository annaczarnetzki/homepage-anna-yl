/* eslint-disable */
// Ergänzende Kapitel III–VI für die Seite "Ätherische Öle — allgemein".
// Stil wie Kapitel I & II: Aubergine/Creme/Gold, Serif-Überschrift, Eyebrow + Leadzeile.
function AllgemeinKapitel({ onBook }) {
  return (
    <React.Fragment>

      {/* ============ III — Wie Duft uns erreicht ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>Kapitel III</div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
            letterSpacing:'-0.018em', color:'var(--ink-900)',
            margin:'0 0 12px', textWrap:'balance',
          }}>Wie Duft uns erreicht.</h2>
          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.4,
            color:'var(--brand)', margin:'0 0 32px', textWrap:'balance',
          }}>Vom Riechen zum Empfinden.</p>
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <p style={proseLgKap}>
              Der Geruchssinn ist der einzige unserer Sinne, der ohne Umweg ins limbische
              System gelangt, jene Region des Gehirns, die eng mit Emotionen, Erinnerung und
              Stimmung verknüpft ist.
            </p>
            <p style={proseLgKap}>
              Während andere Sinneseindrücke erst verarbeitet und weitergeleitet werden,
              erreicht ein Duft diese Ebene fast unmittelbar. Das erklärt, warum ein einzelner
              Duft eine ganze Atmosphäre verändern, eine Erinnerung wecken oder einen Moment
              im Tag markieren kann.
            </p>
            <p style={proseLgKap}>
              Genau hier setzen ätherische Öle an: Sie sprechen über den Geruchssinn eine sehr
              ursprüngliche Ebene an, noch bevor ein Gedanke entsteht.
            </p>
            <p style={proseLgKap}>
              Daneben können einige Öle über die Haut aufgenommen werden, stets verdünnt und
              für die örtliche Anwendung.
            </p>
          </div>
        </div>
      </section>

      {/* ============ IV — Wie du die Öle anwendest ============ */}
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
            }}>Kapitel IV</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 12px', textWrap:'balance',
            }}>Wie du die Öle anwendest.</h2>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--brand)', lineHeight:1.4,
              margin:0, textWrap:'balance',
            }}>Vier Wege in deinen Alltag.</p>
          </div>
          <div style={{
            display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24,
          }}>
            {[
              {icon:'droplet', t:'Im Raum', d:'Ein Diffuser verteilt feinste Tröpfchen in der Luft und füllt den Raum mit Duft.'},
              {icon:'heart', t:'Auf der Haut', d:'Immer verdünnt in einem Trägeröl, etwa als Roll-On für unterwegs.'},
              {icon:'leaf', t:'Als Inhalation', d:'Ein Tropfen auf ein Taschentuch, ein paar bewusste Atemzüge.'},
              {icon:'check', t:'Im Haushalt', d:'Als natürliche Alternative für Reinigung und Raumduft.'},
            ].map(c => (
              <div key={c.t} style={{
                background:'var(--bg-elevated)', borderRadius:'var(--radius-lg)',
                padding:'32px 30px', boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--mist-200)',
                display:'flex', flexDirection:'column', gap:14,
              }}>
                <DSIcon name={c.icon} size={48} variant="gold-on-cream"/>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight:500, fontSize:24,
                  margin:0, color:'var(--ink-900)', letterSpacing:'-0.01em', lineHeight:1.2,
                }}>{c.t}</h3>
                <p style={{
                  fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.6,
                  color:'var(--ink-700)', margin:0, textWrap:'pretty',
                }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ V — Sicherheit & Achtsamkeit ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Kapitel V</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
              letterSpacing:'-0.018em', color:'var(--ink-900)',
              margin:'0 0 12px', textWrap:'balance',
            }}>Sicherheit &amp; Achtsamkeit.</h2>
            <p style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize:22, color:'var(--brand)', lineHeight:1.4,
              margin:0, textWrap:'balance',
            }}>Konzentriert heißt: sorgsam.</p>
          </div>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.65,
            color:'var(--ink-700)', margin:'0 0 36px', textAlign:'center',
            maxWidth:620, marginLeft:'auto', marginRight:'auto', textWrap:'pretty',
          }}>
            Ätherische Öle sind hochkonzentrierte Pflanzenessenzen. Wer sie kennt, geht
            sorgsam mit ihnen um:
          </p>

          <div style={{
            display:'flex', flexDirection:'column', gap:0,
            border:'1px solid var(--mist-300)', borderRadius:'var(--radius-lg)',
            overflow:'hidden', background:'var(--bg-elevated)',
          }}>
            {[
              ['Verdünnen', 'Auf der Haut gehören sie in ein Trägeröl, nie pur auf empfindliche Stellen.'],
              ['Erst testen', 'Vor der ersten Anwendung an einer kleinen Hautstelle prüfen.'],
              ['Zitrusöle & Sonne', 'Manche Zitrusöle machen die Haut lichtempfindlich, nach dem Auftragen direkte Sonne meiden.'],
              ['Augen & Schleimhäute aussparen', 'Nicht in die Augen bringen und nicht einnehmen.'],
              ['Besondere Umsicht', 'Bei Kindern, in der Schwangerschaft, bei Vorerkrankungen und im Umgang mit Tieren gelten eigene Regeln.'],
              ['Richtig lagern', 'Kühl, dunkel und außerhalb der Reichweite von Kindern.'],
            ].map((row, i) => (
              <div key={row[0]} style={{
                display:'grid', gridTemplateColumns:'auto 1fr', gap:20,
                padding:'22px 28px',
                borderTop: i > 0 ? '1px solid var(--mist-200)' : 'none',
                alignItems:'flex-start',
              }}>
                <DSIcon name="check" size={32} variant="gold-on-cream" style={{marginTop:2}}/>
                <div>
                  <div style={{
                    fontFamily:'var(--font-display)', fontWeight:500, fontSize:20,
                    color:'var(--ink-900)', marginBottom:3, letterSpacing:'-0.005em',
                  }}>{row[0]}</div>
                  <div style={{
                    fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.55,
                    color:'var(--ink-700)',
                  }}>{row[1]}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop:32, padding:'24px 28px',
            background:'var(--bg-warm)', borderRadius:'var(--radius-md)',
            display:'grid', gridTemplateColumns:'auto 1fr', gap:20, alignItems:'flex-start',
          }}>
            <DSIcon name="check" size={36} variant="gold-on-cream"/>
            <p style={{
              fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.65,
              color:'var(--ink-800)', margin:0, textWrap:'pretty',
            }}>
              Ätherische Öle ersetzen keine ärztliche Behandlung. Bei gesundheitlichen
              Beschwerden, in der Schwangerschaft, bei Säuglingen und Kleinkindern oder bei
              bestehenden Erkrankungen besprich die Anwendung bitte vorab mit deiner Ärztin
              oder deinem Arzt.
            </p>
          </div>
        </div>
      </section>

      {/* ============ VI — Duft als tägliches Ritual ============ */}
      <section style={{
        padding:'112px 32px', background:'var(--bg-tinted)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>Kapitel VI</div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(32px, 3.8vw, 48px)', lineHeight:1.1,
            letterSpacing:'-0.018em', color:'var(--ink-900)',
            margin:'0 0 12px', textWrap:'balance',
          }}>Duft als tägliches Ritual.</h2>
          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:'clamp(20px, 2.2vw, 26px)', lineHeight:1.4,
            color:'var(--brand)', margin:'0 0 32px', textWrap:'balance',
          }}>Ein fester Duft, ein fester Moment.</p>
          <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <p style={proseLgKap}>
              Ein Duft kann ein Anker sein. Immer derselbe Duft am Morgen, bevor der Tag
              beginnt. Ein anderer am Abend, wenn er zur Ruhe kommt. Ein dritter für den
              Moment, in dem du dich sammeln möchtest.
            </p>
            <p style={proseLgKap}>
              Nicht das Öl allein macht den Unterschied, sondern der wiederkehrende Moment,
              den du damit verbindest. So wird aus einem Tropfen ein kleines Ritual, und aus
              dem Ritual ein vertrauter Begleiter durch den Tag.
            </p>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
}

const proseLgKap = {
  fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.8,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};

window.AllgemeinKapitel = AllgemeinKapitel;

/* eslint-disable */
// Design-system icons. Drop-in replacement for the emoji-style chips.
// Use: <DSIcon name="leaf" /> — wraps a Lucide-style stroke icon in a
// gold-clay or purple-clay gradient circle, as defined in the design system.
//
// Variants:
//   "gold-on-cream"   — default. For cream/warm backgrounds.
//   "purple-on-light" — for purple-50 tinted sections.
//   "gold-on-purple"  — for the deep-purple CTA/footer.
//   "purple-on-purple"— quiet emphasis on dark.
//
// Available icon names map to /assets/icons/*.svg:
//   droplet · leaf · heart · check · mail · phone · calendar
//   instagram · map-pin · clock · chevron-right · menu · x

const __DS_ICONS = {
  droplet:  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>,
  leaf:     <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.6.7A18.5 18.5 0 0 1 19.5 11.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>,
  heart:    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
  check:    <polyline points="20 6 9 17 4 12"/>,
  mail:     <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  phone:    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></>,
  instagram:<><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37a4 4 0 1 1-7.92 1.18A4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
  'map-pin':<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  clock:    <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  'chevron-right': <polyline points="9 18 15 12 9 6"/>,
  menu:     <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
  x:        <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
};

const __DS_VARIANTS = {
  'gold-on-cream': {
    bg: 'linear-gradient(155deg, #FFF7E2 0%, #FBE39B 55%, #EAC762 100%)',
    boxShadow: 'inset 1px 2px 2px rgba(255,255,255,.85), inset -2px -3px 4px rgba(122,99,31,.18), 0 6px 14px -4px rgba(122,99,31,.35)',
    stroke: '#7A631F',
  },
  'purple-on-light': {
    bg: 'linear-gradient(155deg, #EAD5F4 0%, #B57BD8 55%, #832FB1 100%)',
    boxShadow: 'inset 1px 2px 2px rgba(255,255,255,.7), inset -2px -3px 4px rgba(59,20,87,.35), 0 6px 14px -4px rgba(83,27,121,.4)',
    stroke: '#FFF7E2',
  },
  'gold-on-purple': {
    bg: 'linear-gradient(155deg, #FFDA74 0%, #EAC762 55%, #A2842A 100%)',
    boxShadow: 'inset 1px 2px 2px rgba(255,255,255,.6), inset -2px -3px 4px rgba(122,99,31,.4), 0 6px 14px -4px rgba(0,0,0,.5)',
    stroke: '#531B79',
  },
  'purple-on-purple': {
    bg: 'linear-gradient(155deg, #B57BD8 0%, #832FB1 55%, #531B79 100%)',
    boxShadow: 'inset 1px 2px 2px rgba(255,255,255,.4), inset -2px -3px 4px rgba(0,0,0,.35), 0 6px 14px -4px rgba(0,0,0,.5)',
    stroke: '#FFDA74',
  },
};

function DSIcon({ name = 'leaf', size = 56, variant = 'gold-on-cream', style = {}, iconSize, strokeWidth = 1.8 }) {
  const icon = __DS_ICONS[name] || __DS_ICONS.leaf;
  const v = __DS_VARIANTS[variant] || __DS_VARIANTS['gold-on-cream'];
  const inner = iconSize || Math.round(size * 0.56);
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      borderRadius: '50%',
      background: v.bg,
      boxShadow: v.boxShadow,
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      ...style,
    }} aria-hidden="true">
      <svg width={inner} height={inner} viewBox="0 0 24 24" fill="none"
           stroke={v.stroke} strokeWidth={strokeWidth}
           strokeLinecap="round" strokeLinejoin="round">
        {icon}
      </svg>
    </div>
  );
}

// Plain (no clay) icon, for inline use next to text.
function DSIconInline({ name = 'leaf', size = 20, color = 'currentColor', strokeWidth = 1.75, style = {} }) {
  const icon = __DS_ICONS[name] || __DS_ICONS.leaf;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={strokeWidth}
         strokeLinecap="round" strokeLinejoin="round"
         style={{display:'inline-block', verticalAlign:'middle', ...style}}
         aria-hidden="true">
      {icon}
    </svg>
  );
}

window.DSIcon = DSIcon;
window.DSIconInline = DSIconInline;

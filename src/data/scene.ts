// The banner scene: which season and whether it's day or night.
// Auto follows the visitor's calendar (season) and clock (day/night).

export type Season = 'winter' | 'spring' | 'summer' | 'autumn';
export type Tod = 'day' | 'night';

export const seasons: Season[] = ['winter', 'spring', 'summer', 'autumn'];

// When each season arrives, roughly following Toronto's weather rather than the calendar quarters.
// [season, day of year it arrives, days the photos blend over]. Between changes the season holds steady.
export const changes: [Season, number, number][] = [
  ['spring', 79, 20],  // ~Mar 20: snow gone, thaw
  ['summer', 152, 16], // ~Jun 1: full leaf, warm
  ['autumn', 263, 20], // ~Sep 20: colours turning
  ['winter', 319, 20], // ~Nov 15: bare trees, first snow; fully winter by ~Nov 25
];

// Page colours per season, for day and for night. Every pair passes WCAG AA for text.
export const palettes: Record<Season, Record<Tod, { bg: string; accent: string }>> = {
  winter: { day: { bg: '#e6eef6', accent: '#1d7373' }, night: { bg: '#0e1520', accent: '#6cc7c1' } }, // frozen lake, glacier teal
  spring: { day: { bg: '#edf1ea', accent: '#2e6a4c' }, night: { bg: '#0f1611', accent: '#8ccfa3' } }, // misty sage, pine
  summer: { day: { bg: '#f6efdc', accent: '#1b5a8a' }, night: { bg: '#0c1424', accent: '#8dbcf2' } }, // golden hour, lake blue
  autumn: { day: { bg: '#f7ebe6', accent: '#a8472b' }, night: { bg: '#17110f', accent: '#f0946f' } }, // sunset peach, terracotta
};

// Text colours for day and night (shared by every season).
export const ink: Record<Tod, { fg: string; text: string; muted: string; tile: string }> = {
  day: { fg: '#3c3c3c', text: '#525252', muted: '#5c676b', tile: '#e2e8ee' },
  night: { fg: '#e6eaf0', text: '#b9c1cb', muted: '#8f9aa6', tile: '#1b2330' },
};

// Night: dark mode only late at night (8pm–4am, visitor's local time). Around it the banner photo
// blends: day into night over the 2 h before 8pm, and night back into day over the 2 h after 4am.
export const night = { start: 20, end: 4, fade: 2 };

export const alts: Record<Season, Record<Tod, string>> = {
  winter: {
    day: 'Frozen Vermilion Lakes at dusk with Mount Rundle, a rising moon and the Banff Rockies',
    night: 'Frozen Vermilion Lakes under a moonlit night sky with Mount Rundle',
  },
  spring: {
    day: 'Vermilion Lakes at a misty spring sunrise, Mount Rundle reflected in still water',
    night: 'Vermilion Lakes on a quiet spring night, the mountains dark against the sky',
  },
  summer: {
    day: 'Vermilion Lakes on a summer evening, mountains mirrored in the deep blue water',
    night: 'Vermilion Lakes on a summer night, the moon over the mountains',
  },
  autumn: {
    day: 'Vermilion Lakes at an autumn sunset, golden larches and pink sky reflected in the lake',
    night: 'Vermilion Lakes on an autumn night, still water under a moonlit sky',
  },
};

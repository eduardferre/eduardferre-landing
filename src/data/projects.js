/**
 * Projects data — to add a new project, append an object to this array.
 *
 * Fields:
 *   id       — unique string identifier
 *   title    — display name
 *   description — short blurb (1–2 sentences)
 *   url      — full https:// destination URL
 *   tag      — category label shown above the title
 *   color    — hex accent color for this card
 *   icon     — decorative character/emoji (top-right ghost)
 *   status   — 'live' | 'wip'
 *   tech     — array of tech stack strings
 *   featured — if true, card spans 2 columns on large screens
 */
export const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio Personal',
    description:
      'Showcase of projects, skills and professional experience. Designed to tell a story, not just list technologies.',
    url: 'https://portfolio.eduardferre.dev',
    tag: 'Portfolio',
    color: '#B78BFF',
    icon: '◈',
    status: 'live',
    tech: ['Astro', 'React', 'Tailwind'],
    featured: true,
  },
  {
    id: 'zenithfi',
    title: 'ZenithFI',
    description:
      'Financial app for personal investment management and real-time net worth tracking.',
    url: 'https://zenithfi.eduardferre.dev',
    tag: 'FinTech',
    color: '#22D3EE',
    icon: '◎',
    status: 'live',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    featured: false,
  },
];

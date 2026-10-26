// Firm details used across the site. Edit here, not in the pages.
export const SITE = {
  name: 'Centennial Advisory',
  // Keep false until launch so search engines skip the preview. Set true when the real domain goes live.
  indexable: false,
  description:
    'Centennial Advisory provides high-quality advisory, analytical and evaluation services.',
  location: 'Washington DC',
  email: 'contact@centennial-advisory.com',
};

export const NAV = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/experience/', label: 'Experience' },
  { href: '/publications/', label: 'Publications' },
  { href: '/people/', label: 'People' },
  { href: '/contact/', label: 'Contact' },
];

// Order follows the EOI client sentence. h = display height in px, set per logo to balance visual weight.
export const INSTITUTIONS = [
  { name: 'African Development Bank', logo: 'afdb', h: 46 },
  { name: 'Asian Development Bank', logo: 'asdb', h: 46 },
  { name: 'Global Environment Facility', logo: 'gef', h: 42 },
  { name: 'Inter-American Development Bank', logo: 'idb', h: 32 },
  { name: 'OECD / MOPAN', logo: 'oecd', h: 30 },
  { name: 'World Bank Group', logo: 'wbg', h: 28 },
  { name: 'United Nations Development Programme', logo: 'undp', h: 54 },
  { name: 'Food and Agriculture Organization', logo: 'fao', h: 50 },
  { name: 'United Nations Environment Programme', logo: 'unep', h: 50 },
  { name: 'United Nations Capital Development Fund', logo: 'uncdf', h: 50 },
];

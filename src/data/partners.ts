// Partner institutions with their own page. Work is matched by client, plus named assignments
// where the institution was the subject of the work (for example a MOPAN assessment).
export type Partner = { slug: string; name: string; short: string; tile?: string; logo?: string; h?: number; clients?: string[]; ids?: string[]; intro?: string[] };

export const PARTNERS: Partner[] = [
  {
    slug: 'afdb', name: 'African Development Bank', short: 'AfDB', logo: 'afdb', h: 44, clients: ['AfDB'],
    intro: [
      'Centennial has maintained a long-standing partnership with the AfDB, completing more than a dozen strategic evaluations, reviews, and advisory assignments for both IDEV and Bank Management.',
      "Beyond IDEV, Centennial has supported AfDB's senior management and Board through major institutional assignments, including the Mid-Term Review of the Ten-Year Strategy 2013–2022, the Strategic Staffing Review (2019–2020), the preparation of six consecutive AfDB Annual Reports (2018–2023), and the High-Level Panel on Accelerating Development Impact in Africa through the High 5s (2016–2017). These engagements have strengthened Centennial's understanding of the Bank's governance, operational systems, and concessional finance architecture, ensuring familiarity with both headquarters and regional operations.",
    ],
  },
  { slug: 'oecd-mopan', name: 'MOPAN, hosted by the OECD', short: 'OECD / MOPAN', tile: 'MOPAN', logo: 'oecd', h: 28, clients: ['OECD / MOPAN'] },
  { slug: 'jica', name: 'Japan International Cooperation Agency', short: 'JICA', logo: 'jica', h: 42, clients: ['JICA'] },
  { slug: 'ifad', name: 'International Fund for Agricultural Development', short: 'IFAD', logo: 'ifad', h: 50, clients: ['IFAD'], ids: ['mopan-ifad'] },
  { slug: 'asdb', name: 'Asian Development Bank', short: 'AsDB', logo: 'asdb', h: 44, clients: ['AsDB'], ids: ['mopan-asdb'] },
  { slug: 'world-bank', name: 'World Bank Group', short: 'World Bank Group', tile: 'World Bank', logo: 'wbg', h: 24, clients: ['World Bank Group'], ids: ['mopan-world-bank', 'mopan-ifc'] },
  { slug: 'gef', name: 'Global Environment Facility', short: 'GEF', logo: 'gef', h: 42, clients: ['GEF'] },
  { slug: 'idb', name: 'Inter-American Development Bank Group', short: 'IDB', logo: 'idb', h: 32, ids: ['mopan-idb-invest'] },
  { slug: 'fao', name: 'Food and Agriculture Organization', short: 'FAO', logo: 'fao', h: 46, clients: ['FAO'] },
  { slug: 'unep', name: 'United Nations Environment Programme', short: 'UNEP', logo: 'unep', h: 48, ids: ['mopan-unep'] },
  { slug: 'uncdf', name: 'United Nations Capital Development Fund', short: 'UNCDF', logo: 'uncdf', h: 48, ids: ['mopan-uncdf'] },
  { slug: 'caf', name: 'CAF, Development Bank of Latin America and the Caribbean', short: 'CAF', logo: 'caf', h: 36, clients: ['CAF'] },
  { slug: 'undp', name: 'United Nations Development Programme', short: 'UNDP', logo: 'undp', h: 52 },
  { slug: 'isdb', name: 'Islamic Development Bank Group', short: 'IsDB', clients: ['IsDB'] },
  { slug: 'ica', name: 'Infrastructure Consortium for Africa', short: 'ICA', clients: ['ICA'] },
  { slug: 'giz', name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit', short: 'GIZ', clients: ['GIZ'] },
  { slug: 'ndf', name: 'National Development Fund, Saudi Arabia', short: 'NDF Saudi Arabia', tile: 'Saudi NDF', clients: ['NDF Saudi Arabia'] },
];

// Shown as the logo row on the Experience page, in this order.
export const PARTNER_ROW = ['afdb', 'oecd-mopan', 'jica', 'ifad', 'asdb', 'world-bank', 'caf', 'gef', 'idb'];

export function workFor<T extends { id: string; data: { client: string } }>(p: Partner, all: T[]): T[] {
  return all.filter((a) => (p.clients ?? []).includes(a.data.client) || (p.ids ?? []).includes(a.id));
}

const LINES = ['Evaluation', 'Advisory', 'Research and Analysis'];
export function statsFor<T extends { id: string; data: { client: string; line: string; start?: number; end?: number; ongoing?: boolean } }>(work: T[]) {
  const starts = work.map((a) => a.data.start ?? a.data.end ?? 9999);
  const ends = work.map((a) => a.data.end ?? a.data.start ?? 0);
  const ongoing = work.some((a) => a.data.ongoing);
  const s = Math.min(...starts), e = Math.max(...ends);
  const span = ongoing ? `${s}–present` : s === e ? String(e) : `${s}–${e}`;
  const lines = LINES.filter((l) => work.some((a) => a.data.line === l));
  const latest = [...work].sort((x, y) => (Number(y.data.ongoing) - Number(x.data.ongoing)) || ((y.data.end ?? y.data.start ?? 0) - (x.data.end ?? x.data.start ?? 0)));
  return { n: work.length, span, lines, latest, first: s };
}

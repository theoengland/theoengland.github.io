// Work history, mirrored from LinkedIn. The page loops over these arrays,
// so adding or editing a role means editing data here, not HTML.

export interface Role {
  org: string;
  title: string;
  period: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  url?: string;
}

export const experience: Role[] = [
  {
    org: 'Freelance',
    title: 'GTM Specialist',
    period: 'Dec 2023 – Present',
    location: 'Berlin, Germany',
    summary: 'Go-to-market strategy and growth for technology companies.',
  },
  {
    org: 'Aardling',
    title: 'Head of Marketing',
    period: 'Jan 2024 – Nov 2026',
    location: 'Berlin, Germany · Remote',
    summary:
      "Built Aardling's marketing from the ground up on a lean budget: owned media, events and community that established the brand in the DDD and data mesh space.",
    highlights: [
      'Founded Data Mesh Live, growing attendance 100% year on year with an NPS of 50+; keynote from Zhamak Dehghani, creator of data mesh.',
      'Shaped marketing strategy for Domain-Driven Design Europe, working with the organising team on positioning, audience growth, and defining the ICP.',
      'Doubled web traffic year on year through SEO and early AEO success (optimising content to be cited in AI answers).',
      'Launched the Satisfying Software podcast, two seasons with guests including Barry O’Reilly and Diana Montalion, and ran software architecture webinars that were oversubscribed.',
    ],
  },
  {
    org: 'Quix',
    title: 'Marketing Manager (Community)',
    period: 'Feb 2022 – Dec 2023',
    location: 'Berlin, Germany · Remote',
    summary: 'First community hire; built community-led GTM from seed through Series A.',
    highlights: [
      'Founded and ran "Stream Processing Meetup" in Berlin, Munich and London, growing a community of 2,000+ members in 12 months.',
      'Community initiatives led directly to sales pipeline and product learnings back into the business.',
      'Secured earned speaking slots for our CTO at strategic industry events including London Tech Week, QCon, Kafka Summit and Berlin Buzzwords.',
      'Curated invite-only dinners and cocktail parties for CTOs working in industrial and data-intensive organisations.',
      'Strengthened relationships with partners including Confluent, RisingWave and Aiven through meetups and shared content.',
      'Project-managed the Quix Streams launch, an OSS streaming library now with 1.5K GitHub stars.',
    ],
  },
  {
    org: 'Aiven',
    title: 'Marketing Manager (Events and Community)',
    period: 'Aug 2021 – Jan 2022',
    location: 'Berlin, Germany',
    summary:
      "Led events and community for H2 2021, including Aiven's presence at Slush: an on-stage talk by our CEO, a booth, and the launch of Aiven's startup program.",
  },
  {
    org: 'SmartBear',
    title: 'Marketing Manager',
    period: 'Jun 2019 – Oct 2020',
    location: 'Berlin Metropolitan Area',
    summary:
      'After the acquisition, I led the Behaviour-Driven Development training services business. We navigated the services business online and continued to serve enterprise customers across the US and Europe.',
  },
  {
    org: 'Cucumber',
    title: 'Head of Marketing',
    period: 'May 2015 – Jun 2019',
    location: 'London, United Kingdom',
    summary:
      'Ran marketing at Cucumber Ltd, the company behind Cucumber, the open-source collaboration tool with 40M+ downloads, used by the BBC, Vanguard and Sky. Part of the core team through its acquisition by SmartBear in 2019.',
    highlights: [
      'Grew the Cucumber blog and docs into the main acquisition channel for our SaaS product and professional services.',
      'Ran the flagship Cucumber conference, which was oversubscribed in London, with editions in Sydney and New York.',
      'Nurtured the open-source community through online and in-person contributor-only events.',
      'Managed the events and speaking programme, with our team speaking at conferences like QCon, Agile and NDC.',
    ],
  },
  {
    org: 'Skills Matter',
    title: 'Marketing Manager',
    period: 'Apr 2012 – Apr 2015',
    location: 'London, United Kingdom',
    summary:
      'Curated and promoted a series of conferences including Scala Days, Clojure eXchange, Droidcon London and many more.',
  },
];

// Side projects and early roles, shown as a compact list.
export const other: Role[] = [
  {
    org: 'Chain Conversation',
    title: 'Creator',
    period: 'Dec 2020 – Aug 2021',
    summary:
      'A side project born out of frustration with dull, formulaic online events: an attempt to capture the spirit of great in-person conferences, where conversations are allowed to flow.',
  },
  {
    org: 'COJA Records',
    title: 'Co-founder',
    period: 'Jul 2012 – 2015',
    summary:
      'Electronic music label releasing on digital and vinyl, coordinating production, funding, PR, live shows and radio plugging for each release.',
  },
  { org: 'musicmetric', title: 'Data Research Intern', period: 'Jan – Feb 2012' },
  { org: 'Songkick', title: 'Site Data Editor (Graduate Intern)', period: 'Sep – Dec 2011' },
];

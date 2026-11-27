// Your work history lives here as plain data. The page loops over it,
// so adding a role means adding one object — no HTML to touch.

export interface Role {
  org: string;
  title: string;
  period: string;
  summary: string;
  url?: string;
}

export const experience: Role[] = [
  {
    org: 'Aardling',
    title: 'Head of Marketing',
    period: '2024 – 2026',
    summary:
      'Ran marketing for a software architecture and Domain-Driven Design consultancy serving European companies. Founded Data Mesh Live and contributed to the strategy of DDD Europe.',
  },
  {
    org: 'Data Mesh Live',
    title: 'Founder & Organiser',
    period: 'Founded at Aardling',
    summary:
      'Built and ran an annual data mesh conference end to end: programme, speaker relations, marketing, content and event operations.',
  },
  {
    org: 'Quix',
    title: 'First community hire',
    period: 'Seed to Series A',
    summary: 'Built the developer community from the ground up as the company grew from seed to Series A.',
  },
  {
    org: 'Aiven',
    title: 'Marketing Manager, Events & Community',
    period: '2021',
    summary: 'Ran events and community programmes.',
  },
  {
    org: 'Cucumber Ltd',
    title: 'Marketing',
    period: 'Through 2019',
    summary: 'Ran marketing through the acquisition by SmartBear in 2019.',
  },
];

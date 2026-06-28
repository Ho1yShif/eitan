// Single source of truth for all site content.
// Bio + press are reproduced verbatim from eitanhiller.com.

export const profile = {
  name: 'Eitan Hiller',
  roles: ['Actor', 'Singer', 'Composer', 'Teacher'],
  tagline: 'Actor. Singer. Composer. Teacher.',
  location: 'New York, NY',
  email: 'eitanhiller@gmail.com',
  phone: '(201)-315-7971',
  phoneHref: '+12013157971',
  resume: '/assets/resume/Eitan-Hiller-Resume.pdf',
  portraitPrimary: '/assets/portraits/portrait-1.webp',
  portraitSecondary: '/assets/portraits/portrait-2.webp',
}

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/natieyh/?hl=en' },
  { label: 'Six13', href: 'https://www.six13.com/about-six13' },
  { label: 'Actors Access', href: 'https://resumes.actorsaccess.com/2336388-6484358' },
]

// Bio paragraphs, verbatim.
export const bio = [
  'Eitan Hiller is a New York-based actor, singer, director, and composer who brings an intense rigor to every role, no matter how comedic or dramatic, that is only matched by his ineffable humor. Whether the work is dramatic or absurd, he treats it with the same intensity, the kind that makes even a puppet feel like a real person in the room.',
  'Music is equally central to who he is. After eight years of professional vocal coaching, Eitan developed both his technique and his own artistic voice. He spent five years singing with the international chorus Hazamir, and in October 2023 joined Six13 Acappella, the award-winning, viral touring group known for reimagining pop culture through a cappella. He also founded and arranges for Oh Baby!, his own vocal jazz quartet, a project that lets him lead from the inside and shape sound exactly the way he wants to hear it.',
  'Onstage, he has worked with Jazz at Lincoln Center, the New Victory Dance Company, Premiere Stages, Bergen PAC, Black Box PAC, True Groove Records, and Bergen County Players. He holds a BFA in Theatre Performance from the Kean Theatre Conservatory and is a member of Alpha Psi Omega, the national theatre honor society.',
]

// Video categories. Each video has a YouTube id (yt) used for thumbnail + embed.
export const videoCategories = [
  {
    key: 'musical-theatre',
    label: 'Musical Theatre',
    videos: [
      { title: 'If You Were Gay', sub: 'Avenue Q', note: "Kean University's production of Avenue Q", yt: 'XWt79e5CYdQ' },
      { title: 'Wondering', sub: 'The Bridges of Madison County', note: 'Music & lyrics by Jason Robert Brown', yt: 'D8TTVS9xrUs' },
      { title: 'Dancing Through Life', sub: 'Wicked', note: 'Music & lyrics by Stephen Schwartz', yt: 'BnkS1WDMwtU' },
      { title: 'Along The Way', sub: 'Edges', note: 'A song cycle by Pasek & Paul', yt: 'nP_hLUyezxs' },
      { title: 'The Mason', sub: 'Working: The Musical', note: 'From the Studs Terkel musical', yt: 'ARJXN9MTobs' },
    ],
  },
  {
    key: 'acting',
    label: 'Acting',
    videos: [
      { title: 'Monologue', sub: 'The House of Blue Leaves', note: 'By John Guare', yt: 'Ufsi_svO9YM' },
      { title: "Trinculo's Monologue", sub: 'The Tempest', note: "Shakespeare's The Tempest", yt: 'sbfrr6RlWXs' },
      { title: 'Monologue', sub: 'The Shape of Things', note: 'By Neil LaBute', yt: 'EWpihDSQx6k' },
    ],
  },
  {
    key: 'compositions',
    label: 'Compositions',
    videos: [
      { title: 'In My Life', sub: 'Original arrangement', note: 'Arranged & performed by Eitan Hiller', yt: 'Fun7vczkBLE' },
      { title: 'THE FARMER: Holiday Special', sub: 'Comedy short', note: 'Co-written & directed by Ari & Eitan Hiller — original music by Eitan, filmed in Teaneck, NJ', yt: 'sIOdyyijEZQ' },
    ],
  },
  {
    key: 'six13',
    label: 'Six13 Acapella',
    videos: [
      { title: 'A Michael Jackson Passover', sub: 'Six13', note: 'Passover medley', yt: 'wHwgK9l8KLg' },
      { title: 'Golden: A KPop Demon Hunters Chanukah', sub: 'Six13', note: 'Chanukah parody', yt: 'eB3z2vF1sI0' },
      { title: 'PSVR', sub: 'Six13', note: 'Passover adaptation of "APT." by Bruno Mars & Rosé', yt: 'tAmTMT0c4v0' },
      { title: '5785', sub: 'Six13', note: 'Rosh Hashanah adaptation of "1985" by Bowling For Soup', yt: 'TzHnpN-z3_k' },
      { title: 'Brings a Kean Student On Stage', sub: 'Six13', note: 'Eitan joins Six13 live', yt: 'Juyw4f70rt8' },
      { title: 'Matza Mia! An ABBA Passover', sub: 'Six13', note: 'Arranged & produced by Mike Boxer', yt: '7L2vv9uXACk' },
      { title: 'A Six13 Purim', sub: 'Six13', note: 'ft. Simcha Leiner, Eli Marcus & Avi Perets', yt: 'copuiawkyCY' },
      { title: 'Shema', sub: 'at Enlow Recital Hall', note: 'Live performance', yt: '2c1mp7xK328' },
    ],
  },
]

// Production photography.
export const gallery = [
  { title: 'Trail To Oregon', src: '/assets/gallery/trail-to-oregon.webp' },
  { title: 'The Curious Incident of the Dog in the Night-Time', src: '/assets/gallery/curious-incident.webp' },
  { title: 'Animal Farm', src: '/assets/gallery/animal-farm.webp' },
  { title: 'The Tempest', src: '/assets/gallery/the-tempest.webp' },
  { title: 'Avenue Q', src: '/assets/gallery/avenue-q.webp' },
  { title: 'Indecent', src: '/assets/gallery/indecent.webp' },
]

// Special skills, grouped for the About section.
export const skills = [
  {
    group: 'Voice & Music',
    items: ['Composition', 'Perfect Pitch', 'Sight Reading', 'Singer',
      'Bari-Tenor Range', 'Belt', 'Legit', 'Piano', 'Drums', 'Percussion',
      'Bongos', 'Whistler', 'Voiceover', 'Teleprompter', 'Ear Prompter', 'Audio Prompter'],
  },
  {
    group: 'Stage & Performance',
    items: ['Stage Combat', 'Improvisation', 'Comedian', 'Clowning',
      'Impressionist', 'Host', 'Auctioneer', 'Magician', 'Jazz Dance',
      'Line/Country Dance', 'Gamer (Console)'],
  },
  {
    group: 'Movement & Athletics',
    items: ['Canoeing', 'Swimming', 'Licensed Driver'],
  },
  {
    group: 'Accents & Dialects',
    items: ['Standard American', 'New York', 'Boston', 'New England',
      'Philadelphia', 'Texan', 'BBC English', 'Cockney', 'Yorkshire',
      'Canadian', 'Italian', 'Middle-Eastern', 'Fluent Hebrew'],
  },
]

// Press — reframed from the old "News" tab.
export const press = [
  {
    outlet: 'BroadwayWorld',
    title: "BroadwayWorld New Jersey Awards",
    href: 'https://www.broadwayworld.com/new-jersey/article/BroadwayWorld-New-Jersey-Awards-THE-PROM-ONE-FLEW-OVER-THE-CUCKOOS-NEST-Surflight-Theatre-More-Lead-20231211',
  },
  {
    outlet: 'BroadwayWorld',
    title: "Kean Stage Presents George Orwell's ANIMAL FARM",
    href: 'https://www.broadwayworld.com/new-jersey/article/Kean-Stages-Presents-George-Orwells-ANIMAL-FARM-20230331',
  },
  {
    outlet: 'The Leader',
    title: 'Curious Incident Provides Insight and Enlightenment in Kean Production',
    href: 'https://www.goleader.com/2023/10/19/curious-incident-provides-insight-enlightenment-kean-production/',
  },
  {
    outlet: 'The Tower',
    title: 'The Curious Incident of the Dog in the Night-Time',
    href: 'https://kutower.com/2023/11/08/the-curious-incident-of-the-dog-in-the-nighttime/',
  },
  {
    outlet: 'Bagels.tv',
    title: 'A Six13 Purim ft. Simcha Leiner, Eli Marcus & Avi Perets',
    href: 'https://www.bagels.tv/',
  },
  {
    outlet: 'Kveller',
    title: "PSVR: This 'APT' Passover Parody Is a Bop",
    href: 'https://www.kveller.com/this-apt-parody-is-a-bop/',
  },
  {
    outlet: 'Jewish Exponent',
    title: 'Former Jewish Campers to Present New Musical Comedy',
    href: 'https://www.jewishexponent.com/former-jewish-campers-to-present-new-musical-comedy/',
  },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Reels', href: '#reels' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

// Per-section UI copy (eyebrow labels, headings, CTA + control text).
// Presentational markup (<br>, accent spans) stays in the components — only text lives here.
export const sections = {
  hero: {
    nowPlaying: 'Now Playing', // rendered as `${nowPlaying} · ${profile.location}`
    ctaReels: 'Watch reels',
    ctaContact: 'Get in touch',
  },
  about: {
    label: 'About',
    heading: { line1: 'A theatre kid who', line2: 'never grew out of it.' },
    skillsLabel: 'Special Skills',
    ctaResume: 'Resume',
    ctaActorsAccess: 'Actors Access',
  },
  reels: {
    label: 'Reels',
    heading: 'Roll the tape.',
    close: 'Close ✕',
  },
  gallery: { label: 'Gallery', heading: 'On stage.' },
  press: { label: 'Press', heading: 'Read all about it.' },
  contact: {
    heading: { lead: "Let's make", rest: 'something ', accent: 'memorable.' },
    ctaResume: 'Resume',
  },
}

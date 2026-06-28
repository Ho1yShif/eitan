import { asset } from './asset'

export const profile = {
  name: 'Eitan Hiller',
  roles: ['Actor', 'Singer', 'Composer', 'Teacher'],
  tagline: 'Actor. Singer. Composer. Teacher.',
  location: 'New York, NY',
  email: 'eitanhiller@gmail.com',
  phone: '(201)-315-7971',
  phoneHref: '+12013157971',
  resume: asset('assets/resume/Eitan-Hiller-Resume.pdf'),
  portraitPrimary: asset('assets/portraits/portrait-1.webp'),
  portraitSecondary: asset('assets/portraits/portrait-2.webp'),
}

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/natieyh/?hl=en' },
  { label: 'Six13', href: 'https://www.six13.com/about-six13' },
  { label: 'Actors Access', href: 'https://resumes.actorsaccess.com/2336388-6484358' },
]

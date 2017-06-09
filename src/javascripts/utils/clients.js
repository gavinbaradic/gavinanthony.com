import { createFactory } from 'react'

import Recipelist from 'clients/Recipelist'
import Jomo from 'clients/Jomo'
import Taplet from 'clients/Taplet'
import Blip from 'clients/Blip'
import Likeli from 'clients/Likeli'

export default [
  {
    description:
      'Turn your favorite recipes on Pinterest into your grocery list within seconds using Recipelist. Ordering the ingredients is just another click away.',
    duration: '2016-2017',
    name: 'Recipelist',
    // location: '',
    logo: require('img/recipelist/logo-white.svg'),
    loadComponent: createFactory(Recipelist),
    order: 0,
    properties: { className: 'black' },
    slug: 'recipelist',
    // appstore: '',
    // playstore: '',
    role: 'Creator',
    scope: 'Web, Mobile, Brand',
    stack: 'Rails, React, GraphQL',
    website: 'https://recipelist.co',
  },
  {
    description:
      'JOMO, which stands for Joy of Missing Out, is committed (somewhat ironically) to delivering software and campaigns that challenge people to miss out on all the noise in the online world, and re-engage with people in the real-world.',
    duration: '2015-2017',
    name: 'JOMO',
    location: 'Wilmington, NC',
    logo: require('img/jomo/logo-white.svg'),
    loadComponent: createFactory(Jomo),
    order: 1,
    properties: null,
    slug: 'jomo',
    // appstore: '',
    // playstore: '',
    role: 'Lead Designer',
    scope: 'Web, Mobile, Brand',
    stack: 'Sketch, Github, Zeplin',
    website: 'https://jomoapp.com',
  },
  {
    description:
      'Taplet is the best way to get awesome, high definition photos from your videos. Use the powerful camera to record and pull out photos of your favorite moments. Save your enhanced photos or share them instantly. Never miss the perfect shot with Taplet.',
    duration: '2014-2015',
    name: 'Taplet',
    location: 'Los Angeles, CA',
    logo: require('img/taplet/logo-white.svg'),
    loadComponent: createFactory(Taplet),
    order: 2,
    properties: null,
    slug: 'taplet',
    appstore:
      'https://itunes.apple.com/us/app/taplet-hd-photos-from-iphone-gopro-or-snapchat/id670785096?mt=8',
    // playstore: '',
    role: 'Product Designer',
    scope: 'iOS UI / UX',
    stack: 'Sketch, Illustrator',
    website: 'http://gotaplet.com',
  },
  {
    description:
      'BlipMe lets you connect with your campus in real-time on a map. See what people are doing on your campus right now. Discover fun stuff to do and great ways to meet new people on campus.',
    duration: '2015',
    name: 'Blip',
    location: 'Chapel Hill, NC',
    logo: require('img/blip/logo-white.svg'),
    loadComponent: createFactory(Blip),
    order: 3,
    properties: null,
    slug: 'blip',
    appstore: 'https://itunes.apple.com/us/app/blipme/id981886073?mt=8',
    // playstore: '',
    role: 'Product Designer',
    scope: 'iOS, Brand',
    stack: 'Sketch, Illustrator',
    website: 'http://blipme.co',
  },
  {
    description:
      'Likeli transforms the way you go out, where you end up, and who you meet. Get real time updates where the crowds are on a weather-like heatmap.',
    duration: '2015-2017',
    name: 'Likeli',
    location: 'Wilmington, NC',
    logo: require('img/likeli/logo-white.svg'),
    loadComponent: createFactory(Likeli),
    order: 4,
    properties: null,
    slug: 'likeli',
    // appstore: '',
    // playstore: '',
    role: 'Product Designer',
    scope: 'iOS, Brand',
    stack: 'Sketch, Illustrator',
    website: '',
  },
  // client: {
  //   description: '',
  //   duration: '',
  //   name: '',
  //   order: '',
  //   properties: null,
  //   slug: '',
  //   appstore: '',
  //   playstore: '',
  //   role: '',
  //   scope: '',
  //   stack: '',
  //   website: '',
  // },
]

export const moreWork = [
  {
    img: 'gener8tor',
    href: 'http://gener8tor.com',
  },
  {
    img: 'optyn',
    href: 'https://optyn.com/',
  },
  {
    img: 'wemontage',
    href: 'http://wemontage.com',
  },
  {
    img: 'beekeeper',
    href: 'http://beekeeperdata.com',
  },
  {
    img: 'joyspace',
    href: 'https://angel.co/taplet-1',
  },
  {
    img: 'poparazzi',
    // href: '',
  },
  {
    img: 'sunsportmarine',
    // href: '',
  },
  {
    img: 'kioh',
    // href: '',
  },
]

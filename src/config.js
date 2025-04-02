module.exports = {
  siteTitle: 'Leon Wu',
  siteDescription:
    'Leon Wu is an experienced Data Scientist, based in NY, who loves learning and applying new things, and building apps.',
  siteKeywords:
    'Leon Wu, Leon, lw75251, data scientist, python, genai, forecasting, data science',
  siteUrl: 'https://lw75251.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-2DX917KT47',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Leon Wu',
  location: 'New York City, NY',
  email: 'lw75251@gmail.com',
  github: 'https://lw75251.github.io/',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://lw75251.github.io/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aleonwu/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/yashitanamdeo',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/yashitanamdeo',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

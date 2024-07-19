// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'tomgroenwoldt', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Tom Groenwoldt',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'tom-groenwoldt-638691279',
    website: 'https://www.tomgroenwoldt.de',
    email: 'tom.groenwoldt@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'React.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'Antd',
    'FluentUI',
    'Rust',
    'C',
    'C++',
    'Python',
    'CI/CD',
    'DevOps',
    'Linux',
  ],
  experiences: [
    {
      company: 'ELOKON GmbH',
      position: 'Software Developer',
      from: 'Mai 2022',
      to: 'Present',
      companyLink: 'https://elokon.com',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'TU Hamburg',
      degree: 'Bachelor of Science',
      from: '2019',
      to: '2024',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],

    // Custom theme, applied to `procyon` theme
    customTheme: {},
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

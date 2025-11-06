// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-dissemination",
          title: "Dissemination",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Open projects and contributions I have worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-extending-django-knox-by-secure-refresh-tokens",
        
          title: "Extending Django Knox by secure refresh-tokens",
        
        description: "How Django-Rest-Knox auth-system can be extended: short-lived access tokens, HTTP-only refresh cookies, rotation, CSRF, and clean session semantics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/knox+refresh/";
          
        },
      },{id: "post-start-der-biopv-labs-gemeinsam-die-zukunft-gestalten-biopv",
        
          title: 'Start der BioPV-Labs: Gemeinsam die Zukunft gestalten! | BioPV <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Erfahrungsaustausch und partizipatives Planen standen im Fokus der ersten BioPV-Labs, die im März und April in den Biosphärenparks Lungau und Unteres Murtal stattfanden. Stakeholder aus Regional- und Kommunalmanagement, Planung, Umsetzung und Naturschutz sowie interessierte Bürger:innen kamen zusammen, um Ideen zu entwickeln, auszutauschen und gemeinsam zu planen.",
        section: "Posts",
        handler: () => {
          
            window.open("https://biopv.boku.ac.at/post/25-04-22-workshops-lungau-unteres-murtal/", "_blank");
          
        },
      },{id: "post-engaging-the-local-community-wimby-workshops-in-styria",
        
          title: 'Engaging the local community: WIMBY workshops in Styria <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Discover how WIMBY’s workshops and activities in Styria, Austria, fostered local engagement around wind energy projects.",
        section: "Posts",
        handler: () => {
          
            window.open("https://wimby.eu/engaging-the-local-community-wimby-workshops-in-styria/", "_blank");
          
        },
      },{id: "post-istanbul-the-bridge-between-europe-and-asia",
        
          title: "Istanbul -- the bridge between Europe and Asia",
        
        description: "Last stop of 5 months of travel in the &quot;center of the world&quot;: a week in Istanbul.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/istanbul/";
          
        },
      },{id: "post-pretend-a-mouse-vr-gui-in-godot",
        
          title: "Pretend a Mouse: VR-GUI in Godot",
        
        description: "How I cheated my way to VR-friendly UI in Godot by raycasting into a mesh, projecting into a viewport -- and then faking mouse events.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/godot-vr-ui/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-as-of-today-i-am-officially-looking-for-new-job-opportunities-in-the-field-computer-science-software-development-data-science-and-or-gis-contact-me-via-email-or-linkedin-if-you-have-an-interesting-position-to-offer-or-want-to-collaborate-on-exciting-projects",
          title: 'As of today I am officially looking for new job opportunities in the...',
          description: "",
          section: "News",},{id: "news-finally-my-updated-personalized-website-is-live-built-with-jekyll-by-extending-the-al-folio-theme-it-serves-as-my-online-business-card-showcasing-my-profile-curriculum-vitae-personal-blog-projects-and-repositories-research-and-publications-check-it-out-at-mathias-toothgap-at-and-stay-tuned-for-updates",
          title: 'Finally, my updated personalized website is live! Built with Jekyll by extending the...',
          description: "",
          section: "News",},{id: "projects-biopv",
          title: 'BioPV',
          description: "Photovoltaics, people and the biosphere: a transdisciplinary approach",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academia/biopv/";
            },},{id: "projects-pa-c",
          title: 'PA³C³',
          description: "APV climate change mitigation assessment considering (techno-)economic, environmental and social aspects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academia/pa3c3/";
            },},{id: "projects-plusiq",
          title: 'PlusIQ',
          description: "APV: Integration as a path to a plus-energy district (evaluation of social acceptance by visualization).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academia/plusiq/";
            },},{id: "projects-park-working-spaces-pws",
          title: 'Park-Working-Spaces (PWS)',
          description: "Development of energy-autonomous, app-controlled open-space workplaces in public parks in Vienna",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academia/pws/";
            },},{id: "projects-retour",
          title: 'ReTour',
          description: "Social acceptance of future photovoltaic and wind energy scenarios in Austrian tourism regions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academia/retour/";
            },},{id: "projects-wimby",
          title: 'WIMBY',
          description: "Development of innovative tools to facilitate citizen and stakeholders interaction, knowledge sharing, and collaborative evaluation of impacts, conflicts, synergies and social innovation potential of wind energy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academia/wimby/";
            },},{id: "projects-body-part-fighter",
          title: 'Body Part Fighter',
          description: "Build creatures out of scrap body parts and fight with them!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-jam/body-part-fighter/";
            },},{id: "projects-mu-µ",
          title: 'Mu (µ)',
          description: "µ - A 2D platformer about shapes and home.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-jam/mu/";
            },},{id: "projects-millionaire-quiz",
          title: 'Millionaire Quiz',
          description: "A millionaire quiz template meant for easy personalization. Makes a great fit for the next wedding, bachelor&#39;s, or birthday party or just testing your friends.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hobby/millionaire-quiz/";
            },},{id: "projects-geodot",
          title: 'Geodot',
          description: "A Godot plugin for loading geospatial data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/geodot/";
            },},{id: "projects-godot-vr-toolkit",
          title: 'Godot VR Toolkit',
          description: "Utility framework for working with VR in godot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/godot-vr-toolkit/";
            },},{id: "projects-landscapelab",
          title: 'LandscapeLab',
          description: "An open kit for developing game-based participatory landscape-planning tools.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/landscapelab/";
            },},{id: "projects-web-gis-questionnaire",
          title: 'Web GIS – Questionnaire',
          description: "Generically configurable questionnaire as web GIS.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/webgis/";
            },},{id: "talks-visualizing-austria-in-godot",
          title: 'Visualizing Austria in Godot',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/godotcon/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/mathiasbaum.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%74%68%69%61%73.%62%61%75%6D%67%61%72%74%69%6E%67%65%72@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mathiasBaumgartinger", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mathias-baumgartinger-0b2902196", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8549-2806", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Mathias-Baumgartinger/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=57cyvH0AAAAJ&hl=de", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/hiasbaum", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

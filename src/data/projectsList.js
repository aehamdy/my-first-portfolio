import athloStore from "../assets/projects/athlo-store.webp";
import athloThumbnail from "../assets/projects/athlo-dashboard/thumbnail.webp";
import athlo1 from "../assets/projects/athlo-dashboard/1.webp";
import athlo2 from "../assets/projects/athlo-dashboard/2.webp";
import athlo3 from "../assets/projects/athlo-dashboard/3.webp";
import athlo4 from "../assets/projects/athlo-dashboard/4.webp";
import athlo5 from "../assets/projects/athlo-dashboard/5.webp";
import athlo6 from "../assets/projects/athlo-dashboard/6.webp";
import athlo7 from "../assets/projects/athlo-dashboard/7.webp";
import brewhausMain from "../assets/projects/brewhaus/brewhaus-1.webp";
import brewhaus2 from "../assets/projects/brewhaus/brewhaus-2.webp";
import brewhaus3 from "../assets/projects/brewhaus/brewhaus-3.webp";
import brewhaus4 from "../assets/projects/brewhaus/brewhaus-4.webp";
import klane from "../assets/projects/k-lane.webp";
import typeTallyImg from "../assets/projects/type-tally.webp";
import snowDashboard from "../assets/projects/snow-ui-dashboard.webp";
import sawadPortfolioImg from "../assets/projects/sawad-portfolio.webp";
import todomoroAppImg from "../assets/projects/todomoro.webp";
import glozinImg from "../assets/projects/glozin.webp";
import gleamyAgencyImg from "../assets/projects/gleamy-agency.webp";
import skyCastImg from "../assets/projects/skycast.webp";
import gymTeamImg from "../assets/projects/gymteam.webp";
import noteTakingAppImg from "../assets/projects/noteapp.webp";
import spentrackerApp from "../assets/projects/spentracker.webp";
import agencyTemplate from "../assets/projects/Agency_Template.webp";
import kasperTemplate from "../assets/projects/Kasper_Template.webp";
import leonTemplate from "../assets/projects/Leon_Template.webp";

import { categories } from "./categories";
const projectsList = [
  {
    id: 1,
    slug: "athlo-store",
    cvName: "Athlo Store",
    status: "Building the Next Feature...",
    year: "2026",
    isFeatured: true,

    info: {
      title: "Athlo Store",
      role: "Frontend Developer",
      links: {
        live: "",
        github: "https://github.com/aehamdy/athlo-store",
      },
    },

    media: {
      thumbnail: { image: athloStore, altText: "athlo store image" },
      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {},
    features: [],

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "Zod",
      "Axios",
    ],

    highlights: [],

    challenge: {
      problem:
        "Building responsive layouts that adapt to different screen sizes and devices",
      solution: ["Using CSS Grid and Flexbox to create responsive layouts"],
    },

    simpleDiscribtion:
      "Sportswear e-commerce store with full-stack integration",

    description: `Full-stack e-commerce application designed to manage a comprehensive sportswear e-commerce platform. Features include product inventory management, order tracking, customer analytics, sales reporting, and user role-based access control. The dashboard integrates seamlessly with a backend server and database to provide real-time data synchronization and efficient business operations management.`,

    category: [categories.webApp, categories.api],

    addToPortfolioProjects: true,
    addToDownloadableCv: true,
    addToViewableCv: false,
  },
  {
    id: 2,
    slug: "athlo-dashboard",
    cvName: "Athlo Dashboard",
    status: "completed",
    year: "2026",
    isFeatured: true,

    info: {
      title: "Athlo Dashboard",
      role: "Frontend Developer",

      links: {
        live: "https://athlo-dashboard.vercel.app/",
        github: "https://github.com/aehamdy/athlo-dashboard",
      },
    },

    media: {
      thumbnail: {
        image: athloThumbnail,
        altText: "Athlo Dashboard overview page",
      },

      gallery: [
        {
          id: 1,
          image: athlo1,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
        {
          id: 2,
          image: athlo2,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
        {
          id: 3,
          image: athlo3,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
        {
          id: 4,
          image: athlo4,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
        {
          id: 5,
          image: athlo5,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
        {
          id: 6,
          image: athlo6,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
        {
          id: 7,
          image: athlo7,
          altText: "Athlo Dashboard analytics overview",
          title: "Analytics Overview",
        },
      ],
    },

    metrics: {
      components: "25+ reusable components",
      architecture: "Feature-based scalable architecture",
      forms: "Complex multi-step product workflows",
      optimization: "Lazy loading + intelligent caching",
    },

    features: [
      "Advanced analytics dashboard",
      "Interactive charts and KPI reporting",
      "E-commerce and POS order management",
      "Multi-step product management forms",
      "Product variants and inventory handling",
      "Server-side pagination, sorting, and filtering",
      "Responsive data tables",
      "JWT authentication and protected routes",
      "Real-time validation with Zod",
      "File and image upload handling",
      "Lazy loading and performance optimization",
      "Reusable component architecture",
      // "Dark mode support",
      "Accessibility-focused UI",
    ],

    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "Zod",
      "Axios",
      "React PDF",
      "Tailwind CSS v4",
      "Shadcn UI",
      "Recharts",
      "React Router",
      "JWT Authentication",
      "Lazy Loading",
      "Code Splitting",
    ],

    highlights: [
      "Feature-based scalable architecture",
      "Enterprise-level dashboard engineering",
      "Advanced React patterns and hooks",
      "Performance-focused implementation",
      "Reusable systems and component design",
      "Production-ready frontend structure",
    ],

    challenge: {
      problem: `
  Sports retail businesses require managing complex workflows including e-commerce orders, POS operations, product variants, inventory tracking, analytics, and customer management. Traditional solutions often suffer from fragmented systems, poor scalability, and inefficient data handling.
      `,

      solution: [
        "Built a scalable enterprise-grade dashboard architecture using React 19 and TypeScript",

        "Implemented advanced product management with multi-step forms, variant handling, image uploads, and real-time validation",

        "Developed reusable data table systems with pagination, filtering, sorting, debounced search, and responsive layouts",

        "Integrated real-time analytics dashboards with interactive charts and KPI reporting",

        "Implemented JWT authentication with automatic token refresh and protected route handling",

        "Optimized performance using lazy loading, code splitting, React Query caching, and memoization techniques",

        "Designed a reusable feature-based architecture focused on scalability and maintainability",
      ],
    },

    simpleDiscribtion: "Enterprise-grade sports retail management platform.",

    description: `
  Athlo Dashboard is a production-ready sports retail management platform built with React 19 and TypeScript. The application centralizes complex business operations including product management, e-commerce and POS order tracking, analytics reporting, inventory control, and customer management into a unified dashboard experience.
  
  The project focuses heavily on scalable frontend architecture, reusable component systems, performance optimization, and enterprise-level engineering practices. It includes advanced data tables, multi-step forms, real-time analytics, JWT authentication, responsive layouts, optimistic UI updates, lazy loading, and accessibility-focused UI/UX design.
  
  Built using a feature-based architecture with React Query, TanStack Table, React Hook Form, and Zod, the project demonstrates production-level frontend development standards suitable for modern SaaS platforms and large-scale dashboard applications.
    `,

    category: [categories.webApp, categories.dashboard, categories.api],

    addToPortfolioProjects: true,
    addToDownloadableCv: true,
    addToViewableCv: true,
  },
  {
    id: 3,
    slug: "brewhaus",
    cvName: "Coffeeshop Website",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "Brewhaus",
      role: "Frontend Developer",
      links: {
        live: "https://thebrewhaus.netlify.app/",
        github: "https://github.com/aehamdy/brewhaus",
      },
    },

    media: {
      thumbnail: { image: brewhausMain, altText: "brewhaus thumbnail image" },
      gallery: [
        {
          id: 1,
          image: brewhausMain,
          altText: "brewhaus image",
          title: "",
        },
        {
          id: 2,
          image: brewhaus2,
          altText: "brewhaus image",
          title: "",
        },
        {
          id: 3,
          image: brewhaus3,
          altText: "brewhaus image",
          title: "",
        },
        {
          id: 4,
          image: brewhaus4,
          altText: "brewhaus image",
          title: "",
        },
        {
          id: 5,
          image: brewhaus3,
          altText: "brewhaus image",
          title: "",
        },
      ],
    },

    metrics: {},
    features: [],

    technologies: ["Next JS", "Tailwind CSS", "GSAP"],

    highlights: [],

    challenge: {
      problem:
        "Building responsive layouts that adapt to different screen sizes and devices",
      solution: ["Using CSS Grid and Flexbox to create responsive layouts"],
    },

    simpleDiscribtion: "Coffeeshop Website",

    description: ``,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 4,
    slug: "k-lane",
    cvName: "Coffeeshop Website",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "K-Lane",
      role: "Frontend Developer",
      links: {
        live: "https://klane.netlify.app/",
        github: "https://github.com/aehamdy/k-lane",
      },
    },

    media: {
      thumbnail: { image: klane, altText: "klane image" },
      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {},
    features: [],

    technologies: ["Next JS", "Tailwind CSS", "GSAP"],

    highlights: [],

    challenge: {
      problem: `Building responsive layouts that adapt to different screen sizes and devices`,
      solution: ["Using CSS Grid and Flexbox to create responsive layouts"],
    },

    simpleDiscribtion: "Coffeeshop Website",
    description: ``,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 5,
    slug: "type-tally",
    cvName: "Character counting app",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "TypeTally",
      role: "Frontend Developer",
      links: {
        live: "https://type-tally.vercel.app/",
        github: "https://github.com/aehamdy/TypeTally",
      },
    },

    media: {
      thumbnail: {
        image: typeTallyImg,
        altText: "typeTally image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      feedback: "Real-time text analysis",
      ui: "Clean modern interface",
      responsiveness: "Responsive across devices",
      performance: "Instant typing feedback",
    },

    features: [
      "Real-time character counting",
      "Word counting functionality",
      "Live typing feedback",
      "Responsive UI design",
      "Modern typography-focused layout",
      "Interactive text analysis",
      "Fast rendering performance",
      "Minimal distraction-free interface",
    ],

    technologies: ["React JS", "TypeScript", "Tailwind CSS"],

    highlights: [
      "Real-time reactive UI updates",
      "Type-safe frontend implementation",
      "Minimal and focused UX design",
      "Responsive typography layouts",
      "Performance-focused rendering",
      "Clean reusable architecture",
    ],

    challenge: {
      problem:
        "Implementing real-time text analysis while maintaining responsive rendering and clean user experience.",

      solution: [
        "Built reactive real-time counting logic",
        "Optimized rendering for instant feedback",
        "Designed minimal distraction-free interface",
      ],
    },

    simpleDiscribtion: "Real-time Character Counting App",

    description: `
  TypeTally is a modern character counting application built with React, TypeScript, and Tailwind CSS. The application provides real-time text analysis including character and word counting with instant visual feedback.
  
  The project emphasizes clean UI design, responsive layouts, fast rendering performance, and intuitive interaction patterns for writers, developers, and content creators.
    `,

    category: [categories.webApp],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 6,
    slug: "snowui-dashboard",
    cvName: "Dashboard UI",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "SnowUI-Dashboard",
      role: "Frontend Developer",
      links: {
        live: "https://snow-ui-dashboard.vercel.app/",
        github: "https://github.com/aehamdy/snowui-dashboard",
      },
    },

    media: {
      thumbnail: { image: snowDashboard, altText: "snowDashboard image" },
      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },
    metrics: {},
    features: [],

    technologies: ["React JS", "Context-API", "TypeScript", "Tailwind CSS"],

    highlights: [],

    challenge: {
      problem:
        "Implementing a custom search panel that opens via both a UI button and a keyboard shortcut without disrupting the user experience.",
      solution: [
        "Managing the panel’s visibility through state and setting up keyboard event listeners with proper cleanup to ensure smooth and responsive behavior.",
      ],
    },

    simpleDiscribtion: "Dashboard UI",

    description: `SnowUI Dashboard is a responsive React-based dashboard interface developed as part of a frontend technical assessment. The project demonstrates practical experience in building modern UIs, working with APIs, and implementing interactive features using React, TypeScript, and Tailwind CSS.
                      Data fetching from jsonplaceholder.typicode.com/posts
                      Search functionality by user and keyword
                      Responsive layout for desktop and mobile views
                      Light/Dark mode toggle
                      Reusable components
                      Custom search panel with keyboard shortcut activation`,

    category: [categories.api],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 7,
    slug: "sawad-portfolio",
    cvName: "Portfolio",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "Sawad-Portfolio",
      role: "Frontend Developer",
      links: {
        live: "https://sawad-webfolio.vercel.app/",
        github: "https://github.com/aehamdy/sawad-portfolio",
      },
    },

    media: {
      thumbnail: { image: sawadPortfolioImg, altText: "sawadPortfolio image" },
      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {},
    features: [],

    technologies: ["React JS", "React-Router-DOM", "Tailwind CSS", "Motion"],

    highlights: [],

    challenge: {
      problem:
        "Optimized cart state with Context API and useReducer, refined routing with React Router, and improved live search with debouncing. Replaced a custom modal for better accessibility and enhanced performance through debugging.",
      solution: [
        "Optimized cart state with Context API and useReducer",
        "Refined routing with React Router",
        "Improved live search with debouncing",
        "Replaced a custom modal for better accessibility",
        "Enhanced performance through debugging",
      ],
    },

    simpleDiscribtion: "Portfolio",

    description: `Personal Portfolio Website built with React, React Router, Tailwind CSS, and Motion (Framer Motion) to showcase my frontend development skills and projects.
The website includes animated transitions, clean layout design, and dynamic routing for each section.`,

    category: [categories.portfolio, categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 8,
    slug: "todomoro-app",
    cvName: "Todo App with Pomodoro Timer",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "Todomoro App",
      role: "Frontend Developer",
      links: {
        live: "https://todomoro.vercel.app",
        github: "https://github.com/aehamdy/Todomoro",
      },
    },

    media: {
      thumbnail: {
        image: todomoroAppImg,
        altText: "todomoroApp image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      productivity: "Pomodoro productivity workflow",
      persistence: "LocalStorage task persistence",
      ui: "Responsive task management UI",
      themes: "Dynamic theme switching",
    },

    features: [
      "Task creation and management",
      "Pomodoro timer integration",
      "Task filtering and categorization",
      "Dynamic themes support",
      "LocalStorage persistence",
      "Responsive layouts",
      "Reusable component structure",
      "Interactive productivity workflow",
    ],

    technologies: ["React JS", "Tailwind CSS", "localStorage"],

    highlights: [
      "Productivity-focused user experience",
      "Dynamic theme implementation",
      "State management across components",
      "Responsive application structure",
      "Persistent local task storage",
      "Clean reusable UI patterns",
    ],

    challenge: {
      problem:
        "Implementing dynamic themes using Tailwind CSS, creating localStorage-based persistence, and managing state across multiple components.",

      solution: [
        "Implemented dynamic themes using Tailwind CSS",
        "Created localStorage-based persistence system",
        "Managed shared state across multiple components",
      ],
    },

    simpleDiscribtion: "Todo App with Pomodoro Timer",

    description: `
Developed a productivity-focused todo application featuring task management and Pomodoro timer workflows. The application allows users to create, edit, filter, and organize tasks while improving focus through integrated Pomodoro sessions.

The project focuses on responsive layouts, reusable UI components, theme customization, and persistent local storage handling. Built with React and Tailwind CSS, the application delivers a clean and interactive productivity experience across devices.
  `,

    category: [categories.webApp],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 9,
    slug: "glozin",
    cvName: "E-commerce Store",
    status: "completed",
    year: "2025",
    isFeatured: true,

    info: {
      title: "Glozin",
      role: "Frontend Developer",
      links: {
        live: "https://glozin-store.vercel.app/",
        github: "https://github.com/aehamdy/glozin",
      },
    },

    media: {
      thumbnail: {
        image: glozinImg,
        altText: "glozin image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      ecommerce: "Client-side shopping experience",
      animations: "Smooth Framer Motion interactions",
      cart: "Dynamic cart and wishlist system",
      search: "Live product search experience",
    },

    features: [
      "Shopping cart functionality",
      "Wishlist management",
      "Live product search",
      "Discount system implementation",
      "Responsive e-commerce layouts",
      "Product reviews interface",
      "Smooth UI animations",
      "Client-side product filtering",
    ],

    technologies: [
      "React JS",
      "Context-API",
      "React-router",
      "Tailwind CSS",
      "Framer-Motion",
    ],

    highlights: [
      "Interactive e-commerce experience",
      "Smooth animation implementation",
      "Responsive storefront design",
      "Reusable product components",
      "Modern shopping UX patterns",
      "Dynamic state management",
    ],

    challenge: {
      problem:
        "Building a responsive and interactive e-commerce experience with dynamic cart management, live search, and smooth animations.",

      solution: [
        "Implemented Context API for cart and wishlist state management",
        "Built responsive storefront layouts using Tailwind CSS",
        "Integrated Framer Motion animations for smooth interactions",
        "Developed live search and product filtering features",
      ],
    },

    simpleDiscribtion: "Client Side E-commerce",

    description: `
Glozin is a responsive client-side e-commerce application built with React and Tailwind CSS. The platform provides modern shopping experiences through dynamic cart management, live search, wishlist functionality, and interactive UI animations.

The project focuses on responsive storefront design, reusable UI systems, smooth Framer Motion transitions, and scalable frontend architecture for modern e-commerce interfaces.
  `,

    category: [categories.webApp, categories.api],

    addToPortfolioProjects: true,
    addToDownloadableCv: true,
    addToViewableCv: false,
  },
  {
    id: 10,
    slug: "gleamy-agency",
    cvName: "Agency Website",
    status: "completed",
    year: "2025",
    isFeatured: false,

    info: {
      title: "Gleamy Agency",
      role: "Frontend Developer",
      links: {
        live: "https://gleamy-agency.vercel.app",
        github: "https://github.com/aehamdy/gleamy-agency",
      },
    },

    media: {
      thumbnail: {
        image: gleamyAgencyImg,
        altText: "gleamyAgency image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      routing: "Multi-page navigation system",
      layouts: "Reusable layout architecture",
      responsiveness: "Fully responsive design",
      ux: "Custom error handling experience",
    },

    features: [
      "Multi-page website structure",
      "Dynamic active navigation links",
      "Reusable page layouts",
      "Responsive UI implementation",
      "Custom error page handling",
      "Smooth page navigation",
      "Modern agency landing sections",
      "Scalable routing structure",
    ],

    technologies: ["React JS", "React-router-dom", "Tailwind CSS"],

    highlights: [
      "Reusable layout architecture",
      "Dynamic route handling",
      "Responsive landing page implementation",
      "Improved user navigation experience",
      "Scalable page structure",
      "Clean UI engineering",
    ],

    challenge: {
      problem:
        "Creating scalable navigation and reusable layouts while maintaining responsiveness and clean user experience.",

      solution: [
        "Implemented React Router dynamic navigation",
        "Created reusable page layout system",
        "Designed responsive UI using Tailwind CSS",
        "Built intuitive error handling and redirection flows",
      ],
    },

    simpleDiscribtion: "Multipage Website",

    description: `
Built a React-based agency website featuring smooth navigation, reusable layouts, and responsive page structures. The application includes active link highlighting, scalable routing architecture, and intuitive error handling experiences.

The project demonstrates frontend architecture organization, responsive UI implementation, and reusable component-driven development using React Router and Tailwind CSS.
  `,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 11,
    slug: "skycast",
    cvName: "Weather App",
    status: "completed",
    year: "2024",
    isFeatured: false,

    info: {
      title: "SkyCast",
      role: "Frontend Developer",
      links: {
        live: "https://sky-cast-wine.vercel.app",
        github: "https://github.com/aehamdy/SkyCast",
      },
    },

    media: {
      thumbnail: {
        image: skyCastImg,
        altText: "weatherApp image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      api: "Real-time weather API integration",
      forecast: "Detailed weather forecasting",
      ui: "Clean responsive weather UI",
      search: "Dynamic city-based search",
    },

    features: [
      "Real-time weather data",
      "City-based weather search",
      "Detailed weather forecasts",
      "Responsive layouts",
      "Dynamic API integration",
      "Interactive weather interface",
      "Clean UI presentation",
      "Fast weather retrieval",
    ],

    technologies: ["React JS", "Tailwind CSS", "Weather API"],

    highlights: [
      "API integration experience",
      "Responsive application design",
      "Real-time data handling",
      "Interactive weather UI",
      "Search-focused user experience",
      "Clean frontend implementation",
    ],

    challenge: {
      problem:
        "Handling API responses efficiently while displaying large amounts of weather information in a clean and responsive UI.",

      solution: [
        "Implemented efficient API data handling",
        "Designed organized weather data layouts",
        "Built responsive weather interface components",
      ],
    },

    simpleDiscribtion: "Weather Forecast App",

    description: `
SkyCast is a weather forecasting application that retrieves and displays real-time weather information based on user input. The application provides detailed forecasts through responsive and user-friendly interfaces.

The project demonstrates API integration workflows, dynamic data rendering, and responsive frontend development practices using React and Tailwind CSS.
  `,

    category: [categories.webApp, categories.api],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 12,
    slug: "gym-team",
    cvName: "Landing Page",
    status: "completed",
    year: "2024",
    isFeatured: false,

    info: {
      title: "GymTeam",
      role: "Frontend Developer",
      links: {
        live: "https://gymteam-landingpage.vercel.app",
        github: "https://github.com/aehamdy/gymteam_landingpage",
      },
    },

    media: {
      thumbnail: {
        image: gymTeamImg,
        altText: "gymTeam image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      responsiveness: "Responsive across all devices",
      performance: "Optimized frontend rendering",
      ui: "Modern landing page sections",
      structure: "Clean maintainable codebase",
    },

    features: [
      "Responsive landing page layout",
      "Modern hero sections",
      "Reusable UI sections",
      "Mobile-first responsive design",
      "Optimized media queries",
      "Clean component structure",
      "Fast rendering performance",
      "Smooth browsing experience",
    ],

    technologies: ["React JS", "Tailwind CSS"],

    highlights: [
      "Responsive-first implementation",
      "Clean UI engineering",
      "Reusable landing page sections",
      "Performance-focused layouts",
      "Modern frontend structure",
      "Maintainable styling architecture",
    ],

    challenge: {
      problem:
        "Improving performance and user experience while maintaining responsive layouts and clean code structure.",

      solution: [
        "Optimized responsive media queries",
        "Improved frontend performance handling",
        "Built maintainable reusable layouts",
        "Implemented responsive Tailwind CSS structure",
      ],
    },

    simpleDiscribtion: "GYM Landing Page",

    description: `
GymTeam is a responsive landing page project built with React and Tailwind CSS. The project focuses on delivering modern UI sections, responsive layouts, and smooth browsing experiences across devices.

The application demonstrates clean frontend implementation practices, responsive engineering techniques, and maintainable component structures suitable for modern marketing and landing page experiences.
  `,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 13,
    slug: "noties",
    cvName: "Note-Taking App",
    status: "completed",
    year: "2024",
    isFeatured: false,

    info: {
      title: "Noties",
      role: "Frontend Developer",
      links: {
        live: "https://aehamdy.github.io/note_taking_app_final_js_project_almdrasa",
        github:
          "https://github.com/aehamdy/note_taking_app_final_js_project_almdrasa",
      },
    },

    media: {
      thumbnail: {
        image: noteTakingAppImg,
        altText: "noteTakingApp image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      notes: "Dynamic note management",
      storage: "Client-side data persistence",
      ui: "Simple focused note experience",
      usability: "Fast note interactions",
    },

    features: [
      "Create notes",
      "Edit existing notes",
      "Delete notes",
      "Simple responsive UI",
      "Fast note interactions",
      "Organized note structure",
      "Client-side persistence",
      "Minimal user experience",
    ],

    technologies: ["JavaScript", "HTML", "CSS"],

    highlights: [
      "Clean UI implementation",
      "Interactive CRUD operations",
      "Organized frontend structure",
      "Responsive layouts",
      "Lightweight frontend experience",
      "Vanilla JavaScript application logic",
    ],

    challenge: {
      problem:
        "Creating a seamless note management experience with simple interactions and organized frontend structure.",

      solution: [
        "Implemented CRUD functionality using JavaScript",
        "Designed minimal distraction-free layouts",
        "Structured organized note interaction flows",
      ],
    },

    simpleDiscribtion: "Note Taking App",

    description: `
Noties is a lightweight note-taking web application built using JavaScript, HTML, and CSS. The application enables users to create, edit, and delete notes through a simple and responsive interface.

The project focuses on frontend fundamentals, interactive CRUD operations, and organized UI experiences while maintaining simplicity and usability.
  `,

    category: [categories.webApp],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 14,
    slug: "spent-tracker",
    cvName: "Spending Tracker App",
    status: "completed",
    year: "2024",
    isFeatured: false,

    info: {
      title: "SpenTracker",
      role: "Frontend Developer",
      links: {
        live: "https://aehamdy.github.io/expenses-tracker",
        github: "https://github.com/aehamdy/expenses-tracker",
      },
    },

    media: {
      thumbnail: {
        image: spentrackerApp,
        altText: "spentrackerApp image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      tracking: "Expense tracking workflows",
      ui: "Simple financial management UI",
      responsiveness: "Responsive across devices",
      organization: "Organized expense handling",
    },

    features: [
      "Expense tracking",
      "Transaction organization",
      "Responsive layouts",
      "Simple financial overview",
      "Interactive expense management",
      "Lightweight frontend experience",
      "Clean UI structure",
      "Fast user interactions",
    ],

    technologies: ["HTML", "SASS", "JavaScript"],

    highlights: [
      "Frontend fundamentals implementation",
      "Responsive UI structure",
      "Organized data presentation",
      "Clean SASS architecture",
      "Interactive user workflows",
      "Lightweight application design",
    ],

    challenge: {
      problem:
        "Creating organized financial tracking experiences with simple and responsive UI interactions.",

      solution: [
        "Structured organized expense management flows",
        "Built responsive layouts using SASS",
        "Implemented lightweight frontend interactions",
      ],
    },

    simpleDiscribtion: "Expenses Tracker App",

    description: `
SpenTracker is a lightweight expense tracking application developed with HTML, SASS, and JavaScript. The application provides simple financial tracking experiences through organized transaction handling and responsive UI layouts.

The project demonstrates frontend fundamentals, clean UI structuring, and interactive JavaScript workflows for lightweight web applications.
  `,

    category: [categories.webApp],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 15,
    slug: "agency-template",
    cvName: "Landing Pages (HTML + CSS)",
    status: "completed",
    year: "2023",
    isFeatured: false,

    info: {
      title: "Agency Template",
      role: "Frontend Developer",
      links: {
        live: "https://aehamdy.github.io/elzero-html-css-template-three",
        github: "https://github.com/aehamdy/elzero-html-css-template-three",
      },
    },

    media: {
      thumbnail: {
        image: agencyTemplate,
        altText: "agencyTemplate image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      layouts: "Responsive landing page layouts",
      responsiveness: "Cross-device compatibility",
      styling: "Modern CSS implementation",
      structure: "Clean semantic structure",
    },

    features: [
      "Responsive landing page sections",
      "Modern UI structure",
      "Semantic HTML implementation",
      "Responsive layouts",
      "Clean CSS styling",
      "Cross-browser compatibility",
      "Organized page sections",
      "Lightweight frontend performance",
    ],

    technologies: ["HTML", "CSS"],

    highlights: [
      "Frontend fundamentals mastery",
      "Responsive design principles",
      "Semantic HTML structure",
      "Clean CSS architecture",
      "Lightweight landing page design",
      "Organized frontend layouts",
    ],

    challenge: {
      problem:
        "Building responsive landing pages while maintaining clean structure and optimized styling.",

      solution: [
        "Implemented responsive CSS layouts",
        "Built semantic HTML structures",
        "Optimized frontend styling organization",
      ],
    },

    simpleDiscribtion: "Agency Landing Page",

    description: `
Agency Template is a responsive landing page project developed using HTML and CSS. The project focuses on responsive design principles, clean frontend structures, and modern UI layouts.

The application demonstrates strong frontend fundamentals including semantic HTML, organized CSS architecture, and responsive implementation techniques.
  `,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 16,
    slug: "kasper-template",
    cvName: "Landing Pages (HTML + CSS)",
    status: "completed",
    year: "2023",
    isFeatured: false,

    info: {
      title: "Kasper Template",
      role: "Frontend Developer",
      links: {
        live: "https://aehamdy.github.io/kasper-html-css-template",
        github: "https://github.com/aehamdy/kasper-html-css-template",
      },
    },

    media: {
      thumbnail: {
        image: kasperTemplate,
        altText: "kasperTemplate image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      responsiveness: "Responsive page layouts",
      structure: "Semantic frontend structure",
      styling: "Modern CSS sections",
      ux: "Clean browsing experience",
    },

    features: [
      "Responsive landing sections",
      "Modern layout structure",
      "Semantic HTML elements",
      "Responsive navigation",
      "Cross-device support",
      "Clean CSS styling",
      "Organized content sections",
      "Lightweight implementation",
    ],

    technologies: ["HTML", "CSS"],

    highlights: [
      "Responsive frontend engineering",
      "Semantic layout implementation",
      "Clean CSS architecture",
      "Frontend fundamentals",
      "Modern landing page structure",
      "Cross-device compatibility",
    ],

    challenge: {
      problem:
        "Creating responsive and visually organized landing pages with clean frontend architecture.",

      solution: [
        "Built responsive CSS layouts",
        "Implemented semantic HTML structures",
        "Organized reusable page sections",
      ],
    },

    simpleDiscribtion: "Agency Landing Page",

    description: `
Kasper Template is a responsive landing page project developed using HTML and CSS. The project demonstrates frontend layout structuring, semantic HTML implementation, and responsive design engineering.

The application focuses on clean UI organization, responsive browsing experiences, and maintainable frontend styling practices.
  `,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
  {
    id: 17,
    slug: "leon-template",
    cvName: "Landing Pages (HTML + CSS)",
    status: "completed",
    year: "2023",
    isFeatured: false,

    info: {
      title: "Leon Template",
      role: "Frontend Developer",
      links: {
        live: "https://aehamdy.github.io/leon-template",
        github: "https://github.com/aehamdy/leon-template",
      },
    },

    media: {
      thumbnail: {
        image: leonTemplate,
        altText: "leonTemplate image",
      },

      gallery: [{ id: 1, image: "", altText: "", title: "" }],
    },

    metrics: {
      ui: "Modern landing page interface",
      responsiveness: "Responsive design system",
      structure: "Semantic frontend structure",
      performance: "Lightweight frontend rendering",
    },

    features: [
      "Responsive landing page design",
      "Modern section layouts",
      "Semantic HTML structure",
      "Responsive navigation system",
      "Clean CSS architecture",
      "Cross-browser support",
      "Organized page sections",
      "Fast lightweight performance",
    ],

    technologies: ["HTML", "CSS"],

    highlights: [
      "Responsive layout engineering",
      "Frontend fundamentals",
      "Semantic HTML practices",
      "Clean CSS implementation",
      "Lightweight UI rendering",
      "Modern landing page structure",
    ],

    challenge: {
      problem:
        "Building modern responsive landing pages while maintaining lightweight performance and clean frontend structure.",

      solution: [
        "Implemented responsive CSS layouts",
        "Structured semantic HTML sections",
        "Optimized lightweight frontend rendering",
      ],
    },

    simpleDiscribtion: "Agency Landing Page",

    description: `
Leon Template is a responsive landing page project built using HTML and CSS. The project focuses on frontend fundamentals, responsive layouts, semantic HTML practices, and modern landing page structures.

The application demonstrates clean frontend implementation, organized CSS architecture, and responsive browsing experiences across devices.
  `,

    category: [categories.landingPage],

    addToPortfolioProjects: true,
    addToDownloadableCv: false,
    addToViewableCv: false,
  },
];

export default projectsList;

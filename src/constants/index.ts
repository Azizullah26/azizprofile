import {
  mobile,
  backend,
  creator,
  web,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "integrations",
    title: "Integrations",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
  },
  {
    title: "AI Integration Expert",
    icon: mobile,
  },
  {
    title: "Business App Developer",
    icon: backend,
  },
  {
    title: "E-commerce Solutions",
    icon: creator,
  },
  {
    title: "Cloud Solutions Architect",
    icon: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
  },
  {
    title: "Mobile App Development",
    icon: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
  },
  {
    title: "API Development & Integration",
    icon: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
  {
    title: "Database Design & Optimization",
    icon: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    title: "Digital Transformation Consulting",
    icon: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
];

const technologies = [
  // Frontend Development
  {
    name: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Nuxt.js", "Bootstrap", "Tailwind CSS"],
    icon: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
    category: "frontend"
  },
  {
    name: "Three.js",
    skills: ["3D Rendering", "WebGL", "Animation", "Interactive Graphics"],
    icon: threejs,
    category: "frontend"
  },
  // Backend Development
  {
    name: "Supabase",
    skills: ["Backend-as-a-Service", "Real-time database", "Authentication", "Edge functions"],
    icon: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    category: "backend",
    link: "https://supabase.com/"
  },
  {
    name: "Neon (Serverless Postgres)",
    skills: ["Serverless Postgres", "Auto-scaling", "Branching", "Connection pooling"],
    icon: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    category: "backend",
    link: "https://neon.tech/"
  },
  {
    name: "Node.js",
    skills: ["Server-side JavaScript", "Event-driven", "Non-blocking I/O", "NPM ecosystem"],
    icon: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    category: "backend",
    link: "https://nodejs.org/"
  },
  {
    name: "Express.js",
    skills: ["Web framework", "Middleware", "Routing", "RESTful APIs"],
    icon: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg",
    category: "backend",
    link: "https://expressjs.com/"
  },
  {
    name: "Laravel",
    skills: ["MVC Framework", "Eloquent ORM", "Artisan CLI", "Blade templating"],
    icon: "https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg",
    category: "backend",
    link: "https://laravel.com/"
  },
  {
    name: "Firebase",
    skills: ["Cloud Firestore", "Authentication", "Cloud Functions", "Hosting"],
    icon: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    category: "backend",
    link: "https://firebase.google.com/"
  },
  {
    name: "MongoDB",
    skills: ["NoSQL database", "Document storage", "Aggregation pipelines", "Atlas cloud"],
    icon: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    category: "backend",
    link: "https://www.mongodb.com/"
  },
  {
    name: "PostgreSQL",
    skills: ["Relational database", "ACID compliance", "Advanced queries", "Performance optimization"],
    icon: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    category: "backend",
    link: "https://www.postgresql.org/"
  },
  {
    name: "RESTful APIs",
    skills: ["HTTP methods", "Resource-based", "Stateless", "JSON responses"],
    icon: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg",
    category: "backend",
    link: "https://restfulapi.net/"
  },
  {
    name: "GraphQL",
    skills: ["Query language", "Single endpoint", "Type system", "Real-time subscriptions"],
    icon: "https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg",
    category: "backend",
    link: "https://graphql.org/"
  },
  {
    name: "OAuth",
    skills: ["Authentication", "Authorization", "Third-party login", "Secure tokens"],
    icon: "https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg",
    category: "backend",
    link: "https://oauth.net/"
  },
  {
    name: "JWT",
    skills: ["JSON Web Tokens", "Stateless auth", "Claims-based", "Secure transmission"],
    icon: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    category: "backend",
    link: "https://jwt.io/"
  },
  {
    name: "AWS",
    skills: ["Cloud computing", "EC2", "S3", "Lambda", "RDS"],
    icon: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    category: "backend",
    link: "https://aws.amazon.com/"
  },
  {
    name: "Vercel",
    skills: ["Frontend deployment", "Serverless functions", "Edge network", "Git integration"],
    icon: "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg",
    category: "backend",
    link: "https://vercel.com/"
  },
  {
    name: "Netlify",
    skills: ["Static site hosting", "Continuous deployment", "Form handling", "Edge functions"],
    icon: "https://images.pexels.com/photos/11035484/pexels-photo-11035484.jpeg",
    category: "backend",
    link: "https://www.netlify.com/"
  },
  // Database
  // DevOps & Tools
  {
    name: "Version Control",
    skills: ["Git", "GitHub", "Bitbucket"],
    icon: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg",
    category: "devops"
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Jenkins", "Artillery.js", "NGINX"],
    icon: "https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg",
    category: "devops"
  },
  {
    name: "Project Management",
    skills: ["JIRA", "Trello", "Asana"],
    icon: "https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg",
    category: "devops"
  },
  {
    name: "Testing & QA",
    skills: ["Jest", "Mocha", "Postman", "Cypress"],
    icon: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    category: "devops"
  },
  // Digital Marketing
  {
    name: "SEO & Analytics",
    skills: ["SEO (On-page & Off-page)", "SEM & Google Ads", "Google Analytics", "Tag Manager"],
    icon: "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg",
    category: "marketing"
  },
  {
    name: "Social & Content",
    skills: ["Social Media Marketing", "Content Strategy", "Email Marketing", "CRO"],
    icon: "https://images.pexels.com/photos/11035484/pexels-photo-11035484.jpeg",
    category: "marketing"
  },
  // AI & Business Solutions
  {
    name: "AI Development",
    skills: ["Python (NumPy, Pandas)", "TensorFlow", "Scikit-learn", "NLP"],
    icon: "https://images.pexels.com/photos/11035498/pexels-photo-11035498.jpeg",
    category: "ai"
  },
  {
    name: "Business Solutions",
    skills: ["Data Analysis", "Power BI", "Chatbot Development", "Business Automation"],
    icon: "https://images.pexels.com/photos/11035500/pexels-photo-11035500.jpeg",
    category: "ai"
  }
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "Tech Solutions Dubai",
    company_url: "https://nmc.ae/en",
    iconBg: "#383E56",
    date: "March 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js and other related technologies.",
      "Implementing AI model integration for business intelligence solutions.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Developer",
    company_name: "Misk KSA",
    company_url: "https://misk.org.sa/en",
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Feb 2020",
    points: [
      "Led development team for Saudi Arabia's youth empowerment initiative.",
      "Architected and implemented scalable web applications with React and Node.js.",
      "Integrated map-based services for location-specific program delivery.",
      "Managed agile development processes and mentored junior developers.",
      "Collaborated with stakeholders to align technical solutions with organizational goals.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Soneri Bank",
    company_url: "https://soneribank.com/",
    iconBg: "#383E56",
    date: "Jan 2016 - Jan 2018",
    points: [
      "Developed and maintained banking web applications with security as a priority.",
      "Implemented responsive interfaces for customer-facing banking portals.",
      "Collaborated with IT security team to ensure compliance with financial regulations.",
      "Integrated third-party payment processing systems and APIs.",
      "Participated in system testing and quality assurance processes.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Dawaai.pk",
    company_url: "https://dawaai.pk/",
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Jan 2016",
    points: [
      "Built Pakistan's leading online pharmacy platform from the ground up.",
      "Implemented e-commerce functionality with secure payment processing.",
      "Developed inventory management system integrated with supplier networks.",
      "Created mobile-responsive design for optimal user experience.",
      "Implemented analytics tracking to monitor user behavior and optimize conversion.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aziz transformed our business with an AI-powered solution that increased our operational efficiency by 40%.",
    name: "Sara Ahmed",
    designation: "CFO",
    company: "VistaJet",
    company_url: "https://www.vistajet.com/en/",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Aziz does.",
    name: "Mohammed Al-Farsi",
    designation: "COO",
    company: "Misk Foundation",
    company_url: "https://misk.org.sa/en",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aziz optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Emirates Group",
    company_url: "https://www.bystored.com/",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-Powered CRM",
    description:
      "Web-based platform that allows businesses to manage customer relationships with AI-powered insights, predictive analytics, and automated follow-ups to increase conversion rates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
    client_url: "https://www.fairca.org/",
  },
  {
    name: "Map-Based Service Finder",
    description:
      "A comprehensive platform that enables users to find services near them, book appointments, and make payments - all integrated with Google Maps API for location-based recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "googlemaps",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/7709291/pexels-photo-7709291.jpeg",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
    client_url: "https://ezestate.com/",
  },
  {
    name: "E-commerce Platform",
    description:
      "A modern e-commerce solution with inventory management, payment processing, and customer analytics dashboard, optimized for mobile and desktop experiences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
    client_url: "https://www.suncola.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
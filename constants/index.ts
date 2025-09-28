// NAV BAR LINKS

export const Links = [

  {
    "name": "About Me",
    "href": "#about"
  },
  {
    "name": "Projects",
    "href": "#projects"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
]

//ABOUT SECTION

export const aboutMe = [
  {
    "id": "me",
    "button": "Who am I?",
    "answer": "I’m a creative frontend developer who loves building websites that don’t just look good — they move, interact, and tell a story. My focus is blending clean code with bold design to craft unique digital experiences. From smooth animations to scalable full-stack solutions, I enjoy turning ideas into projects that feel alive. Outside of coding, I draw inspiration from design, photography, and everyday moments — because I believe the best websites should feel as personal as they are functional.",
    "img": "/media/aboutImgs/portfolio-img.png"
  },
  {
    "id": "skills",
    "button": "My Stack",
    "skills": {
      "Frontend": ["HTML", "CSS", "JavaScript", "Typescript" ,"TailwindCSS", "React", "Redux", "Next.js", "GSAP"],
      "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL with Prisma ORM"],
      "Tools": ["Git", "GitHub", "VS Code", "Figma"]
    },
    "img": "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_2a3ad396.jpg"
  }
]


// PROJECTS SECTION 
export const ProjectsData = [
  {
    title: "Freelance Boost AI - AI Learning Companion Platform",
    slug: "freelance-boost-ai-ai-learning-companion-platform",
    overview: "A modern web application that enables users to learn through AI-powered voice conversations. Users can browse AI companions across different subjects, engage in real-time voice sessions, track progress, and bookmark favorite learning experiences.",
    features: [
      "AI companion library with search and filtering",
      "Voice-enabled learning sessions with real-time conversation",
      "Progress tracking and session history",
      "User authentication and personalized profiles",
      "Custom companion creation"
    ],
    link: "https://learningagent.vercel.app/",
    github: "https://github.com/MoohamedPK/your-store",
    image: "/media/Projects/aiAgent.png",
    color: "#ECFAE5", 
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "GSAP",
      "React Hook Form",
      "Vapi",
    ]
  },
  
  {
    title: "Awwward Landing Page",
    slug: "awwward-landing-page",
    link: "https://awwward-landing-page.vercel.app/",
    overview: "An animated, media-rich landing page featuring smooth scroll effects, GSAP animations, and video transitions.",
    features: [
      "Creative animated layout",
      "Smooth scroll-triggered transitions",
      "Video backgrounds and section reveals",
      "Modern responsive design"
    ],
    github: "https://github.com/MoohamedPK/awwward-landing-page-",
    image: "/media/Projects/redefine.png",
    color: "#ECFAE5",
    techs: ["React", "Tailwind CSS", "GSAP"]
  },
  {
    title: "ShopHub E-commerce",
    slug: "shophub-e-commerce",
    link: "https://shophub-wheat.vercel.app/",
    overview: "A full-stack e-commerce platform with an admin dashboard. Supports guest and authenticated shopping, order management, and role-based admin features.",
    features: [
      "User authentication (NextAuth) with roles",
      "Product catalog with categories, sizes, stock",
      "Persistent cart, checkout, and order history",
      "Admin panel for managing products, users, and orders",
      "Responsive UI for both client & admin"
    ],
    github:"https://github.com/MoohamedPK/your-store",
    image: "/media/Projects/ecomm.png",
    color: "#DDF6D2",
    techs: ["Next js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "NextAuth.js", "Prisma", "PostgreSQL", "Zod", "Cypress", "Cloudinary"]
  },
  {
    title: "Food Delivery App",
    slug: "food-delivery-app",
    link: "https://food-delivery-web-frontend-99lm.onrender.com/",
    overview: "A modern, responsive food delivery web application with customer-facing features and an admin panel for restaurant management.",
    features: [
      "User authentication & authorization with JWT",
      "Dynamic food menu with search & filtering",
      "Shopping cart with persistent state",
      "Order management and order tracking",
      "Admin panel for restaurant staff",
      "Responsive, mobile-first UI",
      "Real-time cart updates & order notifications"
    ],
    github: "https://github.com/MoohamedPK/AI-SaaS-App",
    image: "/media/Projects/food.png",
    color: "#CAE8BD",
    techs: [
      "JavaScript",
      "Node.js",
      "React",
      "React Router",
      "Redux Toolkit",
      "Redux Persist",
      "Tailwind CSS",
      "Axios",
      "React Hook Form",
      "Express",
      "MongoDB",
      "JSON Web Token",
      "Stripe",
    ]
  }
];

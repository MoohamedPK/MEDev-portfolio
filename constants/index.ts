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
    "id": "who-am-i",
    "button": "Who am I?",
    "answer": "I'm Mohamed Hassani, a web developer who builds modern, interactive websites that make a lasting impression.",
    "img": "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_2a3ad396.jpg"
  },
  {
    "id": "Why do I build websites?",
    "button": "Why do I build websites?",
    "answer": "I build websites because I love seeing ideas come to life. There's nothing more rewarding than taking a concept and transforming it into a tangible, interactive digital product that people can use and enjoy.",
    "img": "/media/aboutImgs/creative.jpg"
  },
  // {
  //   "id": "what-i-love",
  //   "button": "What do I love?",
  //   "answer": "I love turning ideas into digital experiences, experimenting with new web technologies, and solving complex problems through code.",
  //   "img" : "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_c79838dd.jpg"
  // },
  {
    "id": "behind-the-code",
    "button": "Behind the Code",
    "answer": "When I'm not coding, you can find me exploring nature trails, experimenting with new design tools, or getting lost in a good video game. These hobbies fuel my creativity and help me see problems from different perspectives.",
    "img": "/media/aboutImgs/hobbies.jpg"
  },
  {
    "id": "fun-fact",
    "button": "Fun Fact 😀",
    "answer": "I’m in a committed long-term relationship with console.log(). We have a very open and trusting relationship, and it never lies to me. Well, almost never.",
    "img": "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_dd1d9ad3.jpg"
  }
]


// PROJECTS SECTION 

export const ProjectsData = [
  {
    "title": "Freelance Boost AI - AI Learning Companion Platform",
    "overview": "A modern web application that enables users to learn through AI-powered voice conversations. Users can browse AI companions across different subjects, engage in real-time voice sessions, track progress, and bookmark favorite learning experiences.",
    "features": [
      "AI companion library with search and filtering",
      "Voice-enabled learning sessions with real-time conversation",
      "Progress tracking and session history",
      "User authentication and personalized profiles",
      "Custom companion creation"
    ],
    "link": "https://learningagent.vercel.app/",
    "github": "https://github.com/MoohamedPK/your-store",
    "image": "/media/Projects/upscalemedia-transformed.png",
    "color": "#EEEFE0"
  },
  
  {
    "title": "Awwward Landing Page",
    "link": "https://awwward-landing-page.vercel.app/",
    "overview": "An animated, media-rich landing page featuring smooth scroll effects, GSAP animations, and video transitions.",
    "features": [
      "Creative animated layout",
      "Smooth scroll-triggered transitions",
      "Video backgrounds and section reveals",
      "Modern responsive design"
    ],
    "techStack": {
      "frontend": ["React", "Vite", "Tailwind CSS", "GSAP"]
    },
    "github": "https://github.com/MoohamedPK/awwward-landing-page-",
    "image": "/media/Projects/Screenshot 2025-09-04 210017.png",
    "color": "#A7C1A8"
  },
  {
    "title": "ShopHub E-commerce",
    "link": "https://shophub-wheat.vercel.app/",
    "overview": "A full-stack e-commerce platform with an admin dashboard. Supports guest and authenticated shopping, order management, and role-based admin features.",
    "features": [
      "User authentication (NextAuth) with roles",
      "Product catalog with categories, sizes, stock",
      "Persistent cart, checkout, and order history",
      
      "Admin panel for managing products, users, and orders",
      "Responsive UI for both client & admin"
    ],
    "techStack": {
      "framework": ["Next.js (App Router, TypeScript)"],
      "frontend": ["Tailwind CSS", "shadcn/ui"],
      "state": ["Redux Toolkit"],
      "auth": ["NextAuth"],
      "database": ["PostgreSQL", "Prisma"],
      "storage": ["Cloudinary"],
      "validation": ["Zod"],
      "testing": ["Cypress"]
    },
    "github":"https://github.com/MoohamedPK/your-store",
    "image": "/media/Projects/shophub-laptop.png",
    "color": "#D1D8BE"
  },
  {
    "title": "Food Delivery App",
    "link": "https://food-delivery-web-frontend-99lm.onrender.com/",
    "overview": "A modern, responsive food delivery web application with customer-facing features and an admin panel for restaurant management.",
    "features": [
      "User authentication & authorization with JWT",
      "Dynamic food menu with search & filtering",
      "Shopping cart with persistent state",
      "Order management and order tracking",
      "Admin panel for restaurant staff",
      "Responsive, mobile-first UI",
      "Real-time cart updates & order notifications"
    ],
    "techStack": {
      "frontend": ["React 18", "Redux Toolkit + Persist", "React Router DOM", "Tailwind CSS", "Vite", "Lucide React", "React Hook Form"],
      "backend": ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "Bcrypt", "Multer", "Stripe"],
      "devTools": ["ESLint", "Nodemon", "Git"]
    },
    "github": "https://github.com/MoohamedPK/AI-SaaS-App",
    "image": "/media/Projects/Screenshot 2025-09-04 205856.png",
    "color": "#B0DB9C"
  }
]

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
    "answer": "I’m Mohamed Hassani, a web developer passionate about building modern, interactive websites.",
    "img": "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_2a3ad396.jpg"
  },
  {
    "id": "what-i-do",
    "button": "What do I do?",
    "answer": "I create responsive, performant, and user-friendly websites using modern web technologies like React, Next.js, and Tailwind CSS.",
    "img": "/media/aboutImgs/creative.jpg"
  },
  {
    "id": "what-i-love",
    "button": "What do I love?",
    "answer": "I love turning ideas into digital experiences, experimenting with new web technologies, and solving complex problems through code.",
    "img" : "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_c79838dd.jpg"
  },
  {
    "id": "fun-fact",
    "button": "Fun Fact 😀",
    "answer": "Besides coding, I enjoy video games, exploring nature, and improving my skills in design and front-end development.",
    "img": "/media/aboutImgs/WhatsApp Image 2025-09-02 at 13.38.10_dd1d9ad3.jpg"
  }
]


// PROJECTS SECTION 

export const ProjectsData = [
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
    "image": "/media/Projects/Screenshot 2025-09-04 205856.png",
    "color": "#0f172a"
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
    "image": "/media/Projects/Screenshot 2025-09-04 210017.png",
    "color": "#3e1e1e"
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
    "image": "/media/Projects/Screenshot 2025-09-04 210044.png",
    "color": "#113827"
  }
]

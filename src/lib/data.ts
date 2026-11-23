// Portfolio data - edit this file to update portfolio content

export const personalInfo = {
  name: "Aayush Mittal",
  fullName: "Aayush Mittal",
  title: "Full-Stack Developer",
  subtitle: "Crafting Digital Experiences with Code & Creativity",
  description:
    "I build scalable, high-performance web applications with cutting-edge technologies. Passionate about clean code, stunning UIs, and bringing ideas to life.",
  email: "mittalaayush570@gmail.com",
  github: "https://github.com/mittal987-alt",
  linkedin: "https://www.linkedin.com/in/aayush-mittal-836326327/",
  resumeUrl: "https://drive.google.com/file/d/1G76YHelZUC7N8lhVc4GbqOFJr1h-QAdz/view?usp=sharing",
  location: "India 🇮🇳",
  availableForWork: true,
};

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Happy Clients", value: "5+" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-cyan-500 to-blue-500",
    items: ["React", "Next.js", "TypeScript", "magic UI", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-purple-500 to-pink-500",
    items: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "GraphQL"],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-green-500 to-emerald-500",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL", "Supabase"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    color: "from-orange-500 to-red-500",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "GitHub Actions"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "from-yellow-500 to-orange-500",
    items: ["Git", "Figma", "VS Code", "Postman", "Jest", "Webpack"],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    color: "from-pink-500 to-rose-500",
    items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Langgraph", "Hugging Face", "Scikit-learn"],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Weather App",
    description:
      "AI-powered weather application built with Next.js, OpenWeather API, and OpenAI. Features global location search, AQI insights, 5-day forecast, and on-demand AI weather advice.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/mittal987-alt/ai-weather-app",
    live: "https://github.com/mittal987-alt/ai-weather-app",
    gradient: "from-cyan-500 to-blue-600",
    image: "/projects/saas.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "ReelX",
    description:
      "A real-time short video social app built with Flutter & Firebase featuring video reels, likes, comments, trending feeds, and customizable user profiles.",
    tags: ["Flutter", "Firebase", "Dart", "WebSockets"],
    github: "https://github.com/mittal987-alt/reelX",
    live: "https://github.com/mittal987-alt/reelX",
    gradient: "from-purple-500 to-pink-600",
    image: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Bazari",
    description:
      "Modern full-stack e-commerce marketplace featuring real-time product discovery, cart management, and seamless modern web UI.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/mittal987-alt/bazari",
    live: "https://bazari-plum.vercel.app",
    gradient: "from-green-500 to-emerald-600",
    image: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Contract Intelligence",
    description:
      "AI contract analysis and legal intelligence tool using LLMs to automatically parse contract clauses, detect risk factors, and provide executive summaries.",
    tags: ["Python", "FastAPI", "OpenAI", "LangChain"],
    github: "https://github.com/mittal987-alt/contract-intelligence",
    live: "https://github.com/mittal987-alt/contract-intelligence",
    gradient: "from-orange-500 to-red-600",
    image: "/projects/saas.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "SkillSphere",
    description:
      "Interactive skill mapping platform allowing developers to curate, track, and visualize learning roadmaps across various tech domains.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/mittal987-alt/skillsphere",
    live: "https://github.com/mittal987-alt/skillsphere",
    gradient: "from-yellow-500 to-orange-600",
    image: "/projects/devops.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Coding Agent",
    description:
      "Autonomous AI coding assistant that analyzes code repositories, generates automated pull request feedback, and executes coding subtasks.",
    tags: ["Python", "LLMs", "LangChain", "CLI Tool"],
    github: "https://github.com/mittal987-alt/coding_agent",
    live: "https://github.com/mittal987-alt/coding_agent",
    gradient: "from-pink-500 to-rose-600",
    image: "/projects/devops.jpg",
    featured: false,
  },
];

export const experience = [
  {
    company: "TechNova Corp",
    role: "Senior Full-Stack Engineer",
    period: "2023 – Present",
    location: "Remote",
    description:
      "Leading development of a microservices-based SaaS platform serving 100K+ users. Architected a real-time notification system reducing latency by 60%.",
    achievements: [
      "Reduced API response time by 40% through Redis caching",
      "Led a team of 5 engineers on core platform features",
      "Implemented CI/CD pipeline cutting deployment time by 70%",
    ],
    tech: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Docker"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    company: "PixelCraft Studio",
    role: "Full-Stack Developer",
    period: "2022 – 2023",
    location: "Hybrid, Mumbai",
    description:
      "Built and shipped 10+ client web applications. Specialized in React-based dashboards and REST API development using Node.js and MongoDB.",
    achievements: [
      "Delivered 10+ projects on time and under budget",
      "Built a design system used across all company projects",
      "Mentored 2 junior developers",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Figma"],
    color: "from-purple-500 to-pink-600",
  },
  {
    company: "CodeStart Bootcamp",
    role: "Frontend Developer Intern",
    period: "2021 – 2022",
    location: "Bangalore, India",
    description:
      "Developed interactive learning modules and UI components for an ed-tech platform. Improved platform performance and user engagement by 35%.",
    achievements: [
      "Built 20+ reusable React components",
      "Improved Lighthouse score from 62 to 94",
      "Integrated payment gateway for course purchases",
    ],
    tech: ["React", "JavaScript", "CSS", "Firebase", "Redux"],
    color: "from-green-500 to-emerald-600",
  },
];

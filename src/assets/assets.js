import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import reactLogo from '../assets/Hero.webp';
import portfolioImg from '../assets/portfolioImg.png';
import whatsappChromeExtensionImg from '../assets/whatsappChromeExtension.png';
import inkflowBlog from '../assets/inkflowBlog.png';
import TaskFlowImg from '../assets/TaskFlowImg.png'
import HrEmailAutomationSysImg from '../assets/HrEmailAutoSysImg.png'

export const assets = {
  reactLogo,
  projectsImage: [
    TaskFlowImg,
    HrEmailAutomationSysImg,
    inkflowBlog,
    whatsappChromeExtensionImg,
    portfolioImg,
  ]
}

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Hono', 'Prisma']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Cloudflare Workers', 'AWS', 'Netlify', 'Git & GitHub']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman', 'VS Code']
  }
];



export const projects = [
  {
    title: "TaskFlow - A Premium Todo Application",
    description: "TaskFlow is a modern, premium todo application built with React, TypeScript, and Vite, featuring a beautiful UI, JWT authentication, and a robust backend API. Organize your tasks with style and efficiency.",
    image: assets.projectsImage[0],
    tech: ["React.js", "Hono", "Tailwind CSS", "Cloudflare Workers", "PostgreSQL", "Prisma", "Resend", "DNS"],
    demo: "https://task-flow-two-umber.vercel.app/",
    code: "https://github.com/AbhishekGargcoder/TaskFlow",
  },
   {
    title: "HR Email Automation System",
    description: "",
    image: assets.projectsImage[1],
    tech: ["Node.js", "TypeScript", "Express.js", "React.js","Tailwind CSS", "Resend API" ,"DNS","Nodemailer","SMTP","Cloudflare Pages"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://cb7297d6.hr-email-automation-system.pages.dev/",
    code: "https://github.com/AbhishekGargcoder/HR-outreach-Automation-System"
  },
  {
    title: "InkFlow - Blogging Website:",
    description: "Built a production-ready blogging platform with authentication, blog publishing, global state management, and serverless backend deployment using Cloudflare Workers for scalable performance.",
    image: assets.projectsImage[2],
    tech: ["React.js", "Hono", "Tailwind CSS", "Cloudflare Workers", "PostgreSQL", "Prisma"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://inkflow-blog.netlify.app/",
    code: "https://github.com/AbhishekGargcoder/Inflow-blogging-app",
  },
  {
    title: "Whatsapp Chrome Extension",
    description: "Built a Chrome Extension that instantly blurs all WhatsApp Web chats with one click to protect privacy during screen shares, meetings, or public settings",
    image: assets.projectsImage[3],
    tech: ["HTML5", "CSS3 INJECTION", "JavaScript", "Chrome extension Storage"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://github.com/AbhishekGargcoder/Whatsapp-chrome-extension/",
    code: "https://github.com/AbhishekGargcoder/Whatsapp-chrome-extension/",
  },
  {
    title: "Portfolio Website",
    description: "Built a responsive and user-friendly portfolio website using React.js, Tailwind CSS, and Framer Motion",
    image: assets.projectsImage[4],
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaDatabase],
    demo: "https://abhishek-garg-portfolio-app.netlify.app/",
    code: "https://abhishek-garg-portfolio-app.netlify.app/",
  },
  // {
  //   title: "Portfolio Website",
  //   description: "Built a responsive and user-friendly portfolio website using React.js, Tailwind CSS, and Framer Motion",
  //   image: projectImage,
  //   tech: ["React.js", "Tailwind CSS", "Framer Motion"],
  //   icons: [FaReact, FaDatabase],
  //   demo: "https://abhishek-garg-portfolio-app.netlify.app/",
  //   code: "https://abhishek-garg-portfolio-app.netlify.app/",
  // },
];


export const workData = [
  {
    role: "Software Developer",
    company: "Perfect Software Solutions",
    duration: "Dec 2025 - Present",
    description:
      "Developing and maintaining web applications using React.js, Node.js, and Postgres SQL. Collaborating with cross-functional teams to design and implement new features, optimize performance, and ensure code quality.",
    color: "blue"
  },
  {
    role: "Analyst Trainee",
    company: "Cognizant Technology Solutions",
    duration: "Sept 2025 - Nov 2025",
    description:
      "Completed structured training in Linux administration, networking fundamentals, Windows Server, and relational databases.",
    color: "blue"
  }
];

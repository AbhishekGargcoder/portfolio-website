import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import reactLogo from '../assets/image.jpg';
import projectImage from '../assets/projectImage-sample.png';
import whatsappChromeExtension from '../assets/whatsappChromeExtension.png';
import inkflowBlog from '../assets/inkflowBlog.png';
// import portfolioWebsite from '../assets/portfolio-website.png';

export const assets = {
    reactLogo,
    projectImage,
    projectsImage:[
      inkflowBlog,
      whatsappChromeExtension,
      // portfolioWebsite,
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
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Vercel']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman','VS Code']
  }
];



export const projects = [
  {
    title: "InkFlow - Blogging Website:",
    description: "Built a production-ready blogging platform with authentication, blog publishing, global state management, and serverless backend deployment using Cloudflare Workers for scalable performance.",
    image: assets.projectsImage[0],
    tech: ["React.js","Hono", "Tailwind CSS","Cloudflare Workers","PostgreSQL","Prisma"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://inkflow-blog.netlify.app/",
    code: "https://github.com/AbhishekGargcoder/Inflow-blogging-app",
  },
  {
    title: "Whatsapp Chrome Extension",
    description: "Built a Chrome Extension that instantly blurs all WhatsApp Web chats with one click to protect privacy during screen shares, meetings, or public settings",
    image: assets.projectsImage[1],
    tech: ["HTML5","CSS3 INJECTION","JavaScript","Chrome extension Storage"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://github.com/AbhishekGargcoder/Whatsapp-chrome-extension/",
    code: "https://github.com/AbhishekGargcoder/Whatsapp-chrome-extension/",
  },
  {
    title: "Portfolio Website",
    description: "Built a responsive and user-friendly portfolio website using React.js, Tailwind CSS, and Framer Motion",
    image: projectImage,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaDatabase],
    demo: "https://abhishek-garg-portfolio-app.netlify.app/",
    code: "https://abhishek-garg-portfolio-app.netlify.app/",
  },
];


export const workData = [
  {
    role: "Analyst Trainee",
    company: "Cognizant Technology Solutions",
    duration: "Sept 2025 - Nov 2025",
    description:
      "Completed structured training in Linux administration, networking fundamentals, Windows Server, and relational databases.",
    color: "blue"
  }
];

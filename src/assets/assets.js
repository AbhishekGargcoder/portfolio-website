import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import reactLogo from '../assets/image.jpg';

import projectImage from '../assets/projectImage-sample.png';
export const assets = {
    reactLogo,
    projectImage,
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
    title: "Wanderlust — Airbnb Backend clone",
    description: "•	Built a full-stack hotel booking web application using Node.js, Express.js, and Bootstrap with a clean MVC architecture",
    image: projectImage,
    tech: [, "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Planora — Task Management App",
    description: "Developed a full-featured To-Do application using the MERN stack (MongoDB, Express.js, Node.js) with full CRUD functionality",
    image: projectImage,
    tech: ["MongoDB", "Express.js", "Node.js",],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "Built a responsive and user-friendly portfolio website using React.js, Tailwind CSS, and Framer Motion",
    image: projectImage,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
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

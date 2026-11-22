// EDIT ONLY THIS FILE to change your content. Replace every "#" with a real link.
import { GraduationCap, Rocket, Award, Trophy, Code2, Server, Database, Wrench, Bot, Wallet, Layers, Palette } from "lucide-react";

export const profile = {
  name: "Nikitha Nayak",
  first: "Nikitha",
  last: "Nayak",
  logo: "Nikitha.dev",
  role: "Full-Stack MERN Developer",
  tagline: "I build responsive React interfaces, Node.js APIs and LLM-powered apps - turning ideas into products people actually use.",
  badge: "Available for opportunities",
  photo: "/Nikitha_Nayak.jpeg", // put your photo in /public with this name (optional)
  photoTag1: { small: "Based in", big: "Mangalore" },
  photoTag2: { small: "Graduated", big: "MCA 2025" },
  email: "https://www.linkedin.com/in/nikitha-nayak1/@gmail.com",
  linkedin: "#", // paste your LinkedIn URL
  github: "https://github.com/Nikitha9n", // paste your GitHub URL
  resume: "/Nikitha_Nayak_Resume.pdf", // put the PDF in /public
};


export const stats = [
  { n: "2", l: "Internships" },
  { n: "2+", l: "Projects" },
  { n: "8.60", l: "MCA CGPA" },
];

export const about = {
  title: "Curious mind,",
  accent: "relentless builder",
  text: "I'm an MCA graduate who believes the best way to learn is to ship. From finance dashboards to AI chat assistants, I love turning hard problems into useful products.",
  cards: [
    { icon: GraduationCap, title: "MCA, CGPA 8.60", text: "St. Joseph Engineering College, focused on full-stack development." },
    { icon: Code2, title: "Full-Stack Intern", text: "Built login, forms and SQL-backed features at Accolade Tech Solutions." },
    { icon: Bot, title: "LLM Integration", text: "Deployed a Groq-powered chat assistant with multi-turn memory." },
    { icon: Trophy, title: "BCA, CGPA 9.03", text: "St. Raymond's Degree College, a strong base in programming." },
  ],
};

export const skills = [
  { group: "Languages", items: [["JavaScript (ES6+)", Code2], ["Python", Code2], ["Java", Code2]] },
  { group: "Frontend", items: [["React.js", Layers], ["HTML5", Code2], ["CSS3", Palette], ["Bootstrap", Palette], ["Tailwind CSS", Palette]] },
  { group: "Backend & APIs", items: [["Node.js", Server], ["Express.js", Server], ["REST APIs", Server], ["Authentication", Server], ["Groq LLM API", Bot]] },
  { group: "Database", items: [["MySQL", Database], ["SQL", Database]] },
  { group: "Tools & Platforms", items: [["Git", Wrench], ["GitHub", Wrench], ["Netlify", Wrench], ["Hoppscotch", Wrench]] },
];

export const projects = [
  {
    icon: Bot, tag: "AI Chat App", title: "AI-Powered Contextual Chat Assistant",
    text: "A single-page chat app with real-time responses, multi-turn memory via express-session, and formatted markdown and code blocks from the Groq API.",
    tech: ["Node.js", "Express", "Groq API", "EJS"],
    link: "#", // live demo link
  },
  {
    icon: Wallet, tag: "Finance Platform", title: "Wealth-IQ",
    text: "A finance management system with transaction tracking, expense monitoring, an admin dashboard and OCR support, built on React, Express and MySQL.",
    tech: ["React", "Node.js", "MySQL", "Python OCR"],
    link: "#", // add after deploying
  },
  {
    icon: Wallet, tag: "Brevery-app", title: "Brevery",
    text: "A real-time brewery finder that fetches and dynamically displays breweries by country using the Open Brewery DB API, complete with input validation and error handling",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Axios", "REST API"],
    link: "https://brewery-search-app.netlify.app/", // add after deploying
  },
  {
    icon: Wallet, tag: "Simon Says Game", title: "S-game",
    text: "A simple and interactive Simon Says memory game built using HTML, CSS, and JavaScript.",
    tech: ["Css","Javascript"],
    link: "https://simonsayzgame.netlify.app/", // add after deploying
  },
  // {
  //   icon: Wallet, tag: "Finance Platform", title: "Wealth-IQ",
  //   text: "A real-time brewery finder that fetches and dynamically displays breweries by country using the Open Brewery DB API, complete with input validation and error handling",
  //   tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Axios", "REST API"],
  //   link: "https://brewery-search-app.netlify.app/", // add after deploying
  // },

  // {
  //   icon: Search, // or Beer (make sure to import it from 'lucide-react')
  // tag: "API Web App",
  // title: "Brewery Search App",
  // text: "A real-time brewery finder that fetches and dynamically displays breweries by country using the Open Brewery DB API, complete with input validation and error handling.",
  // tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Axios", "REST API"],
  // link: "https://brewery-search-app.netlify.app/", // add after deploying
  // },
  // {
  //   icon: Gamepad2, // make sure to import Gamepad2 from 'lucide-react'
  // tag: "Interactive Game",
  // title: "Simon Says Memory Game",
  // text: "An interactive browser-based memory game featuring random color sequence generation, progressive difficulty levels, flash animations, and keyboard/button event handling.",
  // tech: ["HTML5", "CSS3", "JavaScript (ES6)", "DOM Manipulation"],
  // link: "https://simonsayzgame.netlify.app/", // replace with your live demo or exact repo URL
  // },
];

export const experience = [
  {
    role: "Full Stack Web Developer Intern", company: "Accolade Tech Solutions, Mangalore", period: "Apr 2025 - Jul 2025",
    points: ["Built responsive interfaces with HTML, CSS, Bootstrap and JavaScript.", "Developed login/authentication and form submission with Node.js and Express.", "Wrote SQL queries to save, fetch and display data.", "Tested and debugged the app to improve performance."],
  },
  {
    role: "Frontend Developer Intern", company: "Vinyasa Tech Solutions, Mangalore", period: "Oct 2024 - Nov 2024",
    points: ["Developed responsive pages with HTML, CSS, JavaScript and React.js.", "Built reusable React components for easier maintenance."],
  },
];

export const milestones = [
  { icon: GraduationCap, big: "8.60", small: "MCA CGPA", title: "MCA", text: "St. Joseph Engineering College, 2023 - 2025." },
  { icon: Award, big: "9.03", small: "BCA CGPA", title: "BCA", text: "St. Raymond's Degree College, 2020 - 2023." },
  { icon: Rocket, big: "3", small: "Certifications", title: "Certified", text: "JavaScript (Meta), Git & GitHub (Great Learning), SQL Basic (HackerRank)." },
];

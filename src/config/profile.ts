export interface ProfileConfig {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
      technologies: string[];
    }>;
  };
  skills: {
    title: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      technologies: string[];
      github: string;
      live: string;
      image: string;
    }>;
  };
  education: {
    title: string;
    items: Array<{
      institution: string;
      degree: string;
      duration: string;
      description: string;
    }>;
  };
  certifications: {
    title: string;
    items: Array<{
      name: string;
      issuer: string;
      date: string;
      credential: string;
    }>;
  };
}

export const profileConfig: ProfileConfig = {
  personal: {
    name: "Jhonrel Alvero Acharon",
    title: "Senior Full Stack Engineer",
    subtitle: "Building amazing digital experiences",
    bio: "Senior Full-Stack Engineer with 8+ years of experience building scalable, high-performance web applications using modern frameworks. Expert in designing and developing end-to-end solutions, from responsive, intuitive frontends to robust backend services. Proficient in modern frontend technologies with a strong eye for UI/UX best practices and performance optimization. Proven experience in microservices, RESTful APIs, and full-stack product delivery.",
    location: "Philippines",
    email: "jhonrel0216@email.com",
    phone: "+63 935 478 5699",
    website: "https://johndoe.vercel.app",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/frontsunriver",
    twitter: "https://twitter.com/johndoe"
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Accenture",
        position: "Senior Software Engineer",
        duration: "2023 - Present",
        description: "Lead development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
        technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
      },
      {
        company: "Deloitte Digital",
        position: "Full Stack Developer",
        duration: "2020 - 2022",
        description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with design team to implement responsive UIs.",
        technologies: ["Vue.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"]
      },
      {
        company: "HashMicro ",
        position: "Web Developer",
        duration: "2018 - 2020",
        description: "Developed responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
        technologies: ["React", "JavaScript", "CSS3", "HTML5", "Sass"]
      }
    ]
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"]
      },
      {
        name: "Frontend",
        items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Sass", "UI Frameworks"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Express.js", "Django", "PostgreSQL", "MongoDB", "Redis"]
      },
      {
        name: "DevOps & Tools",
        items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD",  "Nginx"]
      },
      
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        github: "https://github.com/frontsunriver/ecommerce-platform",
        live: "https://dld-vip.com",
        image: "/images/dld-vip.jpg"
      },
      {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        github: "https://github.com/frontsunriver/ecommerce-platform",
        live: "https://dld-vip.com",
        image: "/images/carousell.png"
      },
      {
        name: "Healthcare Dashboard",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://weather-demo.com",
        image: "/images/curvehealth.png"
      },
      {
        name: "Travel booking Agency",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://weather-demo.com",
        image: "/images/campanyon.png"
      },
      {
        name: "Stable coin for inflattion",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://weather-demo.com",
        image: "/images/nuon.png"
      },
      {
        name: "Innovative ",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://weather-demo.com",
        image: "/images/eclipsefi.png"
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "Nanyang Technological University",
        degree: "Bachelor's Degree",
        duration: "May 2014 – Sep 2017",
        description: ""
      }
    ]
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        credential: "AWS-SAA-2023"
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2022",
        credential: "GCP-PD-2022"
      },
      {
        name: "Certified Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "2021",
        credential: "CKA-2021"
      }
    ]
  }
};

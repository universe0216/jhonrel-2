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
    title: "Full-stack & Automation Engineer",
    subtitle: "Full-stack & Automation Engineer",
    bio: "Results-driven Senior Full-stack Engineer with 8+ years of experience building and optimizing scalable backend systems, APIs, and automation workflows. Specialized in API development, AI-driven automation, and database design/management using Python, Node.js, and SQLAlchemy. Proven track record in developing microservice architectures, integrating third-party and AI tools, and implementing secure, high-performance data systems.",
    location: "Philippines",
    email: "jhonrel0216@email.com",
    phone: "+63 935 478 5699",
    website: "https://johndoe.vercel.app",
    linkedin: "",
    github: "https://github.com/frontsunriver",
    twitter: ""
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Accenture",
        position: "Senior Software Engineer",
        duration: "January 2024 - Present",
        description: "",
        technologies: ["TypeScript", "Python", "n8n", "React", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes", "Postgres", "Redis" ]
      },
      {
        company: "Artization",
        position: "Founding Engineer",
        duration: "October 2023 - Present",
        description: "",
        technologies: ["TypeScript", "Python", "Node.js", "Express.js", "n8n", "React", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes", "MongoDB", "Redis" ]
      },
      {
        company: "Carousell",
        position: "Full Stack Engineer",
        duration: "September 2022 - December 2023",
        description: "",
        technologies: ["React.js","TypeScript", "Zapier", "n8n", "Nest.js", "MongoDB", "PostgreSQL", "Redis"]
      },
      {
        company: "Deloitte Digital",
        position: "Full Stack Developer",
        duration: "May 2020 - August 2022",
        description: "",
        technologies: ["Python", "TypeScript", "Next.js", "JavaScript", "CSS3", "HTML5", "Sass"]
      },
      {
        company: "HashMicro ",
        position: "Web Developer",
        duration: "January 2018 - April 2020",
        description: "",
        technologies: ["Python", "React", "TypeScript", "Next.js", "JavaScript", "CSS3", "HTML5", "Sass"]
      }
    ]
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Sass", "UI Frameworks", "Responsive Design"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Express.js", "Nest.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL"]
      },
      {
        name: "Automation & Testing",
        items: ["Selenium", "Playwright", "Puppeteer", "Cypress", "Jest", "Vitest", "PyTest", "WebDriverIO", "API Testing", "E2E Testing"]
      },
      {
        name: "DevOps & Tools",
        items: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI", "Terraform", "Git", "CI/CD", "Nginx", "Monitoring & Logging"]
      },
      
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
        github: "https://github.com/frontsunriver/ecommerce-platform",
        live: "https://dld-vip.com",
        image: "/images/dld-vip.jpg"
      },
      {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Tailwind CSS"],
        github: "https://github.com/frontsunriver/ecommerce-platform",
        live: "https://www.carousell.sg/",
        image: "/images/carousell.png"
      },
      {
        name: "Healthcare Dashboard",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Vue.js", "Chart.js", "Vuex", "PWA", "Material UI", "Python", "Django", "Postgres"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://www.curvehealth.com",
        image: "/images/curvehealth.png"
      },
      {
        name: "Travel booking Agency",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["React.js", "Next.js", "Nest.js", "Postgres", "AWS" , "Tailwind CSS"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://campanyon.com",
        image: "/images/campanyon.png"
      },
      {
        name: "Stable coin for inflattion",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["React", "Next.js", "Web3.js", "Chart.js", "TheGraph", "Typescript"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://nuon.fi",
        image: "/images/nuon.png"
      },
      {
        name: "Innovative Crypto Asset management platform",
        description: "A responsive healthcare dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Next.js", "Chart.js", "Web3", "Solidity"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://eclipse.if",
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

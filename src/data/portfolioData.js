export const portfolioData = {
  nav: {
    logo: "NBB.dev",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    tag: "Available for opportunities",
    name: "Bolle\nNihanth\nBhargav",
    subtitle: "Data Science & Full-Stack Developer",
    bio: "B.Tech CSE (Data Science) student at IARE, Hyderabad. I build intelligent systems — from multi-agent fraud detection pipelines to personalized recommendation engines — and ship them as clean, functional web experiences.",
    buttons: [
      { label: "View Projects", href: "#projects", type: "primary" },
      { label: "Get in Touch", href: "#contact", type: "outline" },
    ],
  },

  about: {
    title: "Who I Am",
    paragraphs: [
      "I'm a final-year B.Tech CSE (Data Science) student at the Institute of Aeronautical Engineering, Hyderabad, with a passion for building things that sit at the intersection of machine learning and real-world engineering.",
      "My work spans autonomous AI agent systems, data-driven recommendation engines, and responsive web interfaces. I care deeply about precision — whether that's a 95%+ precision ML pipeline or pixel-perfect UI.",
      "Outside code, I bring leadership, critical thinking, and management skills that help me ship projects with teams as effectively as solo.",
    ],
    stats: [
      { number: "7.69", label: "CGPA" },
      { number: "230+", label: "LeetCode Problems" },
      { number: "3", label: "Live Projects" },
      { number: "5", label: "Certifications" },
    ],
  },

  skills: {
    title: "What I Work With",
    groups: [
      {
        title: "Languages",
        skills: ["Python", "Java", "JavaScript"],
      },
      {
        title: "Tools",
        skills: ["HTML", "CSS", "SQL", "PowerBI"],
      },
      {
        title: "Frameworks",
        skills: ["Flask", "Django", "React.js", "Bootstrap"],
      },
      {
        title: "ML / Data",
        skills: ["Pandas", "NumPy", "Matplotlib", "ChromaDB"],
      },
      {
        title: "Developer Tools",
        skills: ["VS Code", "Jupyter Notebook", "MySQL"],
      },
      {
        title: "Interpersonal",
        skills: ["Leadership", "Management", "Problem-solving"],
      },
    ],
  },

  projects: {
    title: "Things I've Built",
    list: [
      {
        num: "01",
        title: "JATAYU — Autonomous Fraud Detection & Response Network",
        description:
          "A multi-agent fraud detection system with 5 specialized AI agents using Isolation Forest ML and ChromaDB RAG. Detects and responds to banking fraud in real-time (~6 seconds). 95%+ precision with automatic STR/CTR report generation.",
        tech: [
          "Python",
          "Flask",
          "ChromaDB",
          "Sentence Transformers",
          "Isolation Forest",
        ],
        github: "https://github.com/NihanthBhargav/Autonomous-Fraud-Detection-Response-Network.git",
      },
      {
        num: "02",
        title: "Cluster-Based E-Commerce Recommendation System",
        description:
          "A personalized product recommendation engine using K-Means clustering and content-based filtering for effective customer segmentation. Includes an interactive web interface with real-time data-driven recommendations.",
        tech: ["Python", "Django", "K-Means", "MySQL", "JavaScript"],
        github: "https://github.com/NihanthBhargav/E-Commerce-Recommendation-System.git",
      },
      {
        num: "03",
        title: "Brew & Bloom — Café Website",
        description:
          "A multi-section café website featuring branding, menu, and call-to-action sections. Built with a focus on responsive design, smooth UI interactions, and clean visual aesthetics across desktop and mobile.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/NihanthBhargav/Brew-Bloom.git",
      },
      {
        num: "04",
        title: "Shopify — E-Commerce Platform",
        description:
          "A modern e-commerce platform built with full-stack technologies, providing seamless shopping experience with product catalog, shopping cart, and checkout functionality. Features responsive design, real-time inventory management, and secure payment integration for optimal user experience.",
        tech: ["Liquid", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/NihanthBhargav/NihanthBhargav-Bolle.git",
      },
    ],
  },

  experience: {
    title: "Where I've Worked",
    list: [
      {
        role: "Data Science Intern",
        company: "Zidio",
        badge: "ML Solutions",
        description:
          "Built end-to-end machine learning solutions including Time Series Stock Forecasting and Customer Lifetime Value (LTV) Prediction using Python and advanced ML techniques. Applied data preprocessing, feature engineering, and model optimization to improve accuracy and extract meaningful insights. Delivered data-driven solutions to support business strategy and decision-making.",
      },
      {
        role: "Data Science Intern",
        company: "The National Small Industries Corporation Ltd (NSIC)",
        badge: "Data Science",
        description:
          "Built predictive data models using Pandas, NumPy, and Matplotlib, improving analysis efficiency and significantly reducing computation time.",
      },
      {
        role: "Data Analysis Intern",
        company: "Codelevate",
        badge: "Data Analysis",
        description:
          "Performed data cleaning, analysis, and visualization using Excel and Python, contributing to impactful data-driven projects.",
      },
    ],
  },

  certifications: {
    title: "What I've Earned",
    list: [
      { issuer: "TCS", name: "CodeVita Season 12" },
      { issuer: "IBM", name: "PY0101EN — Cognitive Class" },
      { issuer: "Infosys Springboard", name: "Python for Data Science" },
      { issuer: "Salesforce", name: "Certified Agentforce Specialist" },
      { issuer: "Oracle", name: "Certified AI Foundations Associate" },
    ],
  },

  coding: {
    title: "Where I Practice",
    profiles: [
      {
        platform: "LeetCode",
        description:
          "Solved 230+ problems across Easy, Medium, and Hard levels. Demonstrates strong consistency in data structures and algorithms.",
      },
      {
        platform: "HackerRank",
        description:
          "Earned badges in Java, Python, and SQL. Showcasing proficiency in programming fundamentals and database querying.",
      },
    ],
  },

  contact: {
    title: "Let's Connect",
    subtitle:
      "Open to internships and full-time opportunities. Drop me a message anytime.",
    links: [
      {
        icon: "✉",
        label: "nihanthbhargav@gmail.com",
        href: "mailto:nihanthbhargav@gmail.com",
      },
      {
        icon: "⌥",
        label: "GitHub",
        href: "https://github.com/NihanthBhargav",
      },
      {
        icon: "◈",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bolle-nihanth-bhargav-b75262257",
      },
      { icon: "✆", label: "+91 93907 63716", href: "tel:+919390763716" },
    ],
  },

  footer: {
    text: "Designed & built by Bolle Nihanth Bhargav — 2025",
  },
};

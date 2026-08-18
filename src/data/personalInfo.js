const personalInfo = {
  hiringStatus: true,
  firstName: "Ahmed",
  middleName: "Essam",
  lastName: "Hamdy",
  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  phoneNumber: "+20 1010573100",
  email: "ae.devverse@gmail.com",
  resumeLink:
    "https://docs.google.com/document/d/1RgfsiEWWIIaEOHZqilieKGCT4JRGyNhbFDMXd4noA4A/edit?usp=sharing",
  residence: "Egypt",
  location: "Cairo, Egypt",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate (spoken and written)" },
  ],
  title: "Frontend Developer",
  brief:
    "I'm a frontend developer skilled in React, JavaScript, CSS, and Tailwind CSS, focused on creating dynamic, user-centered web applications. I emphasize clean code, responsive design, and performance optimization for scalable and efficient projects. Collaborative and detail-oriented, I aim to refine my expertise in frontend frameworks and lead impactful development teams.",
  bio: "A passionate frontend developer with experience in building responsive and accessible web applications using React, Tailwind CSS, and more.",
  links: {
    portfolio: "https://ahmedessam-portfolio.vercel.app",
    linkedin: "https://www.linkedin.com/in/aehamdy/",
    github: "https://github.com/aehamdy",
  },
  summary:
    // "Enthusiastic and self-driven Junior Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. Passionate about creating responsive, user-friendly web applications with a focus on seamless user experiences. Committed to continuous learning and growth in the ever-evolving field of web development.",
    "Self-taught and highly motivated Frontend Developer with strong knowledge of HTML, CSS, JavaScript (ES6+), and React. Experienced in building responsive and accessible web apps using Tailwind CSS, Context API, and React Router. Comfortable working in teams, using Git, and following Agile practices. Always learning and eager to grow through real-world challenges.",

  technicalSkills: [
    { Languages: ["HTML", "CSS", "JavaScript (ES6+)"] },
    {
      "Frameworks & Libraries": [
        "React JS",
        "Tailwind CSS",
        "SASS",
        "Framer-Motion",
      ],
    },
    { "Version Control": ["Git", "Github"] },
    {
      "Other Tools": [
        "Agile methodologies",
        "Responsive design",
        "Figma (basic)",
      ],
    },
  ],

  experience: [
    {
      company: "Tech-Cell",
      position: "Frontend Developer Intern",
      startDate: "April 2025",
      endDate: "May 2025",
      description: [
        // "Participated in a 4-week collaborative internship focused on building real-world web applications using React.js.",
        // "Week 1: Developed key UI components for a car rental web app alongside a small team (1 frontend & 1 backend developer).",
        // "Week 2: Contributed to the frontend of an e-commerce platform within a 6-person team of frontend and backend developers.",
        // "Weeks 3–4: Helped build a course platform (similar to Udemy) in a large-scale team (8 frontend, 4 backend). Implemented authentication and role-based routing.",
        // "Used Git, GitHub, and Agile-like coordination practices. While backend implementations were incomplete, the frontend features were largely finished and functional.",
        "Built and styled key UI components for a car rental app using React and Tailwind CSS",
        "Collaborated with 5+ developers on an e-commerce frontend; integrated dynamic routing and search features",
        "Implemented authentication and role-based routing in a React-based course platform (similar to Udemy)",
        "Used Git and GitHub for version control and practiced Agile-like workflows",
      ],
    },
    // Add more experience entries here in the future
  ],

  education: [
    {
      universityName: "Thebes Higher Institute of Engineering ",
      location: "Cairo, Egypt",
      degree: "Bachelor's Degree in Communication & Electronics Engineering",
      graduationYear: "2020",
    },
  ],

  certifications: [
    "Self-taught front-end developer through online resources and tutorials.",
  ],

  additionalInformation:
    "Open to both relocation and remote work opportunities.",

  keyStrengths: [
    "Strong problem-solving skills and attention to detail.",
    "Ability to work independently on complex tasks and projects.",
    "Enthusiastic about learning new technologies and contributing to team success.",
    "Passion for creating intuitive and accessible user experiences.",
  ],

  references: ["Available upon request."],
};

export default personalInfo;

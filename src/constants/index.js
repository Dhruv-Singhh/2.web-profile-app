import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate front-end developer with a strong focus on building efficient and scalable web applications using React and SAP Ui5. With 2 and a half years of hands-on experience, I have honed my skills in crafting user-friendly interfaces and optimizing application performance. My goal is to leverage my expertise to create innovative solutions that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-end developer with a passion for creating efficient and user-friendly web applications. With 2 and a half years of professional experience, I have worked with a variety of technologies, including React, SAP UI5, JavaScript, HTML and CSS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy cooking, staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Present",
    role: "Software Engineer",
    company: "Incture Technologies",
    description: `Spearheaded the Frontend (ReactJS) development of the Goods Receipt Event Management System (GREMS). Led client interactions and product demonstrations, engineered complex forms with intricate calculations, and integrated multi-level approval workflows. Implemented reusable components, incorporating libraries like Redux Toolkit, Material UI, and Big Calendar. Directed code refactoring to enhance quality and simplify maintenance.`,
    technologies: ["React.js", "JavaScript", "Redux Toolkit", "Material UI", "Big Calendar", "CI/CD", "Azure Boards"],
  },
  {
    year: "Sept 2022 - Jul 2024",
    role: "Associate Software Engineer",
    company: "Incture Technologies",
    description: `Contributed to the UI development of the Cost of Complexity application using ReactJS. Developed tables and plots, optimizing production costs with machine learning integration. Improved code efficiency, reducing load times from 45 seconds to 5 seconds. Co-developed a UI5-based Plant Maintenance application deployed across 9+ countries, integrated i18n for multi-language support, and automated SAP PM workflows.`,
    technologies: ["React.js", "JavaScript", "SAP UI5", "i18n", "Promises", "Azure", "Plotly"],
  },
  {
    year: "Jun 2022 - Sept 2022",
    role: "Trainee",
    company: "Incture Technologies",
    description: `Engaged in Front-End design and development through ReactJs and SAP UI5 training. Prototyped applications for POCs, integrated JSON and XML data binding, and participated in Agile processes and implemented Git version control.`,
    technologies: ["React.js", "SAP UI5", "JSON", "XML", "Git", "JIRA"],
  },
];

export const PROJECTS = [
  {
    title: "Goods Receipt Event Management System (GREMS)",
    image: project1,
    description:
      "A web application designed to manage goods receipt events with multi-level approval workflows and and complex forms with intricate calculations. Led the frontend (ReactJS) development, integrating various libraries and optimizing code quality through refactoring.",
    technologies: ["React.js", "Redux Toolkit", "Material UI", "Big Calendar", "JavaScript", "CI/CD", "Azure Repos"],
  },
  {
    title: "Cost of Complexity Application",
    image: project2,
    description:
      "A data-driven application focused on reducing production costs using machine learning algorithms. Developed tables and plots using ReactJS, optimizing application performance with load time improvements from 45 seconds to 5 seconds.",
    technologies: ["React.js", "JavaScript", "Azure Boards", "Plotly"],
  },
  {
    title: "Plant Maintenance Application",
    image: project3,
    description:
      "A UI5-based application deployed across 9+ countries, managing SAP PM workflows with multi-language support through i18n. Developed MVC-architecture web pages and implemented efficient REST API data synchronization.",
    technologies: ["SAP UI5", "JavaScript", "MVC", "i18n", "Promises", "JIRA"],
  },
  {
    title: "Proof of Concept (POCs) Applications",
    image: project4,
    description:
      "Prototyped ReactJS and SAP UI5 applications for POCs, demonstrating technical feasibility and driving project approvals.",
    technologies: ["React.js", "SAP UI5", "JSON", "XML"],
  },
];

export const CONTACT = {
  address: "Electronic City Phase 1, Bangalore",
  phoneNo: "9810868659",
  email: "dhruvsingh1519@gmail.com",
};

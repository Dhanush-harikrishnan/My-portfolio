import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Dhanush H",
  title: "Hi all, I'm Dhanush",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with experience in building Web and Mobile applications using JavaScript / React / Node.js and expertise in Data Structures and Algorithms (DSA)."
  ),
  resumeLink: "https://drive.google.com/file/d/1DzvmyLNuLVunjWt2OUcdp1qHc4ChBcjL/view?usp=sharing",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dhanush-harikrishnan",
  linkedin: "https://www.linkedin.com/in/dhanush1505/",
  gmail: "dhanushhari150504@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE DEVELOPER FOCUSING ON PROJECT DEVELOPMENT & COMPETITIVE CODING",
  skills: [
    emoji(
      "⚡ Building efficient, scalable applications with a focus on clean code and performance"
    ),
    emoji(
      "⚡ Developing interactive, responsive Front-end / User Interfaces using modern web technologies"
    ),
    emoji(
      "⚡ Solving complex problems using Data Structures and Algorithms in competitive coding"
    ),
    emoji(
      "⚡ Integrating back-end services and APIs with technologies like Node.js and MongoDB"
    ),
    emoji("⚡ Engaging in real-world projects to continuously enhance coding proficiency")
  ],
  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "R.M.K Engineering College",
      logo: require("./assets/images/rmkLogo.png"),
      subHeader: "B.Tech in Computer Science and Business Systems",
      duration: "May 2024 - Present",
      desc: "Focused on Software Development and Competitive Coding.",
      descBullets: ["Proficient in Java and Data Structures & Algorithms."]
    },
    {
      schoolName: "Shree Niketan Matriculation Higher Secondary School",
      logo: require("./assets/images/niketanLogo.png"),
      subHeader: "HSC",
      duration: "May 2022",
      desc: "HSC Score: 88.16%"
    },
    {
      schoolName: "Vivekananda Matriculation School",
      logo: require("./assets/images/school.png"),
      subHeader: "SSLC",
      duration: "May 2020",
      desc: "SSLC Score: 88.2%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/studyAppLogo.png"),
      projectName: "Study App",
      projectDesc: "Developed a Study app with video meetings, course management, and admin functionalities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://student-project1.onrender.com" // Add actual URL here
        }
      ]
    },
    {
      image: require("./assets/images/shoppingAppLogo.png"),
      projectName: "Shopping App",
      projectDesc: "Created a shopping app with product browsing, cart, payment functionalities, and admin functions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://snapshot-7jit.onrender.com" // Add actual URL here
        }
      ]
    },
    {
      image: require("./assets/images/secure.png"),
      projectName: "Secure Transactions",
      projectDesc: "Implemented secure transactions and stored the session in a Browser instead of a Local machine to reduce the risk.",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/socketLogo.png"),
      projectName: "Networking System",
      projectDesc: "Created a simple networking system using Java with the help of WebSocket.",
      footerLink: [
        {
          name: "Learn More",
          url: "#" // Add actual URL here
        }
      ]
    }
  ],
  display: true 
};

// Work experience section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Certifications and accomplishments in software development and coding competitions",
  achievementsCards: [
    {
      title: "Smart India Hackathon 2023",
      subtitle:
        "Developed a solution to improve data transfer efficiency using packet data in blockchain.",
      image: require("./assets/images/smart.png"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    },
    {
      title: "Web Development BootCamp",
      subtitle:
        "Completed the Web Development BootCamp taught by Dr. Angela Yu on Udemy.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Web Development BootCamp Logo",
      footerLink: []
    },
    {
      title: "Java Masterclass",
      subtitle:
        "Completed the Java Masterclass course by Tim Buchalka on Udemy.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Java Masterclass Logo",
      footerLink: []
    },
    {
      title: "Participated in Hackathon conducted By PEC",
      subtitle:
        "Wondefull experience agained by participating in Hackathon conducted by PEC.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Java Masterclass Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Works published and journey of coding",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://lace-lipstick-b05.notion.site/Leetcode-Dhanush-2a211441dd9f480e92f00e5c7d082ef2?pvs=74",
      title: "Leetcode DSA",
      description:
        "A collection of all the problems I have solved on Leetcode and my approach to solving them."
    },
    {
      url: "#",
      title: "160 Days coding journey",
      description:
        "A blog about my journey of 160 days of coding and how I improved my problem-solving skills."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8807005748",
  email_address: "dhanushhari150504@gmail.com"
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};

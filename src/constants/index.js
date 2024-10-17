import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    health,
    flutter,
    realestate,
    chatapp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Laravel Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "flutter",
      icon: flutter,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      iconBg: "#383E56",
      points: [
        "Creating and maintaining interactive, dynamic web applications using React.js and Redux Toolkit.",
        "Collaborating with UI/UX designers to build user-friendly interfaces with responsive design.",
        "Implementing optimized, reusable components that ensure maintainability and scalability.",
        "Participating in code reviews, sharing insights to improve the overall development quality.",
      ],
    },
    {
      title: "PHP Laravel Developer",
      iconBg: "#E6DEDD",
      points: [
        "Building and maintaining scalable web applications using Laravel and related technologies.",
        "Implementing RESTful APIs, ensuring robust security and seamless data handling.",
        "Collaborating with cross-functional teams, including designers and product managers, to deliver high-quality backend solutions.",
      ],
    },
    {
      title: "Full-Stack Developer",
      iconBg: "#383E56",
      points: [
        "Developing full-stack web applications, handling both frontend and backend tasks with technologies like React, Node.js, and PHP.",
        "Ensuring responsive and accessible user interfaces that perform smoothly across devices.",
        "Managing databases using MySQL and MongoDB, focusing on performance and scalability.",
        "Contributing to continuous integration and delivery pipelines to streamline project deployment.",
      ],
    },
    {
      title: "Flutter Developer",
      iconBg: "#E6DEDD",
      points: [
        "Developing cross-platform mobile applications using Flutter for both iOS and Android.",
        "Integrating Firebase services for real-time databases, authentication, and analytics.",
        "Ensuring consistent performance across different devices and screen sizes by implementing responsive design principles.",
        "Engaging in collaborative problem-solving with teams to optimize mobile user experience.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Real Estate",
      description:
        "Web-based Project that enable users to search for specific houses to either rent or purchase. It also allows users to post their places on sales or for renting",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: realestate,
      source_code_link: "https://github.com/cpoch06/Real_Estate",
    },
    {
      name: "Healthcare Application",
      description:
        "Web application that enables users to search for doctors, book appointments, send email to doctors for consulation, reviewing the service",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "blue-text-gradient"
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: health,
      source_code_link: "https://github.com/cpoch06/Healthcare",
    },
    {
      name: "Chat Application",
      description:
        "A chat application that allows users to create chat rooms, join chat rooms, send messages, and video calls",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/cpoch06/mern_chatApp",
    },
  ];
  
  export { services, technologies, experiences, projects };
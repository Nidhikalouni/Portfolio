// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import cLogo from './assets/tech_logo/c.png'

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import canvaLogo from './assets/tech_logo/canva.jpeg'
import javaLogo from './assets/tech_logo/java.png';
import wordpressLogo from './assets/tech_logo/wordpress.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import seoLogo from './assets/tech_logo/seo.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render.jpeg'

// Experience Section Logo's
import webnexusLogo from './assets/company_logo/webnexus_Solution.jpeg';


// Education Section Logo's
import dbuuLogo from './assets/education_logo/dbuu_logo.jpeg';
import florenceLogo from './assets/education_logo/Florence_Public_School.png';
import kULogo from './assets/education_logo/Kumaun_University_logo.png';
import sALogo from './assets/education_logo/saraswati_Academy_logo.jpeg';

// Project Section Logo's
import imagifyLogo from './assets/work_logo/imagify.png';
import mernAuthLogo from './assets/work_logo/mernAuth.png';
import todoAppLogo from './assets/work_logo/todo.png';
import weatherAppLogo from './assets/work_logo/weatherApp.png';
import ecommerceLogo from './assets/work_logo/ecommerce.png';
import edusityLogo from './assets/work_logo/edusity.png';
import foodDelLogo from './assets/work_logo/foodDel.png';
import TTLogo from './assets/work_logo/TT.png';
import evaraLogo from './assets/work_logo/evara.png';
import simonGameLogo from './assets/work_logo/simonGame.png';
import drumKitLogo from './assets/work_logo/drumKit.png';
import SPSLogo from './assets/work_logo/SPS.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
       { name: 'Java', logo: javaLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Vercel', logo: vercelLogo },
      {name: 'Canva',logo:canvaLogo},
      {name : 'SEO',logo:seoLogo},
      {name: 'Wordpress',logo:wordpressLogo}
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webnexusLogo,
      role: "Web Developer",
      company: "Webnexus Solutions",
      date: "Feb 2025 - May 2025",
      desc: "During my internship at WebNexus Solutions, I worked as a Web Designer and Developer, building responsive websites using the MERN stack and WordPress (Divi). I focused on UI design, SEO optimization, and creating visuals with Canva, strengthening my skills in frontend development and user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "Bootstrap",
        "MongoDb",
        "Canva",
        "Wordpress",
        "Seo"
      ],
    },
   
  
  ];
  
  export const education = [
    {
      id: 0,
      img: dbuuLogo,
      school: "Dev Bhoomi Uttarakhand University,Dehradun",
      date: "Sept 2023 - July 2025",
      grade: "9.7 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Dev Bhoomi Uttarakhand University, Dehradun. During this program, I have built a strong foundation in core computer science subjects like Data Structures, Algorithms, Object-Oriented Programming, DBMS, Web Development, and Software Engineering. .",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: kULogo,
      school: "Kumaun University",
      date: "July 2020 - Aug 2023",
      grade: "68%",
      desc: "I completed my Bachelor's degree (B.Sc.) in Physics, Chemistry, and Mathematics (PCM) from Kumaun University, which strengthened my analytical and problem-solving skills. During this time, my interest in technology grew, motivating me to pursue an MCA.",
      degree: "Bachelor of Science - B.Sc (PCM)",
    },
    {
      id: 2,
      img: florenceLogo,
      school: "Florence Public School",
      date: "Apr 2019 - March 2020",
      grade: "88%",
      desc: "I completed my Class 12 education from Florence Public School under the CBSE board with a focus on Physics, Chemistry, and Mathematics (PCM). This academic journey strengthened my logical thinking, analytical skills, and laid the foundation for my future studies in the field of science and technology.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: sALogo,
      school: "Saraswati Academy",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my Class 10 education from Saraswati Academy under the CBSE board. This phase provided me with a well-rounded academic foundation in subjects such as Science, Mathematics, English, and Social Studies, preparing me for higher education.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Imagify",
      description:
        "Imagify is an AI-powered image generation web app built with the MERN stack. It allows users to generate high-quality images using text prompts, powered by the Clipdrop API. Imagify features secure authentication, a responsive UI, and smooth client-server interaction.",
      image: imagifyLogo,
      tags: ["HTML", "CSS", "JS", "TailwindCSS","React JS", "Node JS","Express JS","ClipdropAPI","MONGODB"],
      github: "https://github.com/Nidhikalouni/Imagify",
      webapp: "https://imagify-xlua.vercel.app/",
    },
    {
      id: 1,
      title: "MERN Stack Authentication System",
      description:
        "🔐 MERN Stack Authentication System is a full-stack web application that enables secure user authentication using JWT tokens and HTTP-only cookies. It features login, registration, email verification via OTP, and password reset — all integrated with a responsive React frontend and Node.js backend.",
      image: mernAuthLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express","TailWind CSS","HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nidhikalouni/MERN-STACK-AUTHENTICATION-SYSTEM",
      webapp: "https://mern-auth-project-eight.vercel.app/",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description:
        "Designed and developed a feature-rich e-commerce application using the MERN stack, enabling secure user authentication, product browsing, cart management, and payment processing. Integrated a responsive and intuitive interface to enhance the shopping experience.",
      image: ecommerceLogo,
      tags: ["React JS","Node.js", "MongoDB", "Express", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nidhikalouni/Ecommerce-Website",
      webapp: "/",
    },
    {
      id: 3,
      title: "Edusity",
      description:
        "Edusity - University Landing Page is a responsive single-page React application designed for educational institutions. It features sections like hero, programs, about, testimonials, campus gallery, contact form, and a video modal — all styled with custom CSS and integrated with Web3Forms for form submissions.",
      image: edusityLogo,
      tags: ["React JS", "HTML","CSS","JavaScript"],
      github: "https://github.com/Nidhikalouni/Edusity",
      webapp: "https://edusity-gules-three.vercel.app/",
    },
    {
      id: 4,
      title: "Food Delivery Website",
      description:
        "Developed a responsive and visually appealing Food Delivery Website using ReactJS. The project showcases a modern UI with features like a dynamic homepage, menu display, food categories, cart interface, and smooth navigation. I utilized reusable components, React hooks for state management, and CSS for styling.This project helped me strengthen my frontend development skills.",
      image: foodDelLogo,
      tags: ["JavaScript","React Js", "HTML", "CSS"],
      github: "https://github.com/Nidhikalouni/React-Food-Delivery-Website",
      webapp: "https://react-food-delivery-website-kappa.vercel.app/",
    },
    {
      id: 5,
      title: "Travel and Tourism Management System",
      description:
        "The Travel Management System is a Java-based desktop application built using Swing, AWT, and MySQL. It offers features like user authentication, profile management, package browsing, and hotel booking. Users can securely log in, book travel packages, and view hotel details. The system ensures a smooth user experience with integrated booking and payment functionality.",
      image: TTLogo,
      tags: ["Java","Swing","Awt","MySql","JDBC"],
      github: "https://github.com/Nidhikalouni/Travel-Management-System",
      webapp: "/",
    },
    {
      id: 6,
      title: "Evara",
      description:
        "Evara is an eCommerce website that offers a wide range of products and features to enhance the online shopping experience. The website includes various pages such as Account, Cart, Compare, Wishlist, Details, Login-Register, and Shop, catering to different aspects of the shopping process.",
      image: evaraLogo,
      tags: ["HTML","CSS","JavaScript"],
      github: "https://github.com/Nidhikalouni/Evara",
      webapp: "https://evara-seven.vercel.app/",
    },
    {
      id: 7,
      title: "To-do-App",
      description:
        "This To-Do App is a simple yet powerful task management tool built using React. It allows users to add, delete, and mark tasks as completed with a clean and responsive interface. The app uses React state and props for dynamic updates and real-time interaction. It helped me deepen my understanding of component-based architecture and state management in React.",
      image: todoAppLogo,
      tags: ["HTML", "CSS", "Javascript","React"],
      github: "https://github.com/Nidhikalouni/To-Do-App",
      webapp: "https://to-do-app-ten-phi-33.vercel.app/",
    },
    {
      id: 9,
      title: "Weather App",
      description:
        "This Weather App is a responsive web application built using React, HTML, and CSS. It allows users to search for any city and view real-time weather data including temperature, humidity, and weather conditions. The app fetches data from a public weather API and displays it in a clean, user-friendly UI.",
      image: weatherAppLogo,
      tags: ["HTML", "CSS", "Javascript","API"],
      github: "https://github.com/Nidhikalouni/Weather_App",
      webapp: "https://weather-app-alpha-nine-64.vercel.app/",
    },
    {
      id: 9,
      title: "Simon Game",
      description:
        "Simon Game is a web-based memory game built with HTML, CSS, and JavaScript (jQuery). Players repeat an increasingly long sequence of colored button presses, testing and improving their memory skills with each level.",
      image: simonGameLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Nidhikalouni/-Simon-Game",
      webapp: "https://drum-kit-gw1u.vercel.app",
    },
    {
      id: 10,
      title: "Drum Kit",
      description:
        "🥁 Drum Kit is a simple, interactive, and fun project that lets users play virtual drums with the keyboard or by clicking on the drum icons. It’s built using HTML, CSS, and JavaScript and features a sleek design with smooth animations.",
      image: drumKitLogo,
      tags: [ "HTML", "CSS", "Javascript"],
      github: "https://github.com/Nidhikalouni/-Drum-Kit",
      webapp: "https://drum-kit-theta-two.vercel.app/",
    },
    {
      id: 11,
      title: "Stone-Paper-Scissors",
      description:
        "The Stone-Paper-Scissors game is a fun and interactive single-player web app built using HTML, CSS, and JavaScript. Players compete against the computer, which randomly selects its move each round. The game features real-time result updates, smooth animations, and a clean, intuitive UI. This project helped me strengthen my core web development skills while building a classic game.",
      image: SPSLogo,
      tags: [ "HTML", "CSS", "Javascript"],
      github: "https://github.com/Nidhikalouni/Stone-Paper-Scissor",
      webapp: "https://stone-paper-scissor-three-pi.vercel.app/",
    },
     
  ];  
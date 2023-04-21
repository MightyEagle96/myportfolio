import aguila1 from "../image/aguila1.jpg";
import aguila2 from "../image/aguila2.jpg";
import aguila3 from "../image/aguila3.jpg";
import aguila4 from "../image/aguila4.jpg";

import oliks1 from "../image/oliks1.jpg";
import oliks2 from "../image/oliks2.jpg";
import oliks3 from "../image/oliks3.jpg";
import oliks4 from "../image/oliks4.jpg";

import mestore1 from "../image/mestore1.jpg";
import mestore2 from "../image/mestore2.jpg";
import mestore3 from "../image/mestore3.jpg";
import mestore4 from "../image/mestore4.jpg";
export const myData = {
  name: "Dubem Eagle Ikechukwu",
  subtitle: "Fullstack (MERN) software engineer",
  academicTitle: "M.Sc Information Technology, B.Eng Computer Engineering",
};

export const projectHistory = [
  {
    title: "AGUILA",
    description:
      "AGUILA is a Computer Based Test software, capable of handling e-testing for multiple purposes and usecases, spanning from assessment exercices to recruitment and even promotion exercises. It is a three tier platform that forms the software ecosystem, which involves a central server, a number of local servers deployed at the examination facility and client computers.",
    url: { link: "https://aguila7.web.app/", text: "AGUILA" },
    images: [aguila1, aguila2, aguila3, aguila4],
  },
  // {
  //   title: "ATTENDANCE MONITORING SYSTEM",
  //   description:
  //     "This is a project I currently manage for the Joint Admissions & Matriculation Board, a Nigerian government agency. It is a software capable of keeping records of the attendance of examination officials deployed all over the country in their outposts.",
  //   url: "https://itsjambprojects.web.app/jas/attendance",
  // },
  {
    title: "OLIKS FARMS",
    description:
      "This is a project for a client who is into poultry farming. It's a project that has a website to advertise his brand and also contains a farm management system to manage day to day farm operations.",
    images: [oliks1, oliks2, oliks3, oliks4],
    url: { link: "https://oliksfarmsng.com/", text: "OLIKS FARMS" },
  },
  {
    title: "MESTORES",
    description:
      "This is a hobby project I built. It's an online shopping mall, where vendors can upload their products with prices attached and take payment from interested customers and deliver to them. It includes, google authentication and card payments.",
    images: [mestore1, mestore2, mestore3, mestore4],
    url: { link: "https://mestores-376810.web.app/", text: "MESTORES" },
  },
];

export const educationHistory = [
  { name: "M.Sc Information Technology", year: "2023" },
  { name: "Cyber Security Training", year: "2022" },
  { name: "Diploma Server Infrastructure Management", year: "2019" },
  { name: "B.Eng Computer Engineering", year: "2018" },
  { name: "CCNA Training", year: "2016" },
];

export const techStack = [
  "React",
  "JavaScript",
  "React Native",
  "Node JS",
  "MongoDB",
  "Express",
  "Google Cloud Console",
  "Google Firebase",
  "Heroku",
  "BitBucket",
  "Jira",
  "Electron",
  "Github",
  "Git",
  "Postman",
];

export const workHistory = [
  {
    office: "Joint Admissions & Matriculation Board, Bwari Abuja",
    date: "November 2021 - present",
    role: "Software Engineer",
    present: "PRESENT",
  },
  {
    office: "Sharetray data networks, Gudu Abuja",
    date: "June 2021 - November 2021",
    role: "Software Engineer",
  },
  {
    office: "Sascon International School, Maitama Abuja",
    date: "April 2018 - May 2021",
    role: "ICT Facilitator/Network Administrator",
  },
  {
    office: "Global Distance Learning Institute, Central Area, Abuja",
    date: "April 2016 - October 2021",
    role: "Intern",
  },
];

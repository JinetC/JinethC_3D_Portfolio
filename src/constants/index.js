import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  //rrd,
} from "../assets";

import savingalert from '../assets/image/savingalert.png';

import evs from '../assets/image/evs.png';

import bankapp from '../assets/image/bankapp.png';

import rrd from '../assets/company/rrd.png';

import medical from '../assets/company/medical.png';

import manori from '../assets/image/manori.jpg';

import chandana from '../assets/image/chandana.jpg';

import srikanth from '../assets/image/srikanth.jpg';


//import bankapp from './image/bankapp.png';



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
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
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
];

const experiences = [
  {
    title: "Document Specialist",
    //company_name: "RRD",
    company_name: "RR Donnelley",
    company_name1:"RRD",
    icon: rrd,
    iconBg: "#383E56",
    date: "September 2015 - Augest 2019",
    points: [
      "As a Document Specialist I successfully managed to work around in client given ETA.",
      "Highly familiar Salesforce platform and Active Disclosure application.",
      "Getting reward from the happy client services.",
      "Excellent knowledge about MS Office application with macro."
    ],
  },
  {
    title: "Front Desk Coordinator ",
    company_name: "Technomedics International (pvt) Ltd",
    company_name1: "TMI",
    icon: medical,
    iconBg: "#E6DEDD",
    date: "May 2012 - Aug 2015",
    points: [
      "As a Front Desk Coordinator, I had well experienced from front desk duty and coordinate with the marketing department and the customer.",
      "I had a well experience for maintain and solving the unhappy customers also getting high five for customer care.",
      "I had a very good experienced for handling the entire shipment receiving and local courier handling."
    ],
  },
  /*{
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "I can't say enough about the support I received from Jineth in making the clearance of customers' goods very easy.",
    name: "Manori Wijesinghe",
    designation: "Export Manager",
    company: "Technomedics",
    image: manori,
  },
  {
    testimonial:
      "It is surprisingly easy to work with considering its accuracy and security when working with financial documents.",
    name: "Chandana Kumara",
    designation: "AD Manager",
    company: "RRD",
    image: chandana,
  },
  {
    testimonial:
      "I can assure you that I will take on any heavy task at any time without any hesitation and do it well. He makes a habit of it.",
    name: "Srikanth Jayarajah",
    designation: "Manager-Operation",
    company: "RRD GO",
    image: srikanth,
  },
];

const projects = [
  {
    name: "Saving Alert",
    description:
      "Web-based platform that allows users to search, book and manage recieve and donation between various donors and receivers providing an easy and efficient solution to blood transfusion needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: savingalert,
    source_code_link: "https://github.com/",
  },
  {
    name: "EV System",
    description:
      "Based on Blockchain technology, allows voters to search for their candidate and vote for them, and it is also a secure system to instantly find the percentage of votes received by the respective candidate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: evs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Banking Application",
    description:
      "The aim of this project was to create a platform with a web application to allow users to do all banking transactions and make them more secure online from anywhere.",
    tags: [
      {
        name: "wamp",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bankapp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
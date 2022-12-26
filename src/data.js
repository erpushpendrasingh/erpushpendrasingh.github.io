import {
     FiLinkedin,
     FiGithub,
     FiLayout,
     FiSettings,
     FiPenTool,
     FiTag,
     FiMail,
     FiMapPin,
     FiPhoneCall,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project3 from "./assets/img/projects/airtable.png";
import Project2 from "./assets/img/projects/deccanherald.png";
import Project1 from "./assets/img/projects/pluralsight.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";

import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import Chakra from "./assets/img/skills/Chakra.png";
import SkillImg5 from "./assets/img/skills/Bootstrap.png";
import tailwind from "./assets/img/skills/tailwind.png";
import materialui from "./assets/img/skills/materialui.png";

// navigation
export const navigation = [
     {
          name: "home",
          href: "home",
     },
     {
          name: "about",
          href: "about",
     },
     {
          name: "Skills",
          href: "Skills",
     },
     {
          name: "Projects",
          href: "projects",
     },
     {
          name: "contact",
          href: "contact",
     },
];

// social
export const social = [
     // {
     //      icon: <FiLinkedin />,
     //      href: "https://www.linkedin.com/in/erpushpendrasingh/",
     // },
     // {
     //      icon: <FiGithub />,
     //      href: "https://github.com/erpushpendrasingh",
     // },
];

// companies
export const brands = [
     {
          img: FreelancerBrandIcon,
          href: "",
     },
     {
          img: UpworkBrandIcon,
          href: "",
     },
     {
          img: FiverBrandIcon,
          href: "",
     },
     {
          img: BehanceBrandIcon,
          href: "",
     },
     {
          img: DribbbleBrandIcon,
          href: "",
     },
];

// projects
export const projectsData = [
     {
          id: "1",
          image: Project1,
          name: "Pluralsight",
          // category: 'branding',
          description:
               "Pluralsight is online education company that offers a variety of video training courses for software developers, IT, and creative professionals through its website.",
          code: "https://github.com/erpushpendrasingh/spotless-gate-4639",
          demo: "https://pluralsight-clone-react.netlify.app/",
          TechStack: "TeckStack : React || Chakra UI || Heroku || Git ",
     },
     {
          id: "2",
          image: Project2,
          name: "Deccan Herald",
          // category: 'UI/UX design',
          description:
               "Deccan Herald is an Indian English language daily newspaper published from the Indian state of Karnataka. It was founded by K. N. Guruswamy, a liquor businessman from Ballari and was launched on 17 June 1948.",
          code: "https://github.com/erpushpendrasingh/handsomely-clam-5290",
          demo: "https://deccan-herald-clone.netlify.app/",
          TechStack: "TeckStack : HTML || CSS ||  JavaScript || API || Git ",
     },
     {
          id: "3",
          image: Project3,
          name: "Airtable",
          // category: 'UI/UX design',
          description:
               "Airtable is a cloud collaboration service headquartered in San Francisco. Airtable is a spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet.",

          code: "https://github.com/medadeshreyas/Airtable.com-Clone",
          demo: "https://airtable-clone.netlify.app/",
          TechStack:
               "TeckStack : HTML || CSS ||  JavaScript || API || Git || Bootstrap ",
     },
];

// projects
export const projectsNav = [
     // {
     //   name: 'all',
     // },
     // {
     //   name: 'UI/UX Design',
     // },
     {
          name: "web development",
     },
     // {
     //   name: 'branding',
     // },
];

// skill
export const skills = [
     {
          image: SkillImg1,
          skill: "HTML5",
     },
     {
          image: SkillImg2,
          skill: "CSS3",
     },
     {
          image: SkillImg3,
          skill: "JavaSript",
     },
     {
          image: SkillImg4,
          skill: "React",
     },
     {
          image: SkillImg5,
          skill: "Bootstrap",
     },
     {
          image: SkillImg6,
          skill: "Node.js",
     },
     {
          image: SkillImg7,
          skill: "Git",
     },
     {
          image: Chakra,
          skill: "Chakra",
     },
     {
          image: tailwind,
          skill: "Tailwind",
     },
     {
          image: materialui,
          skill: "Material-UI",
     },
];

// services
export const services = [
     {
          icon: <FiLayout />,
          name: "Web Design",
          description:
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
     },
     {
          icon: <FiSettings />,
          name: "Web Development",
          description:
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
     },
     {
          icon: <FiPenTool />,
          name: "Branding",
          description:
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
     },
     {
          icon: <FiTag />,
          name: "SEO",
          description:
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
     },
];

// contact
export const contact = [
     {
          icon: <FiMail />,
          title: "Have a question?",
          subtitle: "I am here to help you.",
          description: "Email me at erpushpendrasingh8900@gmail.com",
     },
     {
          icon: <FiMapPin />,
          title: "Current Location",
          subtitle: "Kushinagar , 274409 , Uttar Pradesh",
     },
     {
          icon: <FiPhoneCall />,
          title: "Contact me",
          subtitle: "+91 9616850761",
     },
     {
          icon: <FiLinkedin />,
          title: "Linkedin",
          href: "https://www.linkedin.com/in/erpushpendrasingh/",
          subtitle: "https://www.linkedin.com/in/erpushpendrasingh/",
     },
     {
          icon: <FiGithub />,

          title: "Github",
          href: "https://github.com/erpushpendrasingh",
          subtitle: "https://github.com/erpushpendrasingh",
     },
];

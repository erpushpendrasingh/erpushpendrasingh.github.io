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
import Project1 from "./assets/img/projects/pluralsight.png";
import Project2 from "./assets/img/projects/deccanherald.png";
import Project3 from "./assets/img/projects/airtable.png";
import Project4 from "./assets/img/projects/lyst.png";
import Project5 from "./assets/img/projects/meanBuy.png";
import Project6 from "./assets/img/projects/freshtohome.png";

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
          description:
               "Airtable is a cloud collaboration service headquartered in San Francisco. Airtable is a spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet.",

          code: "https://github.com/medadeshreyas/Airtable.com-Clone",
          demo: "https://airtable-clone.netlify.app/",
          TechStack:
               "TeckStack : HTML || CSS ||  JavaScript || API || Git || Bootstrap ",
     },
     {
          id: "4",
          image: Project4,
          name: "Lyst",
          description:
               "Lyst is a global fashion search platform used by 70 million shoppers every year.",

          code: "https://github.com/erpushpendrasingh/seemly-porter-7181",
          demo: "https://lystclonefp.netlify.app/",
          TechStack:
               "TeckStack : React || Redux ||  Chakra UI || JSON Server || Git || Bootstrap ",
     },
     {
          id: "5",
          image: Project5,
          name: "MeanBuy",
          description:
               "Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying from the store.",

          code: "https://github.com/Anwar7411/melted-scale-2590",
          demo: "https://63ce8581258e13181bf15a3e--happycartecomapp.netlify.app/",
          TechStack:
               "TeckStack : React || Redux ||  Chakra UI || JSON Server || Git ||  Styled-Components",
     },
     {
          id: "6",
          image: Project6,
          name: "Fresh-to-home",
          description:
               "Buy Fresh Fish, Seafood, Prawns, Antibiotic free Chicken, Duck, Mutton, Goat, Kebab, Egg, Sausage, Momos online. Home delivered in Bangalore, Delhi, Mumbai, ",

          code: "https://github.com/erpushpendrasingh/Fresh-To-Home",
          demo: "https://fresh-to-home.netlify.app/",
          TechStack:
               "TeckStack : React || Redux ||  Chakra UI || JSON Server || Git ||  Styled-Components",
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
          // href: "mailto:erpushpendrasingh8900@gmail.com?subject = Feedback&body = Portfoli Message",
          description: "Email me: erpushpendrasingh8900@gmail.com",
     },
     {
          icon: <FiPhoneCall />,
          title: "Contact me",
          subtitle: "+91 9616850761",
     },
     {
          icon: <FiMapPin />,
          title: "Current Location",
          subtitle: "Kushinagar , 274409 , Uttar Pradesh",
     },

     {
          icon: <FiLinkedin />,
          title: "Linkedin",
          href: "https://www.linkedin.com/in/erpushpendrasingh/",
          subtitle: "",
     },
     {
          icon: <FiGithub />,

          title: "Github",
          href: "https://github.com/erpushpendrasingh",
          subtitle: "",
     },
];

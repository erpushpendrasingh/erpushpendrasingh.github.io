import React from "react";
import resumeForDownload from "../assets/Pushpendra-Singh-Resume.pdf";
// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
     const downloadResume = async () => {
          window.open(
               "https://drive.google.com/file/d/13nQIEVOt6zNw60f-7n7NoBxAZMKujE2J/view?usp=sharing"
          );
     };
     return (
          <nav>
               <ul className="flex space-x-8 capitalize text-[15px]">
                    {navigation.map((item, idx) => {
                         return (
                              <>
                                   <li
                                        className="text-white hover:text-accent cursor-pointer"
                                        key={idx}
                                   >
                                        <Link
                                             to={item.href}
                                             activeClass="active"
                                             spy={true}
                                             smooth={true}
                                             duration={500}
                                             offset={-70}
                                             className="transition-all duration-300"
                                             target={
                                                  item.target !== null
                                                       ? item.target
                                                       : null
                                             }
                                        >
                                             {item.name}
                                        </Link>
                                   </li>
                              </>
                         );
                    })}
                    <li>
                         <a
                              className="transition-all duration-300"
                              // href="https://drive.google.com/file/d/1PuE0ZAPYxVaSjD4TX9qDjwuPtnJPThJX/view?usp=sharing"
                              href={resumeForDownload}
                              download={true}
                              target={"_blank"}
                              rel="noreferrer"
                              onClick={downloadResume}
                         >
                              Resume
                         </a>
                    </li>
               </ul>
          </nav>
     );
};

export default Nav;

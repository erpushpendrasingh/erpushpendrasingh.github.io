import React from "react";
import { Link } from "react-scroll";

// import woman image
import pushpendra from "../assets/img/pushpendra.jpg";
import contact from "./Contact";

const Hero = () => {
     return (
          <section
               id="home"
               className="lg:h-[89vh] mt-20 flex items-center py-32 lg:py-0 overflow-hidden"
          >
               <div className="container mx-auto h-full">
                    <div className="flex items-center h-full pt-8">
                         <div className="flex-1 flex flex-col items-center lg:items-start">
                              <p className="text-lg text-accent text-md mb-[22px]">
                                   Hey, I'm Pushpendra Singh ! 👋
                              </p>
                              <h1 className="text-4xl text-black leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                                   I Build & Design <br /> Web Interfaces.
                              </h1>
                              <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                                   A full-stack web-developer with a
                                   specialization in MERN stack. Excellent
                                   teamwork, self-motivated and curious, with a
                                   keen interest in building user-centric
                                   products.
                                   <br />
                                   Let's build together something unique.
                              </p>
                              <div className="grid gap-2">
                                   {/* <a href="Contact"><button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all box-border'>
              Work with me
            </button></a> */}

                                   <a
                                        href="https://drive.google.com/file/d/1PuE0ZAPYxVaSjD4TX9qDjwuPtnJPThJX/view?usp=sharing"
                                        target={"_blank"}
                                        rel="noreferrer"
                                   >
                                        <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all m-auto">
                                             Resume
                                        </button>
                                   </a>
                              </div>
                         </div>
                         <div className="top lg:flex flex-1 justify-end items-end h-full">
                              <img
                                   style={{
                                        borderRadius: "50%",
                                        width: "350px",
                                        margin: "auto",
                                        height: "auto",
                                   }}
                                   src={pushpendra}
                                   alt=""
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;

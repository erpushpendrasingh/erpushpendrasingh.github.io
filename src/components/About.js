import React from "react";
import { Link } from "react-scroll";

// import img
import Image from "../assets/img/img.gif";
import { navigation } from "./../data";

const About = () => {
     console.log(navigation[3].href, "nav");
     return (
          <section className="section bg-black" id="about">
               <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row xl:flex-row gap-24">
                         <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                              <div className="flex flex-col">
                                   <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                                        Pushpendra Singh
                                   </h2>
                                   <p className="mb-4 text-accent">
                                        Full Stack Web Developer
                                   </p>
                                   <hr className="mb-8 opacity-5" />
                                   <p className="mb-8">
                                        Hey my name is Pushpendra Singh, I live
                                        in Kushinagar, India. Full Stack Web
                                        developer with hands on project
                                        experience, building websites and web
                                        applications. Passionate about building
                                        excellent software that impress the
                                        lives of those around me. Specialize in
                                        creating software for clients ranging
                                        from individuals and small-business all
                                        the way to large enterprise corporation.
                                        What would you do if you had a software
                                        expert available at your fingerpoints.
                                        My role is to write and style the
                                        front-end and backend components that
                                        meet the requirements of our mocks and
                                        fulfill our user stories. <br />
                                        <br />
                                   </p>
                              </div>
                         </div>
                         <img
                              style={{ margin: "auto" }}
                              className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
                              src={Image}
                              alt="image"
                         />
                    </div>
               </div>
          </section>
     );
};

export default About;

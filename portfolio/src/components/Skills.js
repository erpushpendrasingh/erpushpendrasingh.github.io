import React from "react";

// import skill data
import { skills } from "../data";

const Skills = () => {
     return (
          <section id="Skills" className="py-12 ">
               <div className="container mx-auto ">
                    {" "}
                    <h1 className="text-center mb-9  text-2xl">Skills</h1>
                    <div className="grid lg:grid-cols-5 md:grid-cols-5  grid-cols-3">
                         {skills.map((skill, index) => {
                              return (
                                   <div
                                        className="justify-center item-center mx-auto gap-1 pb-4"
                                        key={index}
                                   >
                                        <img
                                             className="lg:h-20 shadow-2xl mx-auto w-[80px] h-[90px]  rounded-xl "
                                             src={skill.image}
                                             alt=""
                                        />
                                        <p className=" text-center ">
                                             {skill.skill}
                                        </p>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </section>
     );
};

export default Skills;

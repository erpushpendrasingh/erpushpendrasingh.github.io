import React from "react";
import Typewriter from "typewriter-effect";

const TypingTitle = () => {
     return (
          <>
               <div className="sub" style={{ color: "#F6F6F6" }}>
                    <Typewriter
                         options={{
                              strings: [
                                   "Full Stack Web Developer",
                                   "Learner",
                                   "ReactJS Developer",
                                   "Front End Developer",
                              ],
                              autoStart: true,
                              loop: true,
                              delay: 60,
                         }}
                    />
               </div>
          </>
     );
};

export { TypingTitle };

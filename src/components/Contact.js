import React from "react";
// imports
import { contact } from "../data";

const Contact = () => {
     return (
          <section className=" bg-black section md:mt-[0px]" id="contact">
               <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center">
                         <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
                              Contact me
                         </h2>
                         <p className="subtitle">
                              Let's make something amazing together.Starts by
                              saying hi!
                         </p>
                    </div>
                    <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                         <div className="flex flex-1 flex-col md:flex-row md:flex-wrap lg:flex-col lg:items-start lg:space-y-8 mb-12 lg:mb-0 lg:pt-2">
                              {contact.map((item, index) => {
                                   const {
                                        icon,
                                        title,
                                        subtitle,
                                        description,
                                        href,
                                   } = item;
                                   return (
                                        <div
                                             className="flex flex-col  md:flex-row md:px-3 gap-x-4 md:mt-10 lg:mt-5"
                                             key={index}
                                        >
                                             <div className="text-accent rounded-sm w-14 h-6 md:h-12 lg:h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                                  <a
                                                       href={href}
                                                       target="_blank"
                                                  >
                                                       {icon}
                                                  </a>
                                             </div>

                                             <div>
                                                  <a
                                                       href={href}
                                                       target="_blank"
                                                  >
                                                       <h4 className="font-body text-xl mb-1">
                                                            {title}
                                                       </h4>
                                                  </a>
                                                  <p className="mb-1 text-paragraph">
                                                       {subtitle}
                                                  </p>
                                                  <a>
                                                       <p className="text-accent font-normal ">
                                                            {description}
                                                       </p>
                                                  </a>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                         <form
                              method="POST"
                              action="https://getform.io/f/5504b954-fdf8-4489-b0af-e9201a2313b3"
                              className="flex flex-col max-w-[600px] w-full m-auto"
                         >
                              <input
                                   className="bg-[#fffff] p-2 text-black"
                                   type="text"
                                   placeholder="Name"
                                   name="name"
                                   required
                              />
                              <input
                                   className="my-4 p-2 bg-[#fffff] text-black"
                                   type="email"
                                   placeholder="Email"
                                   name="email"
                                   required
                              />
                              <textarea
                                   className="bg-[#fffff] p-2 text-black"
                                   name="message"
                                   rows="10"
                                   placeholder="Message"
                                   required
                              ></textarea>
                              <button className="text-white border-2 hover:hover:bg-accent  px-4 py-3 my-8 mx-auto flex items-center">
                                   Let's Colaborate
                              </button>
                         </form>
                    </div>
               </div>
               <h1
                    style={{
                         textAlign: "center",
                         marginTop: "50px",
                         color: "#FA8B00",
                    }}
               >
                    <a href="https://www.youtube.com/watch?v=mfpEn52dD5k">
                         Inspired by@ Cristian Mihai
                    </a>
               </h1>
          </section>
     );
};

export default Contact;

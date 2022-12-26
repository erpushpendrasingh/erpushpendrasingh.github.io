
import React from "react";

const Project = ({ item }) => {
     return (
          <div
               key={item.id}
               className="flex flex-col items-center text-center "
          >
               <div className="mb-8 hover:shadow-2xl">
                    <img className="rounded-2xl" src={item.image} alt="" />
               </div>
               <div style={{ display: "flex", gap: "1rem" }}>
                    <a href={item.code} target="_blank" rel="noreferrer">
                         <button
                              className="hover:bg-black"
                              style={{
                                   border: "1px solid grey",
                                   padding: ".25rem",
                                   fontSize: "20px",
                              }}
                         >
                              Code
                         </button>
                    </a>
                    <a href={item.demo} target="_blank" rel="noreferrer">
                         {" "}
                         <button
                              style={{
                                   border: "1px solid grey",
                                   padding: ".25rem",
                                   fontSize: "20px",
                              }}
                         >
                              Demo
                         </button>{" "}
                    </a>
               </div>

               <p className="capitalize text-accent text-sm mb-3">
                    {item.category}
               </p>
               <h3 className="text-2xl font-semibold capitalize mb-3">
                    {item.name}
               </h3>
               <p className="text-base max-w-md">{item.description}</p>
               <p className="capitalize text-accent text-sm mb-3">
                    {" "}
                    {item.TechStack}
               </p>
          </div>
     );
};

export default Project;

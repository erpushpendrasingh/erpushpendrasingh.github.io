import React from "react";
const Stats = () => {
  return (
    // streak

    <div className="bg-black  flex flex-col items-center">
      <div style={{ width: "40%", margin: "10px auto" }}>
        <a href="https://github.com/erpushpendrasingh">
          <img
            width={"100%"}
            height={"100%"}
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=erpushpendrasingh&theme=dark"
          />
        </a>
      </div>

      <div
        style={{
          width: "60%",
          height: "200px",
          display: "flex",
          justifyContent: "space-around",
          margin: "50px auto",
        }}
        className="flex flex-col items-center m-4 md:flex-row md:justify-space"
      >
        <a href="https://github.com/erpushpendrasingh">
          <img
            className="m-2"
            width={"100%"}
            height={"100%"}
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=erpushpendrasingh&theme=dark" //launguages
          />
        </a>
        <a href="https://github.com/erpushpendrasingh">
          <img
            className="m-2"
            width={"100%"}
            height={"100%"}
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=erpushpendrasingh&show_icons=true&locale=en&theme=dark" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;

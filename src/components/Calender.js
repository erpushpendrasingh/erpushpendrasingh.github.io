import React from "react";
import GitHubCalendar from "react-github-calendar";
const Calender = () => {
     const selectLastHalfyear = (contributions) => {
          const currentYear = new Date().getFullYear();
          const currentMonth = new Date().getMonth();

          const showmonth = 10;
          return contributions.filter((day) => {
               const date = new Date(day.date);
               const monthOfDay = date.getMonth();

               return (
                    date.getFullYear() === currentYear &&
                    monthOfDay > currentMonth - showmonth &&
                    monthOfDay <= currentMonth
               );
          });
     };
     return (
          <div className="bg-black py-10 w-full font-normal">
               <GitHubCalendar
                    style={{
                         margin: "auto",
                         backgroundColor: "black",
                    }}
                    username="erpushpendrasingh"
                    // transformData={selectLastHalfyear}
                    blockSize={14}
               ></GitHubCalendar>
          </div>
     );
};

export default Calender;

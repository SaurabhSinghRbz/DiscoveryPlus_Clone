import React from "react";
import GitHubCalendar from 'react-github-calendar';




  const Statistics=()=>{
    const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 12;
    
      return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();
    
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
    return(
      <div 
      name="statistics"
      className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
      <div>
      <p className="text-orange-600	 text-4xl font-bold inline border-b-4 border-gray-500">
          Statistics
        </p>
      </div>
      <div className="flex gap-9  justify-center mt-14">
      <p><img align="center" src="https://camo.githubusercontent.com/9b4bd543c9889a9f528ff5207999f099429274d0100732f83bbd357c9d7a4fd9/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7061727430303030372673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="ayeshakhan14" /></p>
      <p><img align="center" src="https://camo.githubusercontent.com/70667fecae4ebe41d6c03322cd31d7c5d03b1915ac442d79e122ce2712a82c2f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7061727430303030372673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="ayeshakhan14" /></p>
      </div>
      <div className="flex justify-center items-center  mt-16 text-6xl font-medium">
        <GitHubCalendar 
     username="PART00007" 
  // transformData={selectLastHalfYear} 
     year={"last"}
     color={"orange"}
     fontSize={20}
 
/>
      </div>

      <div style={{marginTop:"60px"}}>
          <img className="flex justify-center items-center " alt="Ayesha Khan's Activity Graph" src="https://camo.githubusercontent.com/e7fdbb08306690c81702942813ec234c796337cde0b8696fc08ede5d91e32de9/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d70617274303030303726" />
        </div>
     </div>
    )

  }

export default Statistics;
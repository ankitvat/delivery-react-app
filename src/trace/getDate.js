import React, { useState } from "react";
import DatePicker , {subDays} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./getdate.scss";

export default function GetDate( {startDate ,setStartDate ,setIsA2 ,isA2}) {
  

  
  return (
    <div className="datepicker">
      <DatePicker
        className="box"
        selected={startDate}
        dateFormat="MMMM d, yyyy"
      
        onChange={(date) => setStartDate(date)}
      />
      <div className="tabs">
        <button
          className= {`a2 ${isA2 ? "primary" : ""}`}
          
          onClick={() => setIsA2(true)}
          name="A2"
          
        >
          A2
        </button>
        <button
          className={`Mix ${!isA2 ? "primary" : "" }`}
         
          onClick={() => setIsA2(false)}
          name="Mix"
        >
          Mix
        </button>
      </div>
    </div>
  );
}

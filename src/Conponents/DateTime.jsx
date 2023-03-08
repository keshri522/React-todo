import React, { useEffect, useState } from "react";
import "../App.css";





const DateTime = () => {
 
  let [date,Setdate]=useState(new Date().toLocaleTimeString())


  useEffect(()=>{
    let clear= setInterval(()=>{
        Setdate(new Date().toLocaleTimeString());
    },1000);
    return (()=>{
        clearInterval(clear);
    })
  } ,[])
    return (
        <div>
        <h5 >{date}</h5>
           
        </div>
    );
};

export default DateTime;
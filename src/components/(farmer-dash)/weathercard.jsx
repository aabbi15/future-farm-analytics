"use client"

import { getCurrentDate } from "../../helpers/getdate";
import React, { useState, useEffect } from "react";
// import LocationOnIcon from "@mui/icons-material/LocationOn";






function Current({ data }) {

   
  console.log("data" ,data);
    
  const weatherIcon = data.current ? data.current.condition.icon : null;
  const currentDate = getCurrentDate();
  
  return (
    
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
      <div className="flex items-center">
        <div className="">
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img className="w-[50px] object-cover" src={weatherIcon} alt="Weather Icon" />
          </div>
        )}
      </div>
      <div>
        {data.current ? (
          <p className="text-5xl text-white">
            {data.current.temp_f.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? <span className="text-white">{data.current.condition.text}</span> : null}
      </div>
      <div>
        {data.loc ? (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <Image src="/loc-sign.png" alt="avatar" width="21" height="21" />
            <span>
              {data.loc.name}, {data.loc.region}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Current;
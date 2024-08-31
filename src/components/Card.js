import React, { useState } from "react";
import logo from "../logo.svg"

export const CardContainer = ({
  brandName = "Clinic Name",
  address,
  status = "Open",
  slots = {},
  timings = [],
  className = "",
}) => {
  const [activeDay, setActiveDay] = useState(0);
  return (
    <>
      <div className={`card-container border rounded-md shadow-lg ${className}`}>
        <div className="banner bg-[#d7f5ff] flex justify-between items-center pl-1 pr-4 py-4 text-sm font-semibold">
          <span className="flex items-center">
            <span className=""><img src={logo} alt="logo" className="w-8 h-auto" /></span>
            <span>Appointment</span>
          </span>
          <span>₹300 fees</span>
        </div>
        <div className="info text-sm px-3 py-4 flex flex-col gap-0.5 border-b-2 border-gray-200/80">
          <p className="brand font-bold">{brandName}</p>
          <p>{address}</p>
          <p className="text-gray-500">Max. 15 mins wait + Verified Details</p>
          <p className="text-gray-500">
            <span className="text-[#23c723] font-semibold">
              {status}
            </span>{" "}
            ● Updated today
          </p>
        </div>
        <div className="days mt-1 mb-2 flex overflow-x-auto no-scrollbar text-xs border-b">
          {Object.keys(slots).map((day, i) => (
            <div key={i} className="min-w-fit" onClick={() => setActiveDay(i)}>
              <div className="day font-bold flex gap-1 px-5 py-2 cursor-pointer"
              >
                <span className="min-w-fit">{day}</span>
                <span className="text-[#23c723] min-w-fit">
                  {slots[day]} slots
                </span>
              </div>
              <div
                className={`bar w-full h-[3.5px] transition-all ${
                  i === activeDay ? "bg-[#19a0da]" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="timings flex gap-3 px-2 py-2 my-2 overflow-x-auto no-scrollbar text-xs font-semibold text-white">
          {timings[activeDay].map((time, i) => (
            <div key={i} className="min-w-fit px-3 py-2 bg-[#19a0da] rounded-md shadow-md">
              {time}
            </div>
          ))}
        </div>
        <div className="allSlots text-center">
            <button className="text-[#19a0da] mb-4 rounded-md font-semibold hover:scale-105 transition-all">
                View all slots
            </button>
        </div>
      </div>
    </>
  );
};

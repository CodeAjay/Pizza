import React from "react";
import "../../index.css";
import image from "../../assets/photo.png";

function Events() {
  return (
    <>
      <div className="events-main p-9">
        <div className="container">
          <div className="events flex flex-col">
            <h1 className="text-5xl font-bold mb-5">Events</h1>
            <div className="event w-[50%] flex flex-row gap-8 mb-8">
              <img src={image} alt="" className="w-[100%]"/>
              <img src={image} alt="" className="w-[100%]"/>
            </div>
            <div className="event w-[50%] flex flex-row gap-8 mb-8">
              <img src={image} alt="" className="w-[100%]"/>
              <img src={image} alt="" className="w-[100%]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;

import React from 'react'
import "./Home.css";
import insta from "../../assets/insta1.png";

function Insta() {
  return (
    <div className="instafeed py-[80px] px-[30px]">
        <div className="container flex flex-col">
            <div className="title flex flex-col md:flex-row justify-between gap-5">
                <h1 className="text-4xl font-bold heading">Your Instagram Here @yourbrandinsta</h1>
                <button className="rounded-xl instabtn">Insta</button>
            </div>
            <div className="posts flex flex-col md:flex-row gap-5 justify-between pt-9">
                <img src={insta} alt="" className="post" />
                <img src={insta} alt="" className="post" />
                <img src={insta} alt="" className="post" />
                <img src={insta} alt="" className="post" />
            </div>
        </div>        
    </div>
  )
}

export default Insta
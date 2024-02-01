import React from 'react'
import "./Home.css";
import insta from "../../assets/insta1.png";
import team1 from "../../assets/member1.png"

const Member=()=>{
    return(
        <>
        <div className="member text-center">
            <img src={team1} alt="" />
            <h4 className="name">Jhon</h4>
            <h6 className="position">Chef</h6>
            <p className="desc">In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.</p>
        </div>
        </>
    );
}

function Team() {
  return (
    <div className="team p-[80px] bg-[#EEE6D9]">
        <div className="container flex flex-col">
            <div className="title flex flex-row justify-between">
                <h1 className="text-4xl font-bold heading">Our Team</h1>
                <p className="">In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.</p>
            </div>
            <div className="posts flex flex-col md:flex-row gap-4 justify-between pt-8">
                <Member />
                <Member />
                <Member />
                <Member />
            </div>
        </div>        
    </div>
  )
}

export default Team;
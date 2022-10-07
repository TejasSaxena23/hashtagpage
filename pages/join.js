import React from "react";
import Image from "next/image";
import {FaRegArrowAltCircleRight} from "react-icons/fa";

function Join() {
  return (
   <>
   <div className="join">
     <Image  className="puzzle" width={500} height={240} src="/puzzles.svg"></Image>
     <div className="join1">
     <h1 className="text-orange-600 font-bold t1">Join the Team</h1>
     <p className="text-gray-800 font-bold text-xl ml-6 mt-4">We’re always looking for bright and driven individuals to be part of our great team.</p>
     <div className="rounded-lg h-16 w-80 bg-orange-500 cursor-pointer text-white font-semibold send1">
            <p> SEND MESSAGE </p><div className="rounded-lg h-10 w-12 bg-white cursor-pointer hover:rounded-xl arrow1">
            <FaRegArrowAltCircleRight
            icon={FaRegArrowAltCircleRight}
            style ={{width:"30px",height:"20px",color:"gray",marginLeft:"10px"}}
            />
       </div>
       </div>
       </div>
   </div>
   </>
  );
}

export default Join;

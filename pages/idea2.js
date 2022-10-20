import { FaRegArrowAltCircleRight } from "react-icons/fa";
import 'react-phone-number-input/style.css'
import React  from "react"
export default function Example() {
 
  
  return (
    <>
    <div className="bg-whitesmoke ideaboxparallel">
        
        <form>
          
       <br></br> <br></br> <p className="text-gray-600/60 font-bold ml-20">Let's Speak</p>
       <br></br><p className="text-orange-600 font-bold text-50 text-5xl ml-20">Get in touch</p>
       <p className="text-orange-600 font-bold text-50 text-xl ml-20 iou">NAME</p>
        <input type="text" placeholder="Enter your Full Name"  class="
        form-control
        block
        w-96
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        ml-20
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "></input>
      <p className="text-orange-600 font-bold text-50 text-xl ml-20 iou3">EMAIL</p>
          <input  type="text"placeholder="Enter Email" class="
        form-control
        block
        w-96
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        iou2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "></input>
      <p className="text-orange-600 font-bold text-50 text-xl ml-20 mt-10">MESSAGE</p>
          <textarea placeholder="Leave Your Message Here" class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        ml-20
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "></textarea>
        </form>
        <div className="rounded-lg h-16 w-80 bg-orange-500 cursor-pointer text-white font-semibold sendparallel">
            <p>SEND MESSAGE</p> <div className="rounded-lg h-10 ml-60 w-12 bg-white cursor-pointer hover:rounded-xl arrow">
            <FaRegArrowAltCircleRight
            icon={FaRegArrowAltCircleRight}
            style ={{width:"30px",height:"20px",color:"gray",marginLeft:"10px"}}
            />
            </div>
        </div>
    </div>
    </>
  );
}
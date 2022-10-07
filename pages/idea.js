import { FaRegArrowAltCircleRight } from "react-icons/fa";
import PhoneInput from "react-phone-number-input"
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import React ,{useState} from "react"
export default function Example() {
 
  const[value,setValue] = useState()
  return (
    <>
    <div className="bg-gray-200/20 ideabox">
        
        <form>
          
       <br></br> <br></br> <p className="text-gray-600/60 font-bold ml-20">TELL US ABOUT YOUR BIG IDEAS AND WE'LL TELL YOU HOW WE CAN HELP</p>
       <br></br><p className="text-orange-600 font-bold text-50 text-5xl ml-20">Have an idea? Lets discuss</p>
       <p className="text-orange-600 font-bold text-50 text-xl ml-20 iou">FIRST NAME</p>
        <input type="text" placeholder="First Name"  class="
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
      <p className="text-orange-600 font-bold text-50 text-xl ml-20 iou3">SECOND NAME</p>
          <input  type="text"placeholder="Second Name" class="
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
        <p className="text-orange-600 font-bold text-50 text-xl ml-20 iou4">ENTER EMAIL</p>
          <input type="email" placeholder="Enter your Email" class="
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
      <p className="text-orange-600 font-bold text-50 text-xl ml-20 iou5">MOBILE NUMBER</p>
      <PhoneInput 
      defaultCountry="US"
      value={value}
      onChange={setValue} 
      className="flags form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      flags={flags} />
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
        <div className="rounded-lg h-16 w-80 bg-orange-500 cursor-pointer text-white font-semibold send">
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

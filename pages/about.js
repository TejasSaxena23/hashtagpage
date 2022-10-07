import React,{useState} from "react";
// import Image from "next/image";
import Map from "../component/Map"
import Map1 from "../component1/Map1"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt ,faPhoneVolume , faEnvelope,} from "@fortawesome/free-solid-svg-icons"
import {faFacebookSquare, faInstagramSquare, faLinkedin,} from "@fortawesome/free-brands-svg-icons"
function About() {
  const[active,setActive] = useState(true)
  const handleclick = ()=>{
    setActive(!active);
  }
  return (
   <>
   <div className="map">
     <p className={'p1 text-orange-500' + (active?"":"p1")}>Sunnyvale</p>
     <button onClick={handleclick}  className={'w-64 border-solid border-2 border-orange-400'  + (active ? "":"border-gray-400")}></button>
     <p className={'span' + (active? "":"text-orange-500 span")}>Kochi</p>
     <button onClick={handleclick} className={'w-64 border-solid border-2 border-gray span1'  + (active ? "":"border-2 border-orange-400 span1")}></button>
     <div className="info">
      <FontAwesomeIcon
       icon = {faMapMarkerAlt}
       style = {{fontSize:20, color:"orange",marginLeft:"10px",marginTop:"30px"}}
      /> {active?<p className="text-orange-500 ml-10 font-bold">SUNNYVALE</p>:<p className="text-orange-500 ml-10 font-bold">Kochi</p> }<br></br>{active? <p className="address">100 S. Murphy Ave. Suite 200 <br/>
      Sunnyvale, CA 94086 <br/>
      USA</p>:<p className="address">Infopark Technology Business Center <br></br>JNI Stadium,

 <br/>
 Kaloor, <br/>
      Kerala, India</p>}
      <FontAwesomeIcon
      icon={faPhoneVolume}
      style = {{fontSize:15, color:"orange",marginLeft:"10px",marginTop:"30px" , rotate:"-45deg"}}
      /><p className="text-orange-500 ml-10 font-bold">PHONE</p> <br></br> {active? <p className="text-gray-600 hover:tracking-wide font-bold text-xs cursor-pointer hover:text-orange-500 a1">+1 408 596 2525</p>:<p className="text-gray-600 hover:tracking-wide font-bold text-xs cursor-pointer hover:text-orange-500 a1">+91 9207749168</p>}
      <FontAwesomeIcon
      icon={faEnvelope}
      style={{fontSize:15, color:"orange",marginLeft:"10px",marginTop:"30px"}}
      /> <p className="text-orange-500 ml-10 font-bold">EMAIL</p><br></br> {active? <p className="text-gray-600 font-bold text-xs cursor-pointer hover:text-orange-500 a2">info@hashtag-ca.com</p>: <p className="text-gray-600 font-bold text-xs cursor-pointer hover:text-orange-500 a6">info.kochi@hashtag-ca.com</p>}
      <span className="text-orange-500 ml-3 font-bold a3">FOLLOW US</span>
      <FontAwesomeIcon
       icon={faLinkedin}
       className = "hover:rotate-45"
       style={{fontSize:25, color:"gray",marginLeft:"10px",marginTop:"30px", cursor:"pointer"}}/>
       <FontAwesomeIcon
       className = "hover:rotate-45"
       icon={faFacebookSquare}
       style={{fontSize:25, color:"gray",marginLeft:"10px",marginTop:"30px",cursor:"pointer"}}
      />
      <FontAwesomeIcon
       icon={faInstagramSquare}
       className = "hover:rotate-45"
       style={{fontSize:25, color:"gray",marginLeft:"10px",marginTop:"30px" , cursor:"pointer"}}
      />
       {active?<Map/>:<Map1/>}
     </div>
     </div>
   </>
  );
}

export default About;

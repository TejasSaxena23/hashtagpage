import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {faMapMarkerAlt,faPhoneVolume,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-gray-800 h-1/2 flex md:flex-row flex-col justify-around items-start p-20 foot">
      
        <div className="p-5">
          <ul>
           <Image width={140} height={60} src="/hashtag-footer-logo.svg"></Image>
            <div className="flex gap-6 pb-5">
              <p className="text-gray-600 w-80">Hashtag Systems Inc, an international Software development and outsourcing company with its headquarters in Sunnyvale, California and development centers in California & Kochi.</p>
              <FaInstagram className="text-2xl cursor-pointer mt-40  mr-10 text-white in1" />
              <FaLinkedin className="text-2xl cursor-pointer mt-40  mr-10 text-white in1" />
              <FaFacebook className="text-2xl cursor-pointer mt-40  text-white in1"/>
              <div className="mt-60 inline-flex com">
              <Image width={130} height={100} src="/top-web-development-companies.png"></Image>
              <Image width={130} height={100} src="/clutch-white-min.png"></Image>
              </div>
            </div>
          </ul>
        </div>
        <div className="p-5 ml-40">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Menu</p>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Home
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              About US
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Service
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Blog
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Shopify
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Contact
            </li>
            
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Services</p>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              DB & Backend Development
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Blockchain Development
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Design & Prototyping
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              UI Development
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              CMS-WordPress
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Shopify Experts
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Filmmaker Pro Development
            </li>
          </ul>
        </div>
        <div className="p-5">
        <FontAwesomeIcon
       icon = {faMapMarkerAlt}
       style = {{fontSize:20, color:"orange",marginLeft:"10px",marginTop:"30px"}}
      /><p className="address1">100 S. Murphy Ave. Suite 200 <br/>
      Sunnyvale, CA 94086 <br/>
      USA</p>
      <FontAwesomeIcon
      icon={faPhoneVolume}
      style = {{fontSize:15, color:"orange",marginLeft:"10px",marginTop:"30px" , rotate:"-45deg"}}
      /><p className="text-white hover:tracking-wide font-bold text-xs cursor-pointer hover:text-orange-500 a5">+1 408 596 2525</p>
      <FontAwesomeIcon
      icon={faEnvelope}
      style={{fontSize:15, color:"orange",marginLeft:"10px",marginTop:"30px"}}
      /><p className="text-white font-bold text-xs cursor-pointer hover:text-orange-500 a4">info@hashtag-ca.com</p><br></br>
      <button className="bg-white-500 text-white rounded-lg btn3">EN</button>
      <button className="bg-orange-500 text-white rounded-lg btn4">LET'S SPEAK</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center foot1 p-5 bg-black">
        <h1 className="text-sm text-gray-200 font-semibold">
          Copyright © 2021 Hashtag Systems Inc. All Rights Reserved.{" "}
          <span className="hover:text-orange-500  ml-6 font-semibold cursor-pointer">
          Sitemap{" "}
          </span>
        </h1>
        
      </div>
    </>
  );
}

export default Footer;

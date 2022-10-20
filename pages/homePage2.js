import React from "react";
import Image from "next/image";

import { FaRegArrowAltCircleRight ,FaArrowAltCircleRight } from "react-icons/fa";
function HomePage() {
  return (
    <>
     <br></br> <br></br><br></br><br></br><p className="text-gray-600/60 font-bold ml-20">A Full stack development company</p>
     <br></br><p className="text-orange-600 font-bold text-50 text-7xl ml-20">Solutions on</p>
     <br></br><p className="text-gray-800 font-bold text-50 text-7xl ml-20">Web, Mobile & Cloud</p>
     <ul className="flex">
        <li className="ml-20 mt-10 text-orange-600 font-bold"># Full Stack Development</li>
        <li className="pr-3 pl-3 mt-10 text-orange-600 font-bold"># Blockchain Development</li>
        <li className="mt-10 text-orange-600 font-bold"># File Maker Development</li>
     </ul>
     <div className="rounded-lg h-16 w-80 bg-white cursor-pointer text-gray-600 font-semibold send2">
            <p>LEARN MORE</p> <div className="rounded-lg h-10 ml-60 w-12 bg-orange-500 cursor-pointer hover:rounded-xl arrow">
            <FaRegArrowAltCircleRight
            icon={FaRegArrowAltCircleRight}
            style ={{width:"30px",height:"20px",color:"white",marginLeft:"10px"}}
            />
            </div>
        </div>
        <div >
        <div className="w-18 pl-80 pt-60 pic1"><p className="text-gray-600/60 text-sm font-bold ml-20">SHORTLY ABOUT US</p>
        <p className="text-orange-600 font-bold text-50 text-7xl ml-20">Who <br/>we are</p>
        <div className="border-solid border-2 border-orange-600 line"></div>
        </div>
        <div className="para"><p className="font-bold text-xl text-gray-600">Hashtag Systems Inc, an international Software development and outsourcing company with its headquarters in Sunnyvale, California and development centers in California & Kochi</p>
        <p className="mt-10 text-gray-600">Our team is set to chase innovation in every stride and revolutionize the world of software in order to deliver the best to our clients worldwide.
We deliver custom software development projects geared to surpass the expectations of our clients. Lets create responsive applications that adapt to your customers’ habits</p></div>
       <div className="rounded-lg h-16 w-80 bg-white cursor-pointer text-gray-600 font-semibold send3">
            <p>READ MORE</p> <div className="rounded-lg h-8 ml-40 w-8 bg-orange-500 cursor-pointer hover:rounded-xl arrow">
            <FaArrowAltCircleRight
            icon={FaArrowAltCircleRight}
            style ={{width:"25px",height:"20px",color:"white",marginLeft:"5px"}}
            />
            </div>
        </div>
       <div className="pic"> <Image src="/section-2-bg.webp" className="pic2" width={440} height={1120}></Image> </div>
        </div>
        <div className="bg-gray-200/10">
        <p className="text-orange-600 font-bold text-50 text-6xl line2">What we do</p>
        <div className="border-solid border-2 border-orange-600 line1"></div>
        <p className="font-bold text-xl text-gray-600 mt-5 ml-80">We work with the businesses of all sizes in a wide range of industries and niches.</p>
        <div className="container-grid">
            <div className="grid1">
                <div style={{marginTop:"30px"}}>
                <Image src="/business-process-automation.svg" width={100} height={44} ></Image>
                </div>
                <p className="text-orange-600 font-bold text-50 ml-10 text-4xl">Business process automation</p>
        <div className="border-solid border-2 border-orange-600 line3"></div>
        <p className="mt-5 pl-5 pr-5 text-xl text-gray-600">We'll automate your business processes means that you will no longer have to deal with them. You just let the software take care of it.</p>
            </div>
            <div className="grid2">
                <div style={{marginTop:"30px"}}>
                <Image src="/web-application.svg" width={100} height={44} ></Image>
                </div>
                <p className="text-orange-600 font-bold text-50 ml-10 text-4xl">Web applications</p>
        <div className="border-solid border-2 border-orange-600 line3"></div>
        <p className="mt-5 pl-5 pr-5 text-xl text-gray-600">We'll create and deploy mission-critical, Robust Web apps that scale with your business needs.</p>
            </div>
            <div className="grid3">
                <div style={{marginTop:"30px"}}>
                <Image src="/e-commerce.svg" width={100} height={44} ></Image>
                </div>
                <p className="text-orange-600 font-bold text-50 ml-10 text-4xl">E-commerce</p>
        <div className="border-solid border-2 border-orange-600 line3"></div>
        <p className="mt-5 pl-5  text-xl text-gray-600">Turn your products into money by selling them on your own online store. We'll help you become a leading eCommerce player in your industry.</p>
            </div>
            <div className="grid4">
                <div style={{marginTop:"30px"}}>
                <Image src="/Monitoring.svg" width={100} height={44} ></Image>
                </div>
                <p className="text-orange-600 font-bold text-50 ml-10 text-4xl">Monitoring & support</p>
        <div className="border-solid border-2 border-orange-600 line3"></div>
        <p className="mt-5 pl-5  text-xl text-gray-600">We run a dedicated IT infrastructure monitoring to ensure that applications, devices, and infrastructure are performing as they should be.</p>
            </div>
            <div className="grid5">
                <div style={{marginTop:"30px"}}>
                <Image src="/Creative conceptual.svg" width={100} height={44} ></Image>
                </div>
                <p className="text-orange-600 font-bold text-50 pr-40 pl-10 text-4xl">Creative & conceptual design</p>
        <div className="border-solid border-2 border-orange-600 line3"></div>
        <p className="mt-5 pl-5  text-xl text-gray-600">Our creative designers will turn the spark of an idea into an innovative new design concept. Let's collaborate.</p>
            </div>
        </div>
        </div>
        <div className="bg-gray-200/10 wave-container">
         <div className="grid-wave">
           <div className="grid-wave1"> 
           <div className="w-64 h-40 border-2 bg-white border-solid border-whitesmoke team"><div className="border-1 w-20 h-14 mt-10 border-solid bg-pink-100 team1"><Image src="/team.svg" style={{paddingBottom:"5px" , paddingTop:"5px"}}width={34} height={10}></Image></div>
           <p className="text-gray-600 font-bold text-2xl team2">Dedicated</p>
           <p className="text-gray-600 font-bold text-2xl team3">Teams!</p>
           </div>
           <div className="w-64 h-40 border-2 bg-white border-solid border-whitesmoke team4"><div className="border-1 w-20 h-14 mt-10 border-solid bg-pink-100 team1"><Image src="/equality.svg" style={{paddingBottom:"5px" , paddingTop:"5px"}}width={34} height={10}></Image></div>
           <p className="text-gray-600 font-bold text-2xl team2">Quality in</p>
           <p className="text-gray-600 font-bold text-2xl team3">every stride!</p>
           </div>
           <div className="w-64 h-40 border-2 bg-white border-solid border-whitesmoke team5"><div className="border-1 w-20 h-14 mt-10 border-solid bg-pink-100 team1"><Image src="/chat.svg" style={{paddingBottom:"5px" , paddingTop:"5px"}}width={34} height={10}></Image></div>
           <p className="text-gray-600 font-bold text-2xl team2">Effective</p>
           <p className="text-gray-600 font-bold text-2xl team3">communication!</p>
           </div>
           <div className="w-64 h-40 border-2 bg-white border-solid border-whitesmoke team6"><div className="border-1 w-20 h-14 mt-10 border-solid bg-pink-100 team1"><Image src="/process.svg" style={{paddingBottom:"5px" , paddingTop:"5px"}}width={34} height={10}></Image></div>
           <p className="text-gray-600 font-bold text-2xl team2">Impeccably</p>
           <p className="text-gray-600 font-bold text-2xl team3">process oriented!</p>
           </div>
           <div className="w-64 h-40 border-2 bg-white border-solid border-whitesmoke team7"><div className="border-1 w-20 h-14 mt-10 border-solid bg-pink-100 team1"><Image src="/group.svg" style={{paddingBottom:"5px" , paddingTop:"5px"}}width={34} height={10}></Image></div>
           <p className="text-gray-600 font-bold text-2xl team2">Agile - watch your</p>
           <p className="text-gray-600 font-bold text-2xl team3">dreams grow!</p>
           </div>
           <div className="w-64 h-40 border-2 bg-white border-solid border-whitesmoke team8"><div className="border-1 w-20 h-14 mt-10 border-solid bg-pink-100 team1"><Image src="/support.svg" style={{paddingBottom:"5px" , paddingTop:"5px"}}width={34} height={10}></Image></div>
           <p className="text-gray-600 font-bold text-2xl team2">Constant</p>
           <p className="text-gray-600 font-bold text-2xl team3">support!</p>
           </div>
           <p className="text-white font-bold ml-10 baka">WHY CLIENTS CHOOSE US</p>
           <p className="text-white font-bold text-5xl line4">Why us?</p>
           <p className="text-white font-bold text-2xl line5">We believe our customers deserve the best and quality is something we dare not to compromise!</p>
           <p className="text-white font-bold text-2xl line6">We ensure impeccable service right from the second we receive the demand from our valuable customer.</p>
           <p className="text-white font-bold text-2xl line7">Our maintenance and support team would ensure the same even after we deliver the product.</p>
           </div>
                <Image src="/section-orange-bg2.svg" width={1820} height={1420}></Image>
            </div>    
        </div>
        <div className="bg-gray-200/10 experties-container">
        <p className="text-gray-600/60 text-sm font-bold experties">WE ARE PROFESSIONALS</p>
        <p className="text-orange-600 font-bold text-50 text-5xl experties1">Our Expertise</p>
        <div className="border-solid border-2 border-orange-600 experties2"></div> 
        <div style={{marginLeft:"160px", marginTop:"40px"}}><Image src="/html5.svg"  width={110} height={54}></Image></div>
        <div style={{marginLeft:"400px", marginTop:"-60px"}}><Image src="/mysql.svg"  width={110} height={54}></Image></div>
        <div style={{marginLeft:"600px", marginTop:"-60px"}}><Image src="/amazon.svg"  width={110} height={54}></Image></div>
        <div style={{marginLeft:"800px", marginTop:"-60px"}}><Image src="/shopify.svg"  width={150} height={54}></Image></div>
        <div style={{marginLeft:"1000px", marginTop:"-60px"}}><Image src="/php.svg"  width={150} height={54}></Image></div>
        <div style={{marginLeft:"1000px", marginTop:"50px"}}><Image src="/react-js.svg"  width={140} height={54}></Image></div>
        <div style={{marginLeft:"800px", marginTop:"-50px"}}><Image src="/ethereum.svg"  width={140} height={54}></Image></div>
        <div style={{marginLeft:"600px", marginTop:"-60px"}}><Image src="/angular-js.svg"  width={140} height={54}></Image></div>
        <div style={{marginLeft:"400px", marginTop:"-60px"}}><Image src="/node-js.svg"  width={140} height={54}></Image></div>
        <div style={{marginLeft:"160px", marginTop:"-60px"}}><Image src="/bootstrap.svg"  width={140} height={54}></Image></div>
        <div style={{marginLeft:"1000px", marginTop:"60px"}}><Image src="/python.svg"  width={150} height={54}></Image></div>
        <div style={{marginLeft:"800px", marginTop:"-60px"}}><Image src="/django.svg"  width={150} height={44}></Image></div>
        <div style={{marginLeft:"600px", marginTop:"-60px"}}><Image src="/codeigniter.svg"  width={160} height={54}></Image></div>
        <div style={{marginLeft:"400px", marginTop:"-60px"}}><Image src="/jquery.svg"  width={160} height={54}></Image></div>
        <div style={{marginLeft:"160px", marginTop:"-60px"}}><Image src="/wordpress.svg"  width={160} height={54}></Image></div>
        <div style={{marginLeft:"1000px", marginTop:"60px"}}><Image src="/ionic.svg"  width={170} height={54}></Image></div>
        <div style={{marginLeft:"800px", marginTop:"-60px"}}><Image src="/docker.svg"  width={170} height={54}></Image></div>
        <div style={{marginLeft:"600px", marginTop:"-60px"}}><Image src="/solidity.svg"  width={170} height={54}></Image></div>
        <div style={{marginLeft:"400px", marginTop:"-60px"}}><Image src="/truffle.svg"  width={170} height={54}></Image></div>
        <div style={{marginLeft:"160px", marginTop:"-60px"}}><Image src="/mongodb.svg"  width={170} height={54}></Image></div>
        </div>
    </>
  );
}

export default HomePage;
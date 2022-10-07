import React from "react";
import Image from "next/image";


function HomePage() {
  return (
    <>
      <Image className="wave" width={3880} height={1300} src="/wave.svg"></Image>
      <div className="content">
        <h5>Get in touch we'd love to help</h5>
        <h1>Contact us</h1>
        <div className="child">
          <p>We always love to hear from potential clients. Get in touch, start the conversation, and we'll take it from there.</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;

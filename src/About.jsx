import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Img2 from "./images/img3.jpg";


function About() {
  return (
    <>
   <Common 
   name="Welcome to About Page"
   imgsrc={Img2}
   visit="/contact"
   btnname="Contact Now"
   />
    </>
  );
}

export default About;
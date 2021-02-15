import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Img from "./images/img1.jpg";


function Home() {
  return (
    <>
<Common
 name="Grow your business with"
 imgsrc={Img}
 visit="/service"
 btnname="Get Started"/>
    </>
  );
}

export default Home;
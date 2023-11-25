import Link from "next/link";
import Header from "./components/header/Header";
import Calltoaction from "./components/homePage/calltoaction/Calltoaction";
import Campus from "./components/homePage/campus/Campus";
import Course from "./components/homePage/course/Course";
import Facilites from "./components/homePage/facilities/Facilites";
import Testimonials from "./components/homePage/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <header className="header">
        <Header />
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Link href="contact" className="hero_btn">
            Visit Us To Know More
          </Link>
        </div>
      </header>
      <Course />
      <Campus />
      <Facilites />
      <Testimonials />
      <Calltoaction />
    </>
  );
}

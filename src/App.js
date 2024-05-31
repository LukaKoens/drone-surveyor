import React, { useRef } from "react";
import "./App.css"
import Intro from "./components/intro.js";
import Services from "./components/services.js";
import Inspections from "./components/inspections.js";
import Photogrammetry from "./components/photogrammetry.js";

function App() {
  const parentRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = window.scrollY;
    const pageHeight = window.innerHeight;

    if (event.deltaY > 0) {
      // Scrolling down
      const nextPageTop = Math.ceil(window.scrollY / pageHeight) * pageHeight;
      window.scrollTo({ top: nextPageTop, behavior: "smooth" });
    } else if (event.deltaY < 0) {
      // Scrolling up
      const prevPageTop = Math.floor(window.scrollY / pageHeight) * pageHeight;
      window.scrollTo({ top: prevPageTop, behavior: "smooth" });
    }
  };


  return (
    <div onWheel={handleScroll}>
      <Intro className="container"></Intro>
      <div className="divider"></div>
      <Services className="container"></Services>
      <div className="divider"></div>
      <Inspections className="container"></Inspections>
      <div className="divider"></div>
      <Photogrammetry className="container"></Photogrammetry>
    </div>
  );
}

export default App;

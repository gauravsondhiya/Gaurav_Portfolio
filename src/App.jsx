2;
// eslint-disable-next-line no-unused-vars
import backgroud from "./images/newbg.mp4";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Project from "./Project/Project";
import About from "./About/About"
function App() {
  return (
    <div className="w-full h-full text-white bg-black">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Ensure video is behind other content
        }}
      >
        <source src={backgroud} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Header />
      <Routes>
        {/* <Route> </Route> */}
          <Route path="💀HOME" element={<Main />} />
          <Route path="💀PROJECTS" element={<Project/>} />
          <Route path="💀ABOUT" element={<About/>} />
          {/* <Route path="💀RESUME" element={<💀RESUME/>} />
          <Route path="💀CONTACT" element={<💀CONTACT/>} /> */}
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

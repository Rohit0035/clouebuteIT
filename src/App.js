import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import UxService from "./pages/service/UxService";
import WebServices from "./pages/service/WebServices";
import AppServices from "./pages/service/AppServices";
import CyberService from "./pages/service/CyberService";
import DigitalService from "./pages/service/DigitalService";
import SolutionsServices from "./pages/service/SolutionsServices";
import CareerAreaOne from "./components/CareerAreaOne";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeFour />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />

        {/* services */}
        <Route exact path='/ux-service' element={<UxService />} />
        <Route exact path='/web-service' element={<WebServices />} />
        <Route exact path='/app-service' element={<AppServices />} />
        <Route exact path='/cyber-service' element={<CyberService />} />
        <Route exact path='/digita-service' element={<DigitalService />} />
        <Route exact path='/solution-service' element={<SolutionsServices />} />
        <Route exact path='/career' element={<CareerAreaOne />} />
        <Route exact path='/our-client' element={<UxService />} />

      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;

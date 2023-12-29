import { Routes,Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Event from "./routes/event/event.component";
import Schedule from "./routes/schedule/schedule.component";
import Sponsors from "./routes/sponsors/sponsors.component";
import Gallery from "./routes/gallery/gallery.component";
import OurTeam from "./routes/ourTeam/ourTeam.component";
import ContactUs from "./routes/contactUs/contactUs.component";
import AboutUs from "./routes/aboutUs/aboutUs.component";
import Navigation from "./routes/navigation/navigation.component";
import Merchandise from "./routes/merchandise/merchandise.component";
import WebDTeam from "./routes/WebDTeam/WebDTeam";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='event' element={<Event/>} />
        <Route path='schedule' element={<Schedule/>} />
        <Route path='sponsors' element={<Sponsors/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='ourTeam' element={<OurTeam/>} />
        <Route path='contactUs' element={<ContactUs/>} />
        <Route path='webDTeam' element={<WebDTeam/>} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='merchandise' element={<Merchandise/>} />
      </Route>
   </Routes>
  );
}

export default App;

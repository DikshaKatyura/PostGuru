
import  Header from "./Header.js";
import Home from "./Home.js"
import Work from "./Work.js"
import About from "./About.js"
import Contact from "./Contact.js"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path = "/" element ={<Home />} />
    <Route path = "Work" element ={<Work />} />
    <Route path = "About" element ={<About />} />
    <Route path = "Contact" element ={<Contact />} />
     </Routes>

     </>
  )
}

export default App;

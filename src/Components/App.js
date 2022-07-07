
import  Header from "./Header.jsx";
import Home from "./Home.jsx"
import Work from "./Work.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
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

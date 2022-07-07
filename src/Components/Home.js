import gif from "../Media/money_slide.gif";
import  Header from "./Header.js";
import Footer from "./Footer.js";
const Home = ()=> {

  return (
    <>
    <Header />
    <div className = "logo"> <img src = {gif} alt = {"introductary-short-video"} /> </div>
    <Footer />
    </>

    );
}


export default Home;

import gif from "../Media/money_slide.gif";
import  Header from "./Header.jsx";
import Footer from "./Footer.jsx";
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

import {FaInstagram,FaFacebook,FaYoutube} from "react-icons/fa"

const Footer = ()=> {
  return <>
  <footer className = "footer">
  <div className = "Copyright"> <h5> Copyright © 2022 by <a href = "https://github.com/DikshaKatyura">DikshaKatyura</a> </h5> </div>
  <div className = "social-media">
  <a href = "https://www.instagram.com/post.guru/?hl=en" target = "_blank"><FaInstagram size= {30}/></a>
  <a href = "https://www.youtube.com/channel/UCn4jAocLxXpiTZyEMwatjtA" target = "_blank"> <FaYoutube size= {30} /></a>
  <a href = "https://www.facebook.com/postguru19" target = "_blank"> <FaFacebook size= {30} /></a>
   </div>
   </footer>
  </>
}

export default Footer;

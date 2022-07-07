import Header from "./Header.js";
import Footer from "./Footer.js";
import {
  Stack
} from '@mui/material';
import {
  FiMail
} from "react-icons/fi";


const Contact = () => {
  return < >
    <
    Header / >
    <
    div >
    <
    h1 > For business inquiries, projects proposals, or any other opportunities please contact < br / >
    <
    span > < a href = "mailto:ipostguru@gmail.com" > < FiMail size = {
      60
    }
  />POSTGURU</a > < /span> <
  /h1> <br/ >

  <
  Stack direction = "row"
  spacing = {
      2
    } >
    <
    h3 > < a href = "https://www.instagram.com/post.guru/?hl=en"
  target = "_blank" > Instagram < /a></h3 >
    <
    h3 > < a href = "https://www.youtube.com/channel/UCn4jAocLxXpiTZyEMwatjtA"
  target = "_blank" > Youtube < /a></h3 >
    <
    h3 > < a href = "https://www.facebook.com/postguru19"
  target = "_blank" > Facebook < /a></h3 >
    <
    h3 > < a href = "https://mobile.twitter.com/postguru19"
  target = "_blank" > Twitter < /a></h3 >
    <
    h3 > < a href = "https://www.behance.net/postguruco"
  target = "_blank" > Behance < /a></h3 >
    <
    /Stack> <
    /div>

    <
    Footer / >
    <
    />
}


export default Contact;

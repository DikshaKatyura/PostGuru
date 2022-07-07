import profile from "../Media/profile_picture.jpg";
import description from "../Media/description.js"
import  Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Grid} from "@mui/material";

const about = description;
const About = ()=> {
  return <>
  <Header />
  <Grid
  container
  spacing ={2}
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item >
<img className = "profile-pic" src= {profile} alt= {"profile image"} />
</Grid >
<Grid item xs = {6}>
<div  className = "description">
<p>{about}</p> </div>
</Grid >
</Grid >
  <Footer />
  </>
}


export default About;

import {
  useState
} from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Videos from "./Videos.js"
import data from "../data.js";
import {
  Grid
} from '@mui/material';


const Work = () => {

  const [item, setItem] = useState(data);


  const filterItems = (category) => {
    const filteredItmes = data.filter((e) => {
      return e.category === category;
    });
    setItem(filteredItmes);
  }



  return < >
    <
    Header / >
    <
    div className = "filter-buttons" >
    <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => setItem(data)
    } > All < /button> <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('volkswagonVirtus')
    } > Volkswagon Virtus < /button> <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('volkswagonDigital')
    } > VolksWagon Digital Assets < /button> <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('volkswagonAd')
    } > VolksWagon Ad Films < /button> <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('musicVideos')
    } > Music Videos < /button> <
    /div> <
    div className = "filter-buttons" >
    <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('mcWinter')
    } > Monte Carlo(Winter) < /button> <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('mcSummer')
    } > Monte Carlo(Summer) < /button> <
    button type = "button"
  className = "btn btn-outline-dark"
  onClick = {
      () => filterItems('miscllaneous')
    } > Misclleneous < /button>

    <
    /div>

    <
    div className = "row col-11 mx-auto cards" >
    <
    div className = "row" >

    {
      item.reverse().map(ele => {

        const {
          src,
          key
        } = ele;

        return < >
          <
          div className = "col-sm-12 col-md-6 col-lg-3" >
          <
          div className = "video-responsive" >
          <
          Videos src = {
            src
          }
        key = {
          key
        }
        /> <
        /div> <
        /div> <
        />


      })
    }

    <
    /div> <
    /div>

    <
    Footer / >
    <
    />
}


export default Work;

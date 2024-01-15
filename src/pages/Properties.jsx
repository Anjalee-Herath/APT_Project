import React from "react";
import Navbar from '../components/Navbar'
import PropertySearch from '../components/PropertySearch/PropertySearch'
import RecentProperty from "../components/PropertySearch/RecentProperty";
import Achievement from "../components/Achievement/Achievement";
import PopularPlaces from "../components/PopularPlaces/PopularPlaces";

function Properties() {
  return (
    <div>
      <div id="page-wrapper">
        <div className="row">
          {/* <Navbar/> */}
          <PropertySearch/>
          <RecentProperty/>
          <Achievement/>
          <PopularPlaces/>
          {/* Scroll to top */}
          <a
            href="#"
            className="bg-success text-white hover-text-secondary"
            id="scroll"
          >
            <i className="fas fa-angle-up"></i>
          </a>
          {/* End Scroll To top */}
        </div>
      </div>
    </div>
  );
}

export default Properties;

import React, { useState } from 'react'
import "../HomeMain/HomeMain.css"

function HomeMain() {
  return (
    <div className="main-con">
      <img src={"https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=600"} className="w-100" style={{ height: "100vh" }} />
      <div className="text-div">
        <div>
          <h1 className="main-topic-main">Unlock Extraordinary,</h1>
          <h5 className="sub-topic">Property with Exceptional</h5>
          <h5 className="sub-topic">Service</h5>
        </div>
        <div className="btn-div">
          <a className="btn btn-primary" href="/submitProperty">
            Sale Your Property
          </a>
          <a className="btn btn-outline-primary" href="/allproperties">
            Buy Best Property
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeMain

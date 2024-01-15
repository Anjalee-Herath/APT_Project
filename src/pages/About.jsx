import React from "react";
import Agents from "../components/Agents/Agents";

function About() {
  return (
    <div>
      <div id="page-wrapper">
        <div className="row">
          {/* Header start */}
          {/* Include the header content here */}
          {/* Header end */}

          {/* Banner */}
          {/* 
                <div className="banner-full-row page-banner" style={{ backgroundImage: "url('images/breadcromb.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="page-name float-left text-white text-uppercase mt-1 mb-0"><b>About US</b></h2>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb" className="float-left float-md-right">
                                    <ol className="breadcrumb bg-transparent m-0 p-0">
                                        <li className="breadcrumb-item text-white"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                */}
          {/* Banner */}

          {/* FOR MORE PROJECTS visit: codeastro.com */}

          {/* About Our Company */}
          <div className="full-row">
            <div className="container">
              <div key="" className="row">
                <div className="col-md-12 col-lg-12">
                  <h3 className="double-down-line-left text-secondary position-relative pb-4 mb-4">
                    About Us
                  </h3>
                </div>
              </div>
              <div className="row about-company">
                <div className="col-md-12 col-lg-7">
                  <div className="about-content">aaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
                <div className="col-md-12 col-lg-5 mt-5">
                  <div className="about-img">
                    <img
                      src={`https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      alt="about image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Our Company */}

          {/* Why Choose Us */}
          <div
            className="full-row living bg-one overlay-secondary-half"
            style={{
              backgroundImage: "url('assets/images/01.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="living-list pr-4">
                    <h3 className="pb-4 mb-3 text-white">Why Choose Us</h3>
                    <ul>
                      <li className="mb-4 text-white d-flex">
                        <i
                          className="flaticon-reward flat-medium float-left d-table mr-4 text-success"
                          aria-hidden="true"
                        ></i>
                        <div className="pl-2">
                          <h5 className="mb-3">Top Rated</h5>
                          <p>
                            This is a dummy text for filling out spaces. This is
                            just a dummy text for filling out blank spaces.
                          </p>
                        </div>
                      </li>
                      <li className="mb-4 text-white d-flex">
                        <i
                          className="flaticon-real-estate flat-medium float-left d-table mr-4 text-success"
                          aria-hidden="true"
                        ></i>
                        <div className="pl-2">
                          <h5 className="mb-3">Experience Quality</h5>
                          <p>
                            This is a dummy text for filling out spaces. This is
                            just a dummy text for filling out blank spaces.
                          </p>
                        </div>
                      </li>
                      <li className="mb-4 text-white d-flex">
                        <i
                          className="flaticon-seller flat-medium float-left d-table mr-4 text-success"
                          aria-hidden="true"
                        ></i>
                        <div className="pl-2">
                          <h5 className="mb-3">Experienced Agents</h5>
                          <p>
                            This is a dummy text for filling out spaces. This is
                            just a dummy text for filling out blank spaces.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Why Choose Us */}

          {/* Header One */}
          {/* Header start */}
          {/* Include the header content here */}
          {/* Header end */}

          {/* Banner */}
          {/*
                <div className="banner-full-row page-banner" style={{ backgroundImage: "url('images/breadcromb.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="page-name float-left text-white text-uppercase mt-1 mb-0"><b>Agent</b></h2>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb" className="float-left float-md-right">
                                    <ol className="breadcrumb bg-transparent m-0 p-0">
                                        <li className="breadcrumb-item text-white"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Agent</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                */}
          {/* Banner */}

          <Agents/>

          <div className="full-row">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-secondary double-down-line text-center mb-5">
                    How It Work
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="icon-thumb-one text-center mb-5">
                    <div className="bg-success text-white rounded-circle position-absolute z-index-9">
                      1
                    </div>
                    <div className="left-arrow">
                      <i
                        className="flaticon-investor flat-medium icon-success"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h5 className="text-secondary mt-5 mb-4">Discussion</h5>
                    <p>
                      Nascetur cubilia sociosqu aliquet ut elit nascetur nullam
                      duis tincidunt nisl non quisque vestibulum platea ornare
                      ridiculus.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-thumb-one text-center mb-5">
                    <div className="bg-success text-white rounded-circle position-absolute z-index-9">
                      2
                    </div>
                    <div className="left-arrow">
                      <i
                        className="flaticon-search flat-medium icon-success"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h5 className="text-secondary mt-5 mb-4">Files Review</h5>
                    <p>
                      Nascetur cubilia sociosqu aliquet ut elit nascetur nullam
                      duis tincidunt nisl non quisque vestibulum platea ornare
                      ridiculus.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-thumb-one text-center mb-5">
                    <div className="bg-success text-white rounded-circle position-absolute z-index-9">
                      3
                    </div>
                    <div>
                      <i
                        className="flaticon-handshake flat-medium icon-success"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h5 className="text-secondary mt-5 mb-4">Acquire</h5>
                    <p>
                      Nascetur cubilia sociosqu aliquet ut elit nascetur nullam
                      duis tincidunt nisl non quisque vestibulum platea ornare
                      ridiculus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer start */}
          {/* Include the footer content here */}
          {/* Footer start */}

          {/* Scroll to top */}
          <a
            href="#"
            className="bg-secondary text-white hover-text-secondary"
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

export default About;

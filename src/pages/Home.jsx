import React, { useState } from 'react'
import HomeMain from '../components/HomeMain/HomeMain'
import HomeSec from '../components/HomeSec/HomeSec'

function Home() {
  return (
    <div>
      <HomeMain/>
      <div className="full-row bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-secondary double-down-line text-center mb-5">
                    What We Do
                  </h2>
                </div>
              </div>
              <div className="text-box-one">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-rent text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Selling Service</a>
                      </h5>
                      <p>
                        This is a dummy text for filling out spaces. Just some
                        random words...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-for-rent text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Rental Service</a>
                      </h5>
                      <p>
                        This is a dummy text for filling out spaces. Just some
                        random words...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-list text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Property Listing</a>
                      </h5>
                      <p>
                        This is a dummy text for filling out spaces. Just some
                        random words...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="p-4 text-center hover-bg-white hover-shadow rounded mb-4 transation-3s">
                      <i
                        className="flaticon-diagram text-success flat-medium"
                        aria-hidden="true"
                      ></i>
                      <h5 className="text-secondary hover-text-success py-3 m-0">
                        <a href="#">Legal Investment</a>
                      </h5>
                      <p>
                        This is a dummy text for filling out spaces. Just some
                        random words...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HomeSec/>

    {/* Testimonial */}
    <div className="full-row">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content-sidebar p-4">
                    <div className="mb-3 col-lg-12">
                      <h4 className="double-down-line-left text-secondary position-relative pb-4 mb-4">
                        Feedback
                      </h4>
                      <div className="recent-review owl-carousel owl-dots-gray owl-dots-hover-success">
                        <div className="item">
                          <div className="p-4 bg-success down-angle-white position-relative">
                            <p className="text-white">
                              <i className="fas fa-quote-left mr-2 text-white"></i>
                              quote fffffffff.{" "}
                              <i className="fas fa-quote-right mr-2 text-white"></i>
                            </p>
                          </div>
                          <div className="p-2 mt-4">
                            <span className="text-success d-table text-capitalize">
                              user
                            </span>{" "}
                            <span className="text-capitalize">user type</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="p-4 bg-success down-angle-white position-relative">
                            <p className="text-white">
                              <i className="fas fa-quote-left mr-2 text-white"></i>
                              quote fffffffff.{" "}
                              <i className="fas fa-quote-right mr-2 text-white"></i>
                            </p>
                          </div>
                          <div className="p-2 mt-4">
                            <span className="text-success d-table text-capitalize">
                              user
                            </span>{" "}
                            <span className="text-capitalize">user type</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial */}

    </div>
  )
}

export default Home

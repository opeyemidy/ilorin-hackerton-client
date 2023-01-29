import React from "react";
import "./ChooseUs.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const ChooseUs = () => {
  return (
    <div className="feat pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>
            We are your reliable and experienced textile partner around the world
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_one"></span>
              <h6>One Stop Solution</h6>
              <p>
                We provide a range of products and services so that you don't
                have to go different places
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_two">
                <i className="fa fa-anchor" />
              </span>
              <h6>Production Capability</h6>
              <p>We could manufacture from small to large quantity</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_three">
                <i className="fa fa-hourglass-half" />
              </span>
              <h6>24 x 7 User Support</h6>
              <p>
                If our customer has any problem and any query we are always
                happy to help then.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_four">
                <i className="fa fa-database" />
              </span>
              <h6>High Quality Product</h6>
              <p>
                With more than 8 years of experiences producing garments for
                local and international market, we always try to consistently
                deliver the best quality for our customers
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_two">
                <i className="fa fa-anchor" />
              </span>
              <h6>Competitive Price</h6>
              <p>
                Producing premium quality garments at an affordable and
                reasonable price is one of our main goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

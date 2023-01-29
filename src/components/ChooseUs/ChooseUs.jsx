import React from 'react';
import styled from 'styled-components';
import './ChooseUs.scss';

const StyledChooseUs = styled.div`
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
  $color_1: #333;
  $color_2: inherit;
  $color_3: #5949ce;
  $color_4: #2f2f2f;
  $color_5: #cccccc;
  $color_6: #818181;
  $color_7: #fff;
  $color_8: #666;
  overflow-x: hidden;
  a {
    text-decoration: none;
    outline: none;
    color: $color_1;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    -ms-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    display: inline-block;
    text-decoration: none;
    color: $color_2;
    &:hover {
      text-decoration: none;
      outline: none;
      display: inline-block;
      text-decoration: none;
      color: $color_2;
    }
    &:focus {
      text-decoration: none;
      outline: none;
      color: $color_1;
      text-decoration: none;
      transition-timing-function: ease-in-out;
      -ms-transition-timing-function: ease-in-out;
      -moz-transition-timing-function: ease-in-out;
      -webkit-transition-timing-function: ease-in-out;
      -o-transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      -ms-transition-duration: 0.2s;
      -moz-transition-duration: 0.2s;
      -webkit-transition-duration: 0.2s;
      -o-transition-duration: 0.2s;
    }
    &:active {
      text-decoration: none;
      outline: none;
      color: $color_1;
      text-decoration: none;
      transition-timing-function: ease-in-out;
      -ms-transition-timing-function: ease-in-out;
      -moz-transition-timing-function: ease-in-out;
      -webkit-transition-timing-function: ease-in-out;
      -o-transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      -ms-transition-duration: 0.2s;
      -moz-transition-duration: 0.2s;
      -webkit-transition-duration: 0.2s;
      -o-transition-duration: 0.2s;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  span {
    display: inline-block;
    text-decoration: none;
    color: $color_2;
  }
  .section-head {
    margin-bottom: 60px;
    h4 {
      position: relative;
      padding: 0;
      color: $color_3;
      line-height: 1;
      letter-spacing: 0.3px;
      font-size: 34px;
      font-weight: 700;
      text-align: center;
      text-transform: none;
      margin-bottom: 30px;
      &:before {
        content: '';
        width: 60px;
        height: 3px;
        background: #5949ce;
        position: absolute;
        left: 0px;
        bottom: -10px;
        right: 0;
        margin: 0 auto;
      }
      span {
        font-weight: 700;
        padding-bottom: 5px;
        color: $color_4;
      }
    }
    p {
      color: $color_6;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  }
  p.service_text {
    color: $color_5 !important;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
  p.awesome_line {
    color: $color_6;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
  .extra-text {
    font-size: 34px;
    font-weight: 700;
    color: $color_4;
    margin-bottom: 25px;
    position: relative;
    text-transform: none;
    &::before {
      content: '';
      width: 60px;
      height: 3px;
      background: #5949ce;
      position: absolute;
      left: 0px;
      bottom: -10px;
      right: 0;
      margin: 0 auto;
    }
    span {
      font-weight: 700;
      color: $color_3;
    }
  }
  .item {
    background: #fff;
    text-align: center;
    padding: 30px 25px;
    -webkit-box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    border: 5px solid rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;
    -webkit-transition: all 0.5s ease 0;
    transition: all 0.5s ease 0;
    transition: all 0.5s ease 0s;
    &:hover {
      background: #5949ce;
      box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.2);
      -webkit-transition: all 0.5s ease 0;
      transition: all 0.5s ease 0;
      transition: all 0.5s ease 0s;
      .item {
        background: #fff;
        border-radius: 10px;
        -webkit-transition: all 0.5s ease 0;
        transition: all 0.5s ease 0;
        transition: all 0.5s ease 0s;
      }
      span.icon {
        background: #fff;
        border-radius: 10px;
        -webkit-transition: all 0.5s ease 0;
        transition: all 0.5s ease 0;
        transition: all 0.5s ease 0s;
      }
      h6 {
        color: $color_7;
        -webkit-transition: all 0.5s ease 0;
        transition: all 0.5s ease 0;
        transition: all 0.5s ease 0s;
      }
      p {
        color: $color_7;
        -webkit-transition: all 0.5s ease 0;
        transition: all 0.5s ease 0;
        transition: all 0.5s ease 0s;
      }
    }
    .icon {
      font-size: 40px;
      margin-bottom: 25px;
      color: $color_3;
      width: 90px;
      height: 90px;
      line-height: 96px;
      border-radius: 50px;
    }
    .feature_box_col_one {
      background: rgba(247, 198, 5, 0.2);
      color: $color_3;
    }
    .feature_box_col_two {
      background: rgba(255, 77, 28, 0.15);
      color: $color_3;
    }
    .feature_box_col_three {
      background: rgba(0, 147, 38, 0.15);
      color: $color_3;
    }
    .feature_box_col_four {
      background: rgba(0, 108, 255, 0.15);
      color: $color_3;
    }
    .feature_box_col_five {
      background: rgba(146, 39, 255, 0.15);
      color: $color_3;
    }
    .feature_box_col_six {
      background: rgba(23, 39, 246, 0.15);
      color: $color_3;
    }
    p {
      font-size: 15px;
      line-height: 26px;
    }
    h6 {
      margin-bottom: 20px;
      color: $color_4;
    }
  }
  .mission {
    p {
      margin-bottom: 10px;
      font-size: 15px;
      line-height: 28px;
      font-weight: 500;
    }
    i {
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #5949ce;
      border-radius: 50%;
      color: $color_7;
      font-size: 25px;
    }
    .small-text {
      margin-left: 10px;
      font-size: 13px;
      color: $color_8;
    }
  }
  .skills {
    padding-top: 0px;
    .prog-item {
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      p {
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 10px;
      }
      .skills-progress {
        width: 100%;
        height: 10px;
        background: #e0e0e0;
        border-radius: 20px;
        position: relative;
        span {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #5949ce;
          width: 10%;
          border-radius: 10px;
          -webkit-transition: all 1s;
          transition: all 1s;
          &:after {
            content: attr(data-value);
            position: absolute;
            top: -5px;
            right: 0;
            font-size: 10px;
            font-weight: 600;
            color: $color_7;
            background: rgba(0, 0, 0, 0.9);
            padding: 3px 7px;
            border-radius: 30px;
          }
        }
      }
    }
  }
`;

const ChooseUs = () => {
  return (
    <StyledChooseUs>
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
                {' '}
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
                {' '}
                <span className="icon feature_box_col_two">
                  <i className="fa fa-anchor" />
                </span>
                <h6>Production Capability</h6>
                <p>We could manufacture from small to large quantity</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
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
                {' '}
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
                {' '}
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
    </StyledChooseUs>
  );
};

export default ChooseUs;

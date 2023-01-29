import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

import BasicWear from "./img/BASIC WEAR.jpg";
import CorporateWear from "./img/CORPORATE WEAR.jpg";
import KidsWear from "./img/KIDS WEAR.jpg";
import MuslimWear from "./img/MUSLIM WEAR.jpg";
import SleepWear from "./img/SLEEP WEAR.png";
import Uniforms from "./img/UNIFORMS.jpg"
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src= {KidsWear}
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Kids Wear
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src= {MuslimWear}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Muslim  Wear
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {' '}
          <img
            src={Uniforms}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Uniforms
            </Link>
          </button>
        </div>
      </div>
      <div className="col l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={CorporateWear}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Corporate Wear
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <img
                src={BasicWear}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Basic Wear
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src={SleepWear}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sleep Wear
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

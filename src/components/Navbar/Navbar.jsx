import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";


import Logo from '../../img/GG LOGO.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const { data, loading, error } = useFetch(`/categories`);
  console.log(data);
  if (loading || !data) return <span>loading</span>;
  return (
    <div className="navbars">
      <div className="wrappers">
        <div className="lefty">
          <div>
            <img src="/img/flag.jpg" alt="" />
            {/* <KeyboardArrowDownIcon /> */}
          </div>
          {/* <div className="item">
            <span>NGN</span>
            <KeyboardArrowDownIcon />
          </div> */}
          {data.map((item) => (
            <div className="item" style={{ textTransform: 'capitalize' }}>
              <Link className="link" to={`/products/${item.id}`}>
                {item.attributes.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="center">
          <Link className="link" to="/">
            <img src={Logo} alt="Garment Galore" />
          </Link>
        </div>
        <div className="righty">
          <div>
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div>
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          {/* <div>
            <Link className="link" to="/">
              Stores
            </Link>
          </div> */}
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

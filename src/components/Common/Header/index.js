import React from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer.js";
import Button from "../Button/index.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          Cryptotracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/Comapre">
          <p className="link">Compare</p>
        </Link>
        <Link to="/WatchList">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/Dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => console.log("anjandj")}
            outlined={true}
          />
        </Link>
      </div>
      <div className="mobile_drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;

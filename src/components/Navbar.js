import React, {useState} from "react";
import Logo from "../assets/pizzaLogo.png";
import {Link} from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNabvar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
        <div className="leftside" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/menu"> Menu </Link>
              <Link to="/about"> About </Link>
              <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className="rightside">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNabvar}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar
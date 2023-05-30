import React from "react";
import "../styles/Navbar.css";
import HeaderTitle from "./HeaderTitle";

function NavBar({ currentPage, handlePageChange }) {

  return (
   
        <nav className="col-md-2 d-none d-md-block sidebar">
          <div className="sidebar-sticky">
            <HeaderTitle title={currentPage}/>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={() => handlePageChange("Home")}
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#porfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
  );

}
export default NavBar;
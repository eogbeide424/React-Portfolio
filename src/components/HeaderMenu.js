import React from "react";
import "../styles/Navbar.css";


export function HeaderMenu({currentPage, handlePageChange}) {
    return(
    <div className="row headerMenu ">
          <ul className="nav header-menu flex-column">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link header-menu active" : "nav-link header-menu"
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
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
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
    );
  }
  
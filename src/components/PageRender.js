import React, { useState } from "react";
import NavBar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "../styles/Navbar.css";
import Footer from "./Footer";
import HeaderTitle from "./HeaderTitle";

export default function PageRender() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="d-flex flex-column min-vh-100">
    <div className="container flex-grow-1">
      <div className="row mb-5">
      <HeaderTitle title={currentPage} />
      </div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    <div className="container bg-dark  text-white mt-5 mb-5 pt-3">
      <div>
        
         
  
              {renderPage()}
        
        
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}

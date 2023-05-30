import React, { useState } from "react";
import NavBar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "../styles/Navbar.css";
import Footer from "./Footer";

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
    <div class="container-fluid">
      <div className="row">
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Footer />
        {renderPage()}

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"></main>
      </div>
    </div>
  );
}

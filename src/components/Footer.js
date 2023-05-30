import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <a href="https://www.linkedin.com/in/eugene-ogbeide-385087219/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="mx-2" />
        </a>
        <a href="https://github.com/eogbeide424?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="mx-2" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

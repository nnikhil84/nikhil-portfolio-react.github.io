import React from "react";
import { FaGithubSquare, FaMailBulk, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer>
      <IconContext.Provider
        value={{ className: "footer-icon-color", size: 50 }}
      >
        <div className="wrapper">
          <p> </p>
          <p> Click for more </p>
          <a href="https://github.com/nnikhil84">
            <FaGithubSquare />
          </a>
          <a href="mailto:nikhil.naren84@gmail.com">
            <FaMailBulk />
          </a>
          <a href="https://www.linkedin.com/in/nikhilnarendran/">
            <FaLinkedin />
            <a href="https://twitter.com/NikhilN46385245">
              <FaTwitterSquare />
            </a>
          </a>
        </div>
      </IconContext.Provider>
    </footer>
  )
}

export default Footer;


import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

import "./styles.css"

export const Footer = () => {
  return (
    <div className="container-footer">
      <div className="social-media">
        <ul>
          <li>
            <div className="social-color">
              <FaInstagram className="social-item" />
            </div>
          </li>
          <li >
            <div className="social-color">
              <FaLinkedinIn className="social-item" />
            </div>
          </li>
          <li >
            <div className="social-color">
              <FaGithub className="social-item" />
            </div>
          </li>

        </ul>
      </div>
      <div className="teste">
        <a href="#inicio">  <FaAngleDoubleUp className="icon-up" /></a>
      </div>
      <p>© 2023 Kasiliana Oliveira - Todos os direitos reservados</p>
    </div >
  )
}

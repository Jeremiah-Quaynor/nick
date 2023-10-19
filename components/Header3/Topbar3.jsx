import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Topbar3() {
  return (
    <div className="top-bar style-3 d-none d-sm-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <div className="contact-data">
              <ul>
                <li>
                  <a href="mailto:info@nickpetroleum.com">
                    <AiOutlineMail
                      style={{
                        fontSize: "16px",
                        color: "white",
                        marginTop: "-5px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    info@nickpetroleum.com
                  </a>
                </li>
                <li>
                  <a href="tel:+233000000000">
                    <AiOutlinePhone
                      style={{
                        fontSize: "16px",
                        color: "white",
                        marginTop: "-5px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    +233 000 000 000
                  </a>
                </li>
                <li>
            <a href="https://maps.app.goo.gl/Kw5Ry2mZMZyNDxuf6">

                  <FaMapMarkerAlt
                    style={{
                      fontSize: "16px",
                      color: "white",
                      marginTop: "-5px",
                      marginRight: "5px",
                    }}
                  />{" "}
                  48 Mensah Wood Ave, East Legon
                  </a>

                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-4 d-none d-md-block">
            <div className="lan-select">
              <form>
                <select id="lan">
                  <option>English</option>
                  <option>France</option>
                  <option>Bangla</option>
                  <option>Hindi</option>
                </select>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Topbar3;

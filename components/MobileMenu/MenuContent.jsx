import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const MenuContent = () => (
  <div className="mobile-menu-bottom">
    <ul>
      <li className="bottom-item">
        <AiOutlineMail className="icon" />
        <a
          href="mailto:
        info@nickpetroleum.com"
        >
          info@nickpetroleum.com
        </a>
      </li>
      <li className="bottom-item">
        <AiOutlinePhone className="icon" />
        <a href="tel:+233 240 000 000">+233 240 000 000</a>
      </li>
    </ul>
    {/* <div className="bottom-btn">
      <Link href="/contact" className="d-btn theme-btn d-block text-white">
        Contact Us
      </Link>
    </div> */}
  </div>
);

export default MenuContent;

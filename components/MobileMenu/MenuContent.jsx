import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const MenuContent = () => (
  <div className="mobile-menu-bottom">
    <ul>
      <li className="bottom-item">
        <AiOutlineMail className="icon" />
        info@webmail.com
      </li>
      <li className="bottom-item">
        <AiOutlinePhone className="icon" />
        987-098-098-09
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

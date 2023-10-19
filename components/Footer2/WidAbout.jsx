import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/img/banner.png';
import Link from 'next/link';
import Image from 'next/image';

function WidAbout() {
    return (
        <div className="single-footer-wid site_info_box">
            <Link href="/home-2" className="f_logo">
                <Image src={logo} alt="logo" width={100} height={100}/>
            </Link>
            <p>
            Fuel your success with Nick Petroleum {"–"} the premier provider of high-quality fuels and exceptional customer service.
            </p>
            <Link href="/contact" className="theme-btn theme-2 mt-30">
                Get In Touch <BsArrowRight style={{ marginLeft: '5px' }} />
            </Link>
            <div className="social_link">
                <Link href="/">
                    <FaFacebookF />
                </Link>
                <Link href="/">
                    <FaTwitter />
                </Link>
                <Link href="/">
                    <FaInstagram />
                </Link>
                <Link href="/">
                    <FaYoutube />
                </Link>
            </div>
        </div>
    );
}

export default WidAbout;

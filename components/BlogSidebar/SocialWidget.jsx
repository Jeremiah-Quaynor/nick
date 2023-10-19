import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

function SocialWidget() {
    return (
        <>
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
                <FaLinkedinIn />
            </Link>
            <Link href="/">
                <FaYoutube />
            </Link>
        </>
    );
}

export default SocialWidget;

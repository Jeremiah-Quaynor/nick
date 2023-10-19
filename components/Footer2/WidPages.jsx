import Link from 'next/link';
import React from 'react';

function WidPages() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Pages</h4>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about/whoWeAre">About Us</Link>
                </li>
                <li>
                    <Link href="/services">Our Services</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link href="/about/careers">Careers</Link>
                </li>
                <li>
                    <Link href="/about/whoWeAre">Insights</Link>
                </li>
            </ul>
        </div>
    );
}

export default WidPages;

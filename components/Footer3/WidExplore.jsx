import Link from 'next/link';
import React from 'react';

function WidExplore() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Explore Other Pages</h4>
            </div>
            <div className="splite-menu d-flex justify-content-between">
                <ul>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/about">Careers</Link>
                    </li>
                    <li>
                        <Link href="/team">Our Team</Link>
                    </li>
                    <li>
                        <Link href="/about">Approach</Link>
                    </li>
                    <li>
                        <Link href="/projects">Case Studies</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/contact">Locations</Link>
                    </li>
                    <li>
                        <Link href="/about">Clients</Link>
                    </li>
                    <li>
                        <Link href="/contact">Help</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WidExplore;

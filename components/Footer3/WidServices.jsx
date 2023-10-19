import Link from 'next/link';
import React from 'react';

function WidServices() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Services</h4>
            </div>
            <ul>
                <li>
                    <Link href="/services">Energy and Utilities</Link>
                </li>
                <li>
                    <Link href="/services">Communication Services</Link>
                </li>
                <li>
                    <Link href="/services">Internet of Things</Link>
                </li>
                <li>
                    <Link href="/services">Product Development</Link>
                </li>
                <li>
                    <Link href="/services">Industrial Automation</Link>
                </li>
                <li>
                    <Link href="/services">Artificial Intelligence</Link>
                </li>
            </ul>
        </div>
    );
}

export default WidServices;

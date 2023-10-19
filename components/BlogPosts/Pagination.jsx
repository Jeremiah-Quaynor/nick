import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function Pagination() {
    return (
        <div className="page-nav-wrap mt-60 text-center">
            <ul>
                <li>
                    <Link href="/news">
                        <BsArrowLeft />
                    </Link>
                </li>
                <li>
                    <Link href="/news">01</Link>
                </li>
                <li>
                    <Link href="/news">02</Link>
                </li>
                <li>
                    <Link href="/news">..</Link>
                </li>
                <li>
                    <Link href="/news">10</Link>
                </li>
                <li>
                    <Link href="news">11</Link>
                </li>
                <li>
                    <Link href="news">
                        <BsArrowRight />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;

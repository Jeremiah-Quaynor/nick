import React from 'react';
import Link from 'next/link';

function ServiceCategory({ link, category }) {
    return (
        <>
            <li>
                <Link href={link}>{category}</Link>
            </li>
        </>
    );
}

export default ServiceCategory;

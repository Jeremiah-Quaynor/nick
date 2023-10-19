import React from 'react';
import Link from 'next/link';

function CategoryWidget({ postLink, category, num }) {
    return (
        <li>
            <Link href={postLink}>
                {category} <span>{num}</span>
            </Link>
        </li>
    );
}

export default CategoryWidget;

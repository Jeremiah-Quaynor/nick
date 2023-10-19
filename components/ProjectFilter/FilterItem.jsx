import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function FilterItem({ image, name, price, heading }) {
    return (
        <div className="col-xl-3 col-md-6 grid-item bedroom">
            <div className="single-cause-item">
                <div className="cause-bg bg-cover bg-primary-500" style={{ backgroundImage: `url(${image})` }}>
                    <Link href="/project-details" className="icon">
                        <BsArrowRight />
                    </Link>
                </div>
                <div className="cause-content">
                    <div className="cause-meta d-flex">
                        <div className="author mr-15">{name}</div>|
                        <div className="project-amount ml-15">{price}</div>
                    </div>
                    <h4>
                        <Link href="/project-details">{heading}</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;

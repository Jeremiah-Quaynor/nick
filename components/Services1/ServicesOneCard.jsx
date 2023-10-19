import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
function ServicesOneCard({ bgImg, icon, heading, btnText }) {
    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-item service-1">
                <div
                    className="service-bg bg-cover"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                />
                <div className="icon">
                    <img src={icon} alt="icon" />
                </div>
                <h3>{heading}</h3>
                <Link href="/services-details">
                    <span>{btnText}</span>
                    <BsArrowRight style={{ fontSize: '18px' }} />
                </Link>
            </div>
        </div>
    );
}

export default ServicesOneCard;

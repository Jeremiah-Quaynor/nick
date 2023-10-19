import React from 'react';
import PricingFeature from './PricingFeature';
import Link from 'next/link';


function PricingCard({ bgImg, dollar, cent, plan, type, btnText, status, features, link }) {
    return (
        <div className="col-xl-4 col-lg-6 col-12">
            <div
                className={`single-pricing-table bg-cover ${status}`}
                style={{
                    backgroundImage: `url(${bgImg})`,
                }}
            >
                <div className="price">
                    $<span>{dollar}</span>
                    {cent}
                </div>
                <div className="package-name">
                    <h3>{plan}</h3>
                    <span>{type}</span>
                </div>

                <PricingFeature features={features} />

                <div className="package-btn">
                    <Link href={link} className="theme-btn black">
                        {btnText} <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;

import React from 'react';
import PhotoGrid from './PhotoGrid';
import ProcessItem from './ProcessItem';
import processItemData from './processItemData';

function Process() {
    return (
        <section className="process-wrapper section-padding section-bg">
            <div className="container">
                <div className="row align-center">
                    <PhotoGrid />
                    <div className="col-xl-6 col-12 offset-xl-1">
                        <div className="section-title">
                            <span>Profile</span>
                            {/* <p>process</p> */}
                            <h1>Our Profile</h1>
                        </div>

                        <div className="process-setps mt-5 mt-xl-0">
                            {processItemData.map((data, index) => (
                                <ProcessItem
                                    key={index}
                                    // number={data.number}
                                    // heading={data.heading}
                                    text={data.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;

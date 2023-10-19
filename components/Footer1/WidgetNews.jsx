import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';

function WidgetNews({ thumbnail, meta, heading, link }) {
    return (
        <>
            <div className="single-recent-post">
                <div
                    className="thumb bg-cover"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                />
                <div className="post-data">
                    <span>
                        <BiCalendar
                            style={{
                                marginBottom: '3px',
                                marginRight: '3px',
                            }}
                        />
                        {meta}
                    </span>
                    <h5>
                        {' '}
                        <Link href={link}>{heading}</Link>{' '}
                    </h5>
                </div>
            </div>
        </>
    );
}

export default WidgetNews;

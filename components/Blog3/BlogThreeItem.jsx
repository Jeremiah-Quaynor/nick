import React from 'react';
import Link from 'next/link';

function BlogThreeItem({ thumb, author, meta, title, postLink, category }) {
    return (
        <div className="col-xl-4 col-md-6 col-12">
            <div className="single-news-card">
                <div
                    className="featured-thumb bg-cover"
                    style={{ backgroundImage: `url(${thumb})` }}
                />
                <div className="post-content">
                    <div className="post-meta d-flex">
                        <div className="post-author mr-2">
                            <i className="fal fa-user" />
                            <Link href="/home-3">{author}</Link>
                        </div>
                        |
                        <div className="post-date ml-2">
                            <i className="fal fa-calendar-alt" />
                            <span>{meta}</span>
                        </div>
                    </div>
                    <h3>
                        <Link href={postLink}>{title}</Link>
                    </h3>
                    <Link className="read-btn" to="/news-details">
                        Read More
                    </Link>
                </div>
                <Link href="/news" className="post-cat">
                    {category}
                </Link>
            </div>
        </div>
    );
}

export default BlogThreeItem;

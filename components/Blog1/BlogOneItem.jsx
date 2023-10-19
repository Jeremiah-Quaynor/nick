import React from 'react';
import Link from 'next/link';


function BlogOneItem({ thumb, date, month, category, author, title, link }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-blog-card">
                    <div
                        className="featured-img bg-cover"
                        style={{
                            backgroundImage: `url(${thumb})`,
                        }}
                    />
                    <div className="post-content">
                        <div className="post-date">
                            <span>{date}</span>
                            {month}
                        </div>
                        <div className="post-meta">
                            <Link href={link} className="post-cat">
                                {category}
                            </Link>{' '}
                            /
                            <Link href={link} className="post-author">
                                {author}
                            </Link>
                        </div>
                        <h3>
                            <Link href={link}>{title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogOneItem;

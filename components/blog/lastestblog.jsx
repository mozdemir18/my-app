import React, {Component, useEffect} from 'react';
//link
import Link from 'next/link'
import Image from 'next/image';
import Moment from 'moment'

const LastestBlog =({otherBlogs})=> {

    useEffect(()=> {
        console.log(otherBlogs);
    })
    
    return(
        <div className="card post-widget">
            <div className="card-header">
                <h4 className="card-title">Latest Posts</h4>
            </div>
            <div className="card-body">
                <ul className="latest-posts">
                    {
                        otherBlogs != null &&
                        otherBlogs.map((item) => (
                            <li>
                                <div className="post-thumb">
                                    <Link href={`/blog/${item.id}`}>
                                        <div>
                                        <Image className="img-fluid" src={`http://188.132.130.99${item.image}`} width="90" height="60" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                    <Link href={`/blog/${item.id}`}>{item.title}</Link>
                                    </h4>
                                    <p>{Moment(item.created_date).format('d MMM YYYY')}</p>
                                </div>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    );
}


export default LastestBlog;
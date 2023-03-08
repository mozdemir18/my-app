import React, {useEffect} from 'react';
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import Moment from 'moment'

const HomeBlog =({blogs})=>{    
       
    //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

        return(
            <section className="section section-blogs">
            <div className="container-fluid">                         
                <div className="section-header text-center">
                    <h2>Blogs and News</h2>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>                          
                <div className="row blog-grid-row">
                    {
                        blogs != null &&
                        blogs.map((item) => (
                            <div className="col-md-6 col-lg-3 col-sm-12" key={item.id}>                                        
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link href={`/blog/${item.id}`}>
                                            <div>
                                                <Image className="img-fluid" src={`http://188.132.130.99${item.image}`} width="300" height="150" alt="Post" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="entry-meta meta-item">
                                            <li><i className="far fa-clock mr-2"></i>{Moment(item.created_date).format('d MMM YYYY')}</li>
                                        </ul>
                                        <h3 className="blog-title">
                                            <Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                </div>                   
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
        );
    }

export default HomeBlog;
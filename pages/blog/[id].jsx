import React from "react";
import Link from 'next/link'
import StickyBox from "react-sticky-box";
//components
import LastestBlog from "../../components/blog/lastestblog";
import Image from 'next/image';
import Moment from 'moment'

const BlogDetails = ({blog, otherBlogs}) => {
  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Blog Details</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-view">
                <div className="blog blog-single-post">
                  <div className="blog-image">
                    <Link href="#0">
                      <Image alt="" src={`http://188.132.130.99${blog.image}`} width="1200" height="800" className="img-fluid" />
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    {blog.title}
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <i className="far fa-calendar"></i>{Moment(blog.created_date).format('d MMM YYYY')}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    {blog.body}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <LastestBlog otherBlogs={otherBlogs}/>
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/blog_detail/${params.id}`)
	const blog = await response.json()

    const responseBlog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/blog_list`)
	const otherBlogs = await responseBlog.json()

    let blogList = otherBlogs.filter(function (item) {
        return item.id != params.id;
    }).map(function (item) {
        return item;
    })
	return {
	  props: {
        otherBlogs: blogList,
		blog: blog,
	  },
	};
};

export default BlogDetails;

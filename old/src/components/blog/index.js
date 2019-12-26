import React, { Component } from 'react'
import Blogimg from '../../images/home-1/10-lqip.jpg'
import renderHTML from 'react-render-html';
import TimeAgo from '../time'

import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
const Entities = require('html-entities').XmlEntities;

 
const entities = new Entities();
export default class Blog extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          loading: true,
          posts: [],
          error: ''       
        }
      }
    
      async componentDidMount(){
        try {
          const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts');
          const responseJson = await response.json();
          this.setState({
            loading: false,
            posts: responseJson,
          }, function () {
          });
        }
        catch (error) {
          console.error(error);
        }
      }
      
        render() {
            function truncateString(str, num) {
                // Clear out that junk in your trunk
                if (str.length > num) {
                  return str.slice(0, num) + "...";
                } else {
                  return str;
                }
              }            
          const { posts } = this.state;
          console.log(posts);
    
            return (
            <div>
                <div className="page-main-title">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h1 className="entry-title h2">All Articles</h1>
                        {/* <p>Duis auctor eros ac urna dictum, eget rhoncus ex fringilla. Vestibulum in ex massa. Sed accumsan tortor libero. Phasellus gravida nibh vel odio semper vitae.</p> */}
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row large-gutters">
                {posts.length ? (
                <div className="col-lg-8 mb-7">
                <div className="row blog-post card-post-style">
                { posts.map( post => (
                    <div className="col-lg-6">
                    <article>
                        <figure className="entry-media"><img className="lozad" src={post.jetpack_featured_media_url} data-src={post.jetpack_featured_media_url} alt="Entry"/>
                        </figure>
                        <div className="entry-content-wrapper">
                        <header className="entry-header">
                            <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="blog-three-col.html">Photography</Link></span><span className="entry-meta-date"> <i className="far fa-clock"></i><TimeAgo time={post.date} /></span>
                            </div>
                            <h2 className="entry-title"><Link to="/article/details">{entities.decode(post.title.rendered)}</Link></h2>
                        </header>
                        <div className="entry-content">
                            <p>{renderHTML(truncateString(post.excerpt.rendered, 100) ) }</p>
                        </div>
                        </div>
                    </article>
                    </div>
              ))}

                </div>
                <div className="text-center align-items-center"><Link className="btn btn-light"to="/blog">Load More</Link></div>
                </div>
                ):''}
                <div className="col-lg-4 mb-7">
                    <Sidebar />
                </div>
            </div>
            </div>
     </div>
        )
    }
}

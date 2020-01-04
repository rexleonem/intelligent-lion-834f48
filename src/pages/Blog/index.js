import React, { Component } from 'react'
import Homeadd from '../Global/Homeadd'
import MainSidebar from '../Global/MainSidebar'
import renderHTML from 'react-render-html';

// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
import { Helmet } from 'react-helmet'

const TITLE = "Africa's Very Own - All Posts"
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class AllPosts extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/rae/v1/posts');
      const responseJson = await response.json();
      this.setState({
        loading: false,
        posts: responseJson.posts_data,
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
         {posts.length ? (
		<div className="recent-news-wrapper__fluid p-t-lg-80 p-t-xs-60 p-b-xs-20">
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
         <div className="custom-fluid-container">
            <div className="row masonry-grid">
            { posts.map( post => (
                <div className="grid-item col-lg-4" key={post.id}>
                    <div
                        className="media post-block post-block__fluid post-block__mid flex-column m-b-xs-30 m-b-md-70 m-b-lg-70">
                          <Link to={location => ({ ...location, pathname: `/article/${post.id}`, id: post.id })} 
                              className="align-self-center w-100">
                            <div className="posteo-popup posteo-play-btn posteo-play-btn__big"></div>
                            <img className="w-100 m-b-xs-30" src={post.attachment_image.img_src[0]} alt="posteo post" /></Link>
                        <div className="media-body">
                            <div className="post-cat-group m-b-xs-15">
                            { post.categories.map( category => (

                                <Link to={`/category/${category.term_id}`} className="post-cat cat-btn btn-big bg-color-red-two">{category.name}</Link>
                                ))}
                                </div>
                            <h3 className="axil-post-title hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title)}</Link></h3>
                            <p className="mid">{renderHTML(truncateString(post.excerpt, 100) ) }</p>


                        </div>
                    </div>
                </div>
              ))}
              </div>
        </div>
              </div>
    ) : '' }
     </div>
        )
    }
}

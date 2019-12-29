import React, { Component } from 'react'
import Homeadd from '../Global/Homeadd'
import MainSidebar from '../Global/MainSidebar'
import renderHTML from 'react-render-html';

import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class MainContents extends Component {

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
<div className="random-posts section-gap">
<div className="container">
    <div className="row">
        <div className="col-lg-8">

            <Homeadd />
            {posts.length ? (
            <main className="axil-content">
         { posts.map( post => (
            <div className="media post-block post-block__mid m-b-xs-30" key={post.id}>
                <a href="post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30"
                        src={post.jetpack_featured_media_url} alt=""/></a>
                <div className="media-body">
                    <div className="post-cat-group m-b-xs-10">
                        <a href="business.html" className="post-cat cat-btn bg-color-blue-one">TRAVEL</a>
                    </div>
                    <h3 className="axil-post-title hover-line hover-line"><a
                            href="post-format-standard.html">{entities.decode(post.title.rendered)}</a></h3>
                    <p className="mid">{renderHTML(truncateString(post.excerpt.rendered, 100) ) }</p>
                    <div className="post-metas">
                        <ul className="list-inline">
                            <li>By <a href="#">Dee Afrikan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
              ))}
              </main>
        ) : ''}
        </div>

        <MainSidebar />


    </div>
</div>
</div>
        )
    }
}

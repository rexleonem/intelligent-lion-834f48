import React, { Component } from 'react'


import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class TopSide extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?tags=14&per_page=2&offset=2');
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
      const { posts } = this.state;
      console.log(posts);

        return (
            <div className="col-lg-4">
          {posts.length ? (
            <div>
             { posts.map( post => (       
            <div className="axil-img-container m-b-xs-30" key={post.id}>
                <a href="#" className="d-block">
                    <img src={post.jetpack_featured_media_url} alt="gallery images"
                        className="w-100" />
                    <div className="grad-overlay"></div>
                </a>
                <div className="media post-block position-absolute">
                    <div className="media-body">
                        <div className="post-cat-group m-b-xs-10">
                            <a href="business.html"
                                className="post-cat cat-btn btn-mid bg-color-purple-two">BUEATY</a>
                        </div>
                        <div className="axil-media-bottom">
                            <h3 className="axil-post-title hover-line hover-line"><a
                                    href="#">{entities.decode(post.title.rendered)}</a></h3>
                            <div className="post-metas">
                                <ul className="list-inline">
                                    <li><a href="post-format-standard.html"
                                            className="d-flex align-items-center"><span>By Dee Afrikan</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     ))}
     </div>
          ) : '' }
        </div>
)
    }
}

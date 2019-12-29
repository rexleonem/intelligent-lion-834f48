import React, { Component } from 'react'
import TopSide from './TopSide'


import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class Top extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?tags=14&per_page=1');
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
            <section className="section-gap section-gap-top__with-text top-stories bg-grey-light-three">
            <div className="container">
                <div className="section-title m-b-xs-40">
                    <h2 className="axil-title">Top Stories</h2>
                    <a href="#" className="btn-link">All Top Stories</a>
                </div>
                <div className="row">
                {posts.length ? (
                    <div className="col-lg-8">
             { posts.map( post => (       
                    <div className="axil-img-container m-b-xs-30">
                        <a href="post-format-standard.html" className="d-block">
                            <img src={post.jetpack_featured_media_url} alt="gallery images"
                                className="w-100" />
                            <div className="grad-overlay"></div>
                        </a>
                        <div className="media post-block position-absolute">
                            <div className="media-body media-body__big">
                                <div className="post-cat-group m-b-xs-10">
                                    <a href="business.html" className="post-cat cat-btn bg-color-purple-one">TRAVEL</a>
                                </div>
                                <div className="axil-media-bottom">
                                    <h3 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">{entities.decode(post.title.rendered)}</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="#" className="post-author">Dee Afrikan</a></li>
                                            <li><i className="dot">.</i>July 17, 2019</li>
                                            <li><a href="#"><i className="feather icon-activity"></i>5k Views</a></li>
                                            <li><a href="#"><i className="feather icon-share-2"></i>230 Shares</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     ))}
     </div>
            ) : ''}
              <TopSide />
                </div>
            </div>
            </section>
          )
    }
}

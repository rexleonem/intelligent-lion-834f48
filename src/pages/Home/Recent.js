import React, { Component } from 'react'
import RecentSide from './RecentSide'

import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class Recent extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?tags=16&per_page=1');
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
        <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
        <div className="container">
            <div className="row">
            {posts.length ? (
                <div className="col-lg-6">
                <div className="axil-latest-post">
                { posts.map( post => (
                    <div className="media post-block m-b-xs-20" key={post.id}>
                        <figure className="fig-container">
                            <a href="#"><img src={post.jetpack_featured_media_url}
                                    alt="latest post" /></a>
                            <div className="post-cat-group m-b-xs-10">
                                <a href="business.html"
                                    className="post-cat cat-btn bg-color-blue-one">TECHNOLOGY</a>
                            </div>
                        </figure>
                        <div className="media-body">
                            <h3 className="axil-post-title hover-line hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title.rendered)}</Link></h3>
                            <div className="post-metas">
                                <ul className="list-inline">
                                    <li><i className="feather icon-user"></i><a href="#" className="post-author">Dee Afrikan</a></li>
                                    <li><a href="#"><i className="feather icon-clock"></i><Moment fromNow>{post.date}</Moment></a></li>
                                    <li><a href="#"><i className="feather icon-share-2"></i>230 Shares</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
              ))}
              </div>
            </div>
        ) : '' }

            <RecentSide />
            </div>
        </div>
        </div>
        )
    }
}

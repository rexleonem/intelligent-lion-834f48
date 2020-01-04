import React, { Component } from 'react'

import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class Trending extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?per_page=6');
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
<section className="section-gap section-gap-top__with-text trending-stories">
<div className="container">
    <div className="section-title m-b-xs-40">
        <h2 className="axil-title">Trending Stories</h2>
        <Link to="/all-posts" className="btn-link">VIEW ALL</Link>
    </div>
    {posts.length ? (
    <div className="row">
      { posts.map( post => (
    <div className="col-lg-6">
        <div className="media post-block m-b-xs-30" key={post.id}>
            <Link to={`/article/${post.id}`} className="align-self-center"><img className=" m-r-xs-30"
                    src={post.jetpack_featured_media_url} alt="" /></Link>
            <div className="media-body">
                <div className="post-cat-group m-b-xs-10">
                    <a href="business.html" className="post-cat cat-btn bg-color-blue-grey-one">WORLD</a>
                </div>
                <h3 className="axil-post-title hover-line hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title.rendered)}</Link></h3>
                <div className="post-metas">
                    <ul className="list-inline">
                        <li>By <a href="#">Dee Afrikan</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
         ))}
              </div>
) : ''}
</div>
</section>
        )
    }
}

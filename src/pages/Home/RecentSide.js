import React, { Component } from 'react'


import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class RecentSide extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?tags=16&per_page=4&offset=2');
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
            <div className="col-lg-6">
            <div className="axil-recent-news">
            <div className="section-title d-flex m-b-xs-30">
                <h2 className="axil-title">Featured Articles</h2>
                <Link to="/all-posts" className="btn-link">VIEW ALL</Link>
            </div>
            {posts.length ? (
            <div className="axil-content">
                { posts.map( post => (
                <div className="media post-block m-b-xs-30" key={post.id}>
                    <Link to={`/article/${post.id}`} className="align-self-center"><img
                            className=" m-r-xs-30" src={post.jetpack_featured_media_url} alt="" /></Link>
                    <div className="media-body">
                        <div className="post-cat-group m-b-xs-10">
                            <a href="business.html"
                                className="post-cat cat-btn bg-color-purple-one">TRAVEL</a>
                        </div>
                        <h3 className="axil-post-title hover-line hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title.rendered)}</Link></h3>
                        <div className="post-metas">
                            <ul className="list-inline">
                                <li>By <a href="#">Dee Afrikan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              ))}
              </div>

        ) : '' }
        </div>
        </div>
)
    }
}

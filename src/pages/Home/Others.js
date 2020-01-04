import React, { Component } from 'react'
import TimeAgo from '../../components/time'
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class Others extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?tags=12&per_page=4');
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
<section className="related-post p-b-xs-30">
<div className="container">
    <div className="section-title m-b-xs-40">
        <h2 className="axil-title">Culture &amp; Food</h2>
        <a href="#" className="btn-link ml-auto">Culture &amp; Food</a>
    </div>
    {posts.length ? (
    <div className="grid-wrapper">

    <div className="row">
    { posts.map( post => (       
         <div className="col-lg-3 col-md-4">
            <div className="content-block m-b-xs-30" key={post.id}>
                <Link to={`/article/${post.id}`}>
                    <img src={post.jetpack_featured_media_url} alt="abstruct image"
                        className="img-fluid" />
                    <div className="grad-overlay"></div>
                </Link>
                <div className="media-caption">
                    <div className="caption-content">
                        <h3 className="axil-post-title hover-line hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title.rendered)}</Link></h3>
                        <div className="caption-meta">
                            By <a href="#">Dee Afrikan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     ))}
    </div>
  </div>
) : '' }
</div>
</section>
        )
    }
}

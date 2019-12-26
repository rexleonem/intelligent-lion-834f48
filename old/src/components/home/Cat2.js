import React, { Component } from 'react'
import BlogImg from '../../images/home-1/7-lqip.jpg'
import Side1 from './Side1'
import { Link } from 'react-router-dom'
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
export default class Cat2 extends Component {
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
            <div className="container">
            <hr className="mt-0 mb-5" />
            <div className="row">
              <div className="col-xl-8 mb-6">
                <h6 className="text-red mb-4">Top Posts</h6>
                {posts.length ? (

                  <div className="row blog-post">
                { posts.map( post => (
                  <div className="col-md-6 col-lg-4" key={post.id}>
                    <article>
                    <figure className="entry-media"><img className="lozad" src={post.jetpack_featured_media_url} data-src={post.jetpack_featured_media_url} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="/maintenance">Photography</Link></span>
                          </div>
                          <h2 className="entry-title"><Link to="/article/details">{entities.decode(post.title.rendered)}</Link></h2>
                        </header>
                      </div>
                    </article>
                  </div>
              ))}
              </div>

                ) : ''}

                <div className="text-center align-items-center">
                  <Link className="btn btn-light"to="/blog">View More</Link>
                </div>
              </div>
              <Side1 />
          </div>
          </div>
         )
    }
}

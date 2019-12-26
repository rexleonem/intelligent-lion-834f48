import React, { Component } from 'react'
import Ad from '../../images/holder/ads.jpg'
import { Link } from 'react-router-dom'

const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();


export default class Side1 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loading: true,
      posts: [],
      error: '',  
      count: -3    
    }
    // this.increment = this.increment.bind(this);
  }
  
  async componentDidMount(){
    try {
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?per_page=4');
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
            <div>
          <aside className="widget">
            <form className="search-form" role="search">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Search" name="q" />
                <div className="input-group-append">
                  <button className="btn bt" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </aside>
          <aside className="widget">
          <h5 className="widget-title">Top Posts</h5>
          {posts.length ? (
            <ul className="simple-entry-list blog-post">
           { posts.map( post => (
              <li key={post.id}>
              <div className="reveal-title">{this.state.count ++}</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><Link to="/article/details">{entities.decode(post.title.rendered)}</Link></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="/maintenance">Photography</Link></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              ))}
              </ul>
          ) : ''}
          </aside>
          <aside className="widget widget_categories">
            <h5 className="widget-title">Categories</h5>
            <ul>
              <li><a href="blog-right-sidebar.html">Culture</a></li>
              <li><a href="blog-right-sidebar.html">Creativity</a></li>
              <li><a href="blog-right-sidebar.html">Opinion </a></li>
              <li><a href="blog-right-sidebar.html">Weddings</a></li>
              <li><a href="blog-right-sidebar.html">Automobiles</a></li>
              <li><a href="blog-right-sidebar.html">Living</a>
                <ul>
                  <li><a href="blog-right-sidebar.html">Education</a></li>
                  <li><a href="blog-right-sidebar.html">Travel</a></li>
                  <li><a href="blog-right-sidebar.html">Food</a>
                    <ul>
                      <li><a href="blog-right-sidebar.html">Traditional</a></li>
                      <li><a href="blog-right-sidebar.html">Famous </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="blog-right-sidebar.html">Humor</a></li>
              <li><a href="blog-right-sidebar.html">Sports</a></li>
              <li><a href="blog-right-sidebar.html">Health</a></li>
              <li><a href="blog-right-sidebar.html">Photography</a></li>
            </ul>
          </aside>
          <aside className="widget"><img src={Ad} alt="Ads" /></aside>
            </div>
        )
    }
}

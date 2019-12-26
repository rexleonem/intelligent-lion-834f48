import React, { Component } from 'react'
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
          <div className="col-xl-4 mb-6">
            <h6 className="text-purple mb-4">Most Read</h6>
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
          </div>
    )
    }
}

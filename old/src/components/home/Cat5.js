import React, { Component } from 'react';
import TimeAgo from '../time'

// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from '@reach/router';

// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
export default class Cat1 extends Component {

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
            <div className="container">
          <h6 className="text-green mb-4">Travel &amp; Food</h6>

              {posts.length ? (
              <div className="row blog-post">
                { posts.map( post => (
              <div className="col-md-6 col-lg-3" key={post.id}>
              <article>
                <figure className="entry-media"><img className="lozad" src={post.jetpack_featured_media_url} data-src={post.jetpack_featured_media_url} style={{width: '600', height: '400'}} />
                </figure>
                <div className="entry-content-wrapper">
                  <header className="entry-header">
                    <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="/blog">Photography</Link></span><span className="entry-meta-date"> <i className="far fa-clock"></i><TimeAgo time={post.date} /></span>
                    </div>
                    <h2 className="entry-title"><Link to="/article/details">{entities.decode(post.title.rendered)}</Link></h2>
                  </header>
                </div>
              </article>
              </div>
              ))}
             </div>


              ) : ''}
              
              {/* <div className="col-md-6 col-lg-3">
                <article>
                  <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                  </figure>
                  <div className="entry-content-wrapper">
                    <header className="entry-header">
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="/blog">Humour</Link></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><Link to="/article/details">Num igitur utiliorem tibi huncm esse posse</Link></h2>
                    </header>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article>
                  <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                  </figure>
                  <div className="entry-content-wrapper">
                    <header className="entry-header">
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="/blog">Photography</Link></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><Link to="/article/details">Omnes enim iucundum motum sensus hilaretur</Link></h2>
                    </header>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article>
                  <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                  </figure>
                  <div className="entry-content-wrapper">
                    <header className="entry-header">
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="/blog">Humour</Link></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><Link to="/article/details">Curabitur pretium lectusnc ine fermentum fermen</Link></h2>
                    </header>
                  </div>
                </article>
              </div> */}
          </div>
        )
    }
}

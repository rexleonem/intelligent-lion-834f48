import React, { Component } from 'react'
import Homeadd from '../Global/Homeadd'
import MainSidebar from '../Global/MainSidebar'
import renderHTML from 'react-render-html';

// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
//  console.log(this.props.id);

export default class Category extends Component {

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
        const response = await fetch(`https://deeafrikan.website/wp-json/wp/v2/posts?categories=${this.props.match.params.id}`);
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
        function truncateString(str, num) {
            // Clear out that junk in your trunk
            if (str.length > num) {
              return str.slice(0, num) + "...";
            } else {
              return str;
            }
          }            
  const { posts } = this.state;
      console.log(posts);

return (
<div className="random-posts section-gap">
<div className="container">
    <div className="row">
        <div className="col-lg-8">

            <Homeadd />
            {posts.length ? (
            <main className="axil-content">
         { posts.map( post => (
            <div className="media post-block post-block__mid m-b-xs-30" key={post.id}>
                <Link to={`/article/${post.id}`} className="align-self-center"><img className=" m-r-xs-30"
                        src={post.jetpack_featured_media_url} alt=""/></Link>
                <div className="media-body">
                    <h3 className="axil-post-title hover-line hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title.rendered)}</Link></h3>
                    <p className="mid">{renderHTML(truncateString(post.excerpt.rendered, 100) ) }</p>
                    <div className="post-metas">
                        <ul className="list-inline">
                            <li><i className="feather icon-user"></i> <a href="#">Dee Afrikan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
              ))}
              </main>
        ) : ''}
        </div>

        <MainSidebar />


    </div>
</div>
</div>
        )
    }
}

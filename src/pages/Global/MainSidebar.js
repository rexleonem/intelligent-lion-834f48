import React, { Component } from 'react'

import CategoryImg from '../../images/category-bg/category-bg-1.png'
import { Link } from 'react-router-dom';
import SideAdd from './SideAdd';
// import { axios } from 'axios';

const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

export default class MainSidebar extends Component {

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
      const response = await fetch('https://deeafrikan.website/wp-json/wp/v2/posts?tags=14');
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
<div className="col-lg-4">
<aside className="post-sidebar">
<SideAdd />
    <div className="newsletter-widget weekly-newsletter bg-grey-light-three m-b-xs-40">
        <div className="newsletter-content">
            <div className="newsletter-icon">
                <i className="feather icon-send"></i>
            </div>
            <div className="section-title">
                <h3 className="axil-title">Subscribe To Our Weekly
                    Newsletter</h3>
                <p className="mid m-t-xs-10 m-b-xs-20">No spam, notifications only about new
                    products,
                    updates.</p>
            </div>
            <div className="subscription-form-wrapper">
                <form action="#" className="subscription-form">
                    <div className="form-group form-group-small m-b-xs-20">
                        <label for="subscription-email-2">Enter Email Address</label>
                        <input type="text" name="subscription-email-2"
                            id="subscription-email-2" />
                    </div>
                    <div className="m-b-xs-0">
                        <button className="btn btn-primary btn-small">SUBSCRIBE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* <div className="category-widget m-b-xs-40">
        <div className="widget-title">
            <h3>Categories</h3>
        </div>
        <div className="category-carousel">
            <div className="owl-carousel owl-theme" data-owl-items="1" data-owl-loop="true"
                data-owl-autoplay="true" data-owl-dots="false" data-owl-nav="false"
                data-owl-margin="10">
                <div className="cat-carousel-inner">
                    <ul className="category-list-wrapper">
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">20</span>+
                                    </div>
                                    <h4 className="cat-title">Top Stories</h4>
                                </div>
                            </a>
                        </li>
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">100</span>+
                                    </div>
                                    <h4 className="cat-title">Business</h4>
                                </div>
                            </a>
                        </li>
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">10</span>+
                                    </div>
                                    <h4 className="cat-title">Travel</h4>
                                </div>
                            </a>
                        </li>
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">10</span>+
                                    </div>
                                    <h4 className="cat-title">Food</h4>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="cat-carousel-inner">
                    <ul className="category-list-wrapper">
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">20</span>+
                                    </div>
                                    <h4 className="cat-title">Top Stories</h4>
                                </div>
                            </a>
                        </li>
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">100</span>+
                                    </div>
                                    <h4 className="cat-title">Business</h4>
                                </div>
                            </a>
                        </li>
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">10</span>+
                                    </div>
                                    <h4 className="cat-title">Travel</h4>
                                </div>
                            </a>
                        </li>
                        <li className="category-list perfect-square">
                            <a href="post-format-standard.html" className="list-inner"
                                styles={{ backgroundImage:`url(${CategoryImg})` }}>
                                <div className="post-info-wrapper overlay">
                                    <div className="counter-inner"><span className="counter">10</span>+
                                    </div>
                                    <h4 className="cat-title">Food</h4>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> */}
    <div className="sidebar-social-share-widget m-b-xs-40">
        <ul className="social-share-list-wrapper">
            <li className="social-share-list text-center perfect-square">
                <a href="https://facebook.com/africasveryown1" className="list-inner bg-color-facebook">
                    <i className="fab fa-facebook-f"></i>
                    <div className="counts">Find us on </div>
                    <div className="title">Facebook</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="https://twitter.com/africasveryown1" className="list-inner bg-color-twitter">
                    <i className="fab fa-twitter"></i>
                    <div className="counts">Follow us on</div>
                    <div className="title">Twitter</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="#" className="list-inner bg-color-youtube">
                    <i className="fab fa-youtube"></i>
                    <div className="counts">Watch us on</div>
                    <div className="title">Youtube</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="https://linkedin.com/company/africasveryown" className="list-inner bg-color-linkedin">
                    <i className="fab fa-linkedin-in"></i>
                    <div className="counts">Connect on</div>
                    <div className="title">LinkedIn</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="https://instagram.com/africasveryown1" className="list-inner bg-color-instagram">
                    <i className="fab fa-instagram"></i>
                    <div className="counts">Follow us on</div>
                    <div className="title">Instagram</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="#" className="list-inner bg-color-pinterest">
                    <i className="fab fa-pinterest"></i>
                    <div className="counts">Check our</div>
                    <div className="title">Pinterest</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="https://theafrican.store" className="list-inner bg-color-twitch">
                    <i className="fab fa-shop"></i>
                    <div className="counts">Shop</div>
                    <div className="title">African Products</div>
                </a>
            </li>
            <li className="social-share-list text-center perfect-square">
                <a href="http://dorjafrica.com" className="list-inner bg-color-vimeo">
                    <i className="fab fa-shop"></i>
                    <div className="counts">Learn More</div>
                    <div className="title">About Africa</div>
                </a>
            </li>
        </ul>
    </div>
    {posts.length ? (
    <div className="post-widget sidebar-post-widget m-b-xs-40">
    <ul className="nav nav-pills row no-gutters">
        <li className="nav-item col">
            <a className="nav-link active" data-toggle="pill" href="#recent-post">Sponsored Contents</a>
        </li>
    </ul>
    { posts.map( post => (       
    <div className="tab-content">
        <div className="tab-pane fade show active" id="recent-post">
            <div className="axil-content">
                <div className="media post-block post-block__small">
                    <a href="post-format-standard.html" className="align-self-center"><img
                            className=" m-r-xs-30" src={post.jetpack_featured_media_url}
                            alt="media image" /></a>
                    <div className="media-body">
                        <div className="post-cat-group">
                            <a href="#"
                                className="post-cat color-blue-three">SPONSORED</a>

                        </div>
                        <h4 className="axil-post-title hover-line hover-line"><Link to={`/article/${post.id}`}>{entities.decode(post.title.rendered)}</Link></h4>
                        <div className="post-metas">
                            <ul className="list-inline">
                                <li>By <a href="#">Dee Afrikan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     ))}
     </div>
) : '' }
</aside>
</div>
        )
    }
}

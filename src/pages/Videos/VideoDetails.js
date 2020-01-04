import React, { Component } from 'react'
import Homeadd from '../Global/Homeadd'
import MainSidebar from '../Global/MainSidebar'
import renderHTML from 'react-render-html';
import Author from '../../images/author/01.png'
import LatestPost from '../../images/post/latest-post.jpg'

// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
import Moment from 'moment';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
const API = 'AIzaSyDEXTxNap_qCSeNNYhVbehg4gKh9gAu3oM'
// const API = 'AIzaSyCfPRKndX6DoiiJ4trcoxmLgPdjNKaBftA'
const channelID = 'UCNNv1_xBpnYynxPM0jLH4fg'
const result = 1;
const embedUrl = 'https://www.youtube.com/embed/'
const ytUrl = 'https://www.youtube.com/watch/'

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class VideoDetails extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      loading: true,
      post: [],
      error: ''       
    }
  }

  async componentDidMount(){
    try {
      const response = await fetch(`https://deeafrikan.website/wp-json/wp/v2/posts/${this.props.id}`);
      const responseJson = await response.json();
      this.setState({
        loading: false,
        post: responseJson,
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
        const { post, error, loading } = this.state;
        console.log(post);

        return (
            <div>
        {Object.keys( post ).length ? (
             <div>
            <div className="breadcrumb-wrapper">
            <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/all-posts">Video</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{post.title.rendered}</li>
                </ol>

            </nav>
        </div>

        </div>


        <section className="banner banner__single-post banner__standard">
        <div class="container">
				<div class="row">
					<div class="col-lg-2">
						<div class="post-date perfect-square bg-primary-color">
							May <span>23</span>
						</div>
					</div>

					<div class="col-lg-8">
						<div class="post-title-wrapper">
							<div class="btn-group">
								<a href="#" class="cat-btn bg-color-blue-one">VIDEOS</a>
							</div>

							<h2 class="m-b-xs-0 axil-title hover-line color-white m-t-xs-10">{post.title.rendered}</h2>
							<div class="post-metas banner-post-metas m-t-xs-20">
								<ul class="list-inline">
									<li><a href="#" class="post-author post-author-with-img"><img
												src="assets/images/author/01.png" alt="author" />Dee Afrikan</a></li>
									<li><a href="#"><i class="feather icon-activity"></i>5k Views</a></li>
									<li><a href="#"><i class="feather icon-share-2"></i>230 Shares</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

        </section>



        <div className="post-single-wrapper p-t-xs-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <main className="site-main">
                        <article className="post-details">
                            <div className="single-blog-wrapper">
                                <div className="post-details__social-share mt-2">
                                    <ul className="social-share social-share__with-bg social-share__vertical">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>

                                </div>

                                <figure class="post-media">
										<video class="plyr-post"
											poster="assets/images/video-post/post-format-video-1.html"
											id="video-player-1" playsinline controls>
											<source src="assets/videos/post-format-video-1.mp4" type="video/mp4" />
										</video>
										<figcaption>
											Drawn for an insurance company
										</figcaption>
								</figure>
                                <p> 
                                {post.content.rendered}
                                </p>
                            </div>

                        </article>


                        <div className="post-shares m-t-xs-60">
                            <div className="title">SHARE:</div>
                            <ul className="social-share social-share__rectangular">
                                <li><a href="#" className="btn bg-color-twitch"><i className="fab fa-twitch"></i>
                                        1K+</a>
                                </li>
                                <li><a href="#" className="btn bg-color-facebook"><i className="fab fa-facebook-f"></i>
                                        1K+</a>
                                </li>
                                <li><a href="#" className="btn bg-color-twitter"><i className="fab fa-twitter"></i>1000+</a>
                                </li>
                                <li><a href="#" className="btn bg-color-linkedin"><i
                                            className="fab fa-linkedin-in"></i>1M+</a>
                                </li>
                            </ul>
                        </div>


                        <hr className="m-t-xs-50 m-b-xs-60" />



                        <div className="comment-box">
                            <h2>Leave A Reply</h2>
                            <p>Your email address will not be published.<span className="primary-color">*</span></p>
                        </div>


                        <form action="#" className="comment-form row m-b-xs-60">
                            <div className="col-12">
                                <div className="form-group comment-message-field">
                                    <label for="comment-message">Comment</label>
                                    <textarea name="comment-message" id="comment-message" rows="6"></textarea>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="website">Website</label>
                                    <input type="text" name="website" id="website" />
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary">POST COMMENT</button>
                            </div>
                        </form>

                        <div className="post-navigation-wrapper row  m-b-xs-60">
                            <div className="post-navigation col-lg-6">
                                <div className="post-nav-content">
                                    <a href="#" className="prev-post">
                                        <i className="feather icon-chevron-left"></i>Previous Post
                                    </a>
                                    <h3><a href="#">Tips For Choosing The Perfect Gloss For Your Lips</a></h3>
                                </div>
                            </div>
                            <div className="post-navigation text-right col-lg-6">
                                <div className="post-nav-content">
                                    <a href="#" className="next-post">
                                        Next Post<i className="feather icon-chevron-right"></i>
                                    </a>
                                    <h3><a href="#">Tips For Choosing The Perfect Gloss For Your Lips</a></h3>
                                </div>
                            </div>
                        </div>

                    </main>

                </div>
        <MainSidebar />

            </div>

        </div>

        </div>


                </div>
            ) : '' }
             </div>
        )
    }
}

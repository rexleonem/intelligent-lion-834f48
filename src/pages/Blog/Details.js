import React, { Component } from 'react'
import Homeadd from '../Global/Homeadd'
import MainSidebar from '../Global/MainSidebar'
import renderHTML from 'react-render-html';
import Author from '../../images/author/01.png'
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
    EmailIcon,
  } from 'react-share';
// import BlogImg from '../../images/home-1/5-lqip.jpg';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import { axios } from 'axios';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 
// console.log(this.props.id);

export default class Details extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      loading: true,
      post: [],
      error: ''       
    }
  }

  createMarkup = ( data ) => ({
    __html: data
});

async componentDidMount(){
    try {
      const response = await fetch(`https://deeafrikan.website/wp-json/wp/v2/posts/${this.props.match.params.id}`);
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
      console.log(this.state.post)
    return (
      <div>
        {this.props.id}
      </div>
    )
  };
    render() {
        const { post, error, loading } = this.state;
        console.log(Object.keys(post));
            
        //   return (
        //     <div>

        //       <p>{this.props.match.params.id}</p>
        //     </div>
        //   )


        return (
            <div>
			{ Object.keys( post ).length ? (
            <div key={post.id}>
            <div className="breadcrumb-wrapper">
            <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/all-posts">Article</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{renderHTML(post.title.rendered)}</li>
                </ol>

            </nav>
        </div>

        </div>


        <section className="banner banner__single-post banner__standard">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="post-title-wrapper">
                        
                        {/* <div className="btn-group">
                            <a href="#" className="cat-btn bg-color-blue-one">TECHNOLOGY</a>
                        </div> */}

                        <h2 className="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">{renderHTML(post.title.rendered)}</h2>
                        <div className="post-metas banner-post-metas m-t-xs-20">
                            <ul className="list-inline">
                                <li><a href="#" className="post-author post-author-with-img"><img 
                                            src={ Author } alt="author" />Dee Afrikan</a></li>
                                <li><i className="feather icon-clock"></i><Moment fromNow>{post.date}</Moment></li>
                                <li><a href="#"><i className="feather icon-share-2"></i>230 Shares</a></li>
                            </ul>
                        </div>

                    </div>

                </div>


                <div className="col-lg-6">
                    <img src={ post.jetpack_featured_media_url } alt="" className="img-fluid" width="600" height="600" />
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


                                <p> 
                                {renderHTML(post.content.rendered)}
                                </p>
                            </div>

                        </article>


                        <div className="post-shares m-t-xs-60">
                            <div className="title">SHARE:</div>
                            <ul className="social-share social-share__rectangular">
                               <TwitterIcon size={32} round={true} />
                               <FacebookIcon size={32} round={true} />
                               <LinkedinIcon size={32} round={true} />
                               <WhatsappIcon size={32} round={true} />

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

import React, { Component } from 'react'

export default class Recent extends Component {
    render() {
        return (
        <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="axil-latest-post">
                        <div className="media post-block m-b-xs-20">
                            <figure className="fig-container">
                                <a href="post-format-standard.html"><img src="assets/images/post/latest-post.jpg"
                                        alt="latest post" /></a>
                                <div className="post-cat-group m-b-xs-10">
                                    <a href="business.html"
                                        className="post-cat cat-btn bg-color-blue-one">TECHNOLOGY</a>
                                </div>
                            </figure>
                            <div className="media-body">
                                <h3 className="axil-post-title hover-line hover-line"><a
                                        href="post-format-standard.html">VR Is the Use of Computer Technology to
                                        Create a Simulated Environment.</a></h3>
                                <div className="post-metas">
                                    <ul className="list-inline">
                                        <li>By <a href="#" className="post-author">Ashley Graham</a></li>
                                        <li><i className="dot">.</i>July 23, 2019</li>
                                        <li><a href="#"><i className="feather icon-activity"></i>5k Views</a></li>
                                        <li><a href="#"><i className="feather icon-share-2"></i>230 Shares</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="axil-recent-news">
                        <div className="section-title d-flex m-b-xs-30">
                            <h2 className="axil-title">Recent News</h2>
                            <a href="#" className="btn-link ml-auto">ALL RECENT NEWS</a>
                        </div>
                        <div className="axil-content">
                            <div className="media post-block m-b-xs-30">
                                <a href="post-format-standard.html" className="align-self-center"><img
                                        className=" m-r-xs-30" src="assets/images/post/post-img-18.jpg" alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html"
                                            className="post-cat cat-btn bg-color-purple-one">TRAVEL</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">50 Years After The Moon Landing: How
                                            Close Is Space Travel, Really?</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="#">Amachea Jajah</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="media post-block m-b-xs-30">
                                <a href="post-format-standard.html" className="align-self-center"><img
                                        className=" m-r-xs-30" src="assets/images/post/post-img-19.jpg" alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html"
                                            className="post-cat cat-btn bg-color-green-one">LIFESTYLE</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Trip To Iqaluit In Nunavut A Canadian
                                            Arctic City</a>
                                    </h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="#">Xu Jianhong</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="media post-block m-b-xs-30">
                                <a href="post-format-standard.html" className="align-self-center"><img
                                        className=" m-r-xs-30" src="assets/images/post/post-img-20.jpg" alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html"
                                            className="post-cat cat-btn bg-color-blue-two">COOKING</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Tesla’s Cooking Up A New Way To Wire
                                            Its Cars, Report Says</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="#">Ahmad Nazeri</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="media post-block m-b-xs-30">
                                <a href="post-format-standard.html" className="align-self-center"><img
                                        className=" m-r-xs-30" src="assets/images/post/post-img-21.jpg" alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html"
                                            className="post-cat cat-btn bg-color-red-two">WILDLIFE</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">African Nations Are Struggling To Save
                                            Their Wildlife</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="#">Sergio Pliego</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

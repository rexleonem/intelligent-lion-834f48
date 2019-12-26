import React, { Component } from 'react'

export default class Videos extends Component {
    render() {
        return (
<section className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
<div className="container">
    <div className="section-title title-white m-b-xs-40">
        <h2 className="axil-title">Videos</h2>
        <a href="#" className="btn-link ml-auto">All VIDEOS</a>
    </div>
    <div className="row">
        <div className="col-lg-8">
            <div className="axil-img-container flex-height-container">
                <a href="post-format-video.html" className="d-block h-100">
                    <img src="assets/images/video-post/video-post-latest.jpg" alt="video post"
                        className="w-100" />
                    <div className="grad-overlay grad-overlay__transparent"></div>
                    <div className="video-popup video-play-btn video-play-btn__big"></div>
                </a>
                <div className="media post-block grad-overlay__transparent position-absolute m-b-xs-30">
                    <div className="media-body media-body__big">
                        <div className="axil-media-bottom mt-auto">
                            <h3 className="axil-post-title hover-line hover-line"><a
                                    href="post-format-standard.html">Maui
                                    By Air The
                                    Best Way Around The
                                    Island</a></h3>
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
        </div>
        <div className="col-lg-4">
            <div className="axil-content">
                <div className="media post-block post-block__small post-block__on-dark-bg m-b-xs-30">
                    <a href="post-format-video.html" className="align-self-center">
                        <img className=" m-r-xs-30" src="assets/images/video-post/video-post-1.jpg" alt="" />
                        <span className="video-play-btn video-play-btn__small"></span>
                    </a>
                    <div className="media-body">
                        <div className="post-cat-group">
                            <a href="post-format-video.html" className="post-cat color-blue-three">BEAUTY</a>
                        </div>
                        <h3 className="axil-post-title hover-line hover-line"><a
                                href="post-format-video.html">Stocking
                                Your
                                Restaurant Kitchen Finding
                                Reliable
                                Sellers</a></h3>
                        <div className="post-metas">
                            <ul className="list-inline">
                                <li>By <a href="#">Amachea Jajah</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="media post-block post-block__small post-block__on-dark-bg m-b-xs-30">
                    <a href="post-format-video.html" className="align-self-center"><img className=" m-r-xs-30"
                            src="assets/images/video-post/video-post-2.jpg" alt="" />
                        <span className="video-play-btn video-play-btn__small"></span></a>
                    <div className="media-body">
                        <a href="post-format-video.html" className="post-cat color-green-three">TRAVEL</a>
                        <h3 className="axil-post-title hover-line hover-line"><a
                                href="post-format-video.html">Trip To
                                Iqaluit In
                                Nunavut A Canadian
                                Arctic
                                City</a>
                        </h3>
                        <div className="post-metas">
                            <ul className="list-inline">
                                <li>By <a href="#">Xu Jianhong</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="media post-block post-block__small post-block__on-dark-bg m-b-xs-30">
                    <a href="post-format-video.html" className="align-self-center"><img className=" m-r-xs-30"
                            src="assets/images/video-post/video-post-3.jpg" alt="" />
                        <span className="video-play-btn video-play-btn__small"></span></a>
                    <div className="media-body">
                        <a href="post-format-video.html" className="post-cat color-red-two">SPORTS</a>
                        <h3 className="axil-post-title hover-line hover-line"><a
                                href="post-format-video.html">Get The Boot A Birds Eye Look Into Mcse
                                Boot Camps</a></h3>
                        <div className="post-metas">
                            <ul className="list-inline">
                                <li>By <a href="#">Ahmad Nazeri</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="media post-block post-block__small post-block__on-dark-bg m-b-xs-30">
                    <a href="post-format-video.html" className="align-self-center"><img className=" m-r-xs-30"
                            src="assets/images/video-post/video-post-4.jpg" alt="" />
                        <span className="video-play-btn video-play-btn__small"></span></a>
                    <div className="media-body">
                        <a href="post-format-video.html" className="post-cat color-blue-one">FASHION</a>
                        <h3 className="axil-post-title hover-line hover-line"><a
                                href="post-format-video.html">To Keep
                                Makeup
                                Looking Fresh Take A
                                Powder</a></h3>
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
</section>
        )
    }
}

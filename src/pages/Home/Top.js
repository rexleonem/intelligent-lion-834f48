import React, { Component } from 'react'

export default class Top extends Component {
    render() {
        return (
            <section className="section-gap section-gap-top__with-text top-stories bg-grey-light-three">
            <div className="container">
                <div className="section-title m-b-xs-40">
                    <h2 className="axil-title">Top Stories</h2>
                    <a href="#" className="btn-link">All Top Stories</a>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="axil-img-container m-b-xs-30">
                            <a href="post-format-standard.html" className="d-block">
                                <img src="assets/images/top-stories/top-stories-1.jpg" alt="gallery images"
                                    className="w-100" />
                                <div className="grad-overlay"></div>
                            </a>
                            <div className="media post-block position-absolute">
                                <div className="media-body media-body__big">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html" className="post-cat cat-btn bg-color-purple-one">TRAVEL</a>
                                    </div>
                                    <div className="axil-media-bottom">
                                        <h3 className="axil-post-title hover-line hover-line"><a
                                                href="post-format-standard.html">World Travel Holdings Will Be Honored
                                                Alongside Other Recipients</a></h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#" className="post-author">Ashley Graham</a></li>
                                                <li><i className="dot">.</i>July 17, 2019</li>
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
                        <div className="axil-img-container m-b-xs-30">
                            <a href="post-format-standard.html" className="d-block">
                                <img src="assets/images/top-stories/top-stories-2.jpg" alt="gallery images"
                                    className="w-100" />
                                <div className="grad-overlay"></div>
                            </a>
                            <div className="media post-block position-absolute">
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html"
                                            className="post-cat cat-btn btn-mid bg-color-purple-two">BUEATY</a>
                                    </div>
                                    <div className="axil-media-bottom">
                                        <h3 className="axil-post-title hover-line hover-line"><a
                                                href="post-format-standard.html">Unmatched Toner Cartridge Quality 20
                                                Less Than Oem Price</a></h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li><a href="post-format-standard.html"
                                                        className="d-flex align-items-center"><span>By Amachea
                                                            Jajah</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="axil-img-container m-b-xs-30">
                            <a href="post-format-standard.html" className="d-block">
                                <img src="assets/images/top-stories/top-stories-3.jpg" alt="gallery images"
                                    className="w-100" />
                                <div className="grad-overlay"></div>
                            </a>

                            <div className="media post-block position-absolute">
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="business.html"
                                            className="post-cat cat-btn btn-mid bg-color-blue-three">TECHNOLOGY</a>
                                    </div>
                                    <div className="axil-media-bottom">
                                        <h3 className="axil-post-title hover-line hover-line"><a
                                                href="post-format-standard.html">Stocking Your
                                                Restaurant Kitchen Finding
                                                Reliable
                                                Sellers</a></h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li><a href="#" className="d-flex align-items-center"><span>By David
                                                            Brown</span></a></li>
                                            </ul>
                                        </div>
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

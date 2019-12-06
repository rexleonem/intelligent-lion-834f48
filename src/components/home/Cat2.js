import React, { Component } from 'react'
import BlogImg from '../../images/home-1/7-lqip.jpg'
import Side1 from './Side1'

export default class Cat2 extends Component {
    render() {
        return (
            <div className="container">
            <hr className="mt-0 mb-5" />
            <div className="row">
              <div className="col-xl-8 mb-6">
                <h6 className="text-red mb-4">Most discussed</h6>
                <div className="row blog-post">
                  <div className="col-md-6 col-lg-4">
                    <article>
                    <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span>
                          </div>
                          <h2 className="entry-title"><a href="blog-single-post.html">Suspendisse viverra massa eget nibh ultricies mollis</a></h2>
                        </header>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <article>
                    <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Humour</a></span>
                          </div>
                          <h2 className="entry-title"><a href="blog-single-post.html">Etiam commodo eros non erat tristique congue</a></h2>
                        </header>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <article>
                    <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span>
                          </div>
                          <h2 className="entry-title"><a href="blog-single-post.html">Pellentesque ipsum magna neu ultrices vitae rutrum</a></h2>
                        </header>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <article>
                    <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span>
                          </div>
                          <h2 className="entry-title"><a href="blog-single-post.html">Aenean mattis tortor ac sapien congue molestie.</a></h2>
                        </header>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <article>
                    <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span>
                          </div>
                          <h2 className="entry-title"><a href="blog-single-post.html">Pellentesque ipsum magna neu ultrices vitae rutrum</a></h2>
                        </header>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <article>
                      <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                      </figure>
                      <div className="entry-content-wrapper">
                        <header className="entry-header">
                          <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span>
                          </div>
                          <h2 className="entry-title"><a href="blog-single-post.html">Aenean mattis tortor ac sapien congue molestie.</a></h2>
                        </header>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="text-center align-items-center"><a className="btn btn-light" href="#">View More</a></div>
              </div>
              <Side1 />
          </div>
          </div>
         )
    }
}

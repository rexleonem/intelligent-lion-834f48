import React, { Component } from 'react'
import BlogImg from '../../images/home-1/16-lqip.jpg'
import Side2 from './Side2'

export default class Cat6 extends Component {
    render() {
        return (
            <div className="accent-bg-color mt-4 pt-8 pb-5">
            <div className="container">
              <h6 className="text-pink mb-4">Top Video</h6>
              <div className="row">
                <div className="col-lg-8">
                  <div className="row blog-post">
                    <div className="col-lg-6">
                      <article>
                      <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                        </figure>
                        <div className="entry-content-wrapper">
                          <header className="entry-header">
                            <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                            </div>
                            <h2 className="entry-title"><a href="blog-single-post.html">Donec varius magna vitae velit consectetur efficitur</a></h2>
                          </header>
                        </div>
                      </article>
                    </div>
                    <div className="col-lg-6">
                      <article>
                      <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                        </figure>
                        <div className="entry-content-wrapper">
                          <header className="entry-header">
                            <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                            </div>
                            <h2 className="entry-title"><a href="blog-single-post.html">Eget porttitor lorem libero esse liberavisse possesodales</a></h2>
                          </header>
                        </div>
                      </article>
                    </div>
                    <div className="col-lg-6">
                      <article>
                      <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                        </figure>
                        <div className="entry-content-wrapper">
                          <header className="entry-header">
                            <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                            </div>
                            <h2 className="entry-title"><a href="blog-single-post.html">Donec varius magna vitae velit consectetur efficitur</a></h2>
                          </header>
                        </div>
                      </article>
                    </div>
                    <div className="col-lg-6">
                      <article>
                      <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                        </figure>
                        <div className="entry-content-wrapper">
                          <header className="entry-header">
                            <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                            </div>
                            <h2 className="entry-title"><a href="blog-single-post.html">Eget porttitor lorem libero esse liberavisse possesodales</a></h2>
                          </header>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <Side2 />
              </div>
            </div>
          </div>
        )
    }
}

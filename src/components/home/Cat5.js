import React, { Component } from 'react'
import BlogImg from '../../images/home-1/29-lqip.jpg'

export default class Cat1 extends Component {
    render() {
        return (
            <div className="container">
            <h6 className="text-green mb-4">Travel &amp; Food</h6>
            <div className="row blog-post">
              <div className="col-md-6 col-lg-3">
                <article>
                  <figure className="entry-media"><img className="lozad" src={BlogImg} data-src={BlogImg} alt="Entry BlogImg"/>
                  </figure>
                  <div className="entry-content-wrapper">
                    <header className="entry-header">
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Photography</a></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><a href="blog-single-post.html">Quid enim mihi potest esse optatius quam cum</a></h2>
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
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Humour</a></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><a href="blog-single-post.html">Num igitur utiliorem tibi huncm esse posse</a></h2>
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
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Photography</a></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><a href="blog-single-post.html">Omnes enim iucundum motum sensus hilaretur</a></h2>
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
                      <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Humour</a></span><span className="entry-meta-date"> <i className="far fa-clock"></i>NOV 11, 2020</span>
                      </div>
                      <h2 className="entry-title"><a href="blog-single-post.html">Curabitur pretium lectusnc ine fermentum fermen</a></h2>
                    </header>
                  </div>
                </article>
              </div>
            </div>
          </div>
            )
    }
}

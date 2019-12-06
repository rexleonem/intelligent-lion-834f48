import React, { Component } from 'react'
import Ad from '../../images/holder/ads.jpg'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
          <aside className="widget">
            <form className="search-form" role="search">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Search" name="q" />
                <div className="input-group-append">
                  <button className="btn bt" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </aside>
          <aside className="widget">
            <h5 className="widget-title">Top Posts</h5>
            <ul className="simple-entry-list blog-post">
              <li>
                <div className="reveal-title">1</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Aenean mattis tortor acsem sapien congue molestie.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="reveal-title">2</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Vestibulum ante ipsumnec primis orci faucibus luctus.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="reveal-title">3</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Sapien etiam eu odio vitae bibendum vitaenun lorem.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="reveal-title">4</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Etiam eu odio sapien posuere vitae vitae lorem.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
          <aside className="widget widget_categories">
            <h5 className="widget-title">Categories</h5>
            <ul>
              <li><a href="blog-right-sidebar.html">Culture</a></li>
              <li><a href="blog-right-sidebar.html">Creativity</a></li>
              <li><a href="blog-right-sidebar.html">Opinion </a></li>
              <li><a href="blog-right-sidebar.html">Weddings</a></li>
              <li><a href="blog-right-sidebar.html">Automobiles</a></li>
              <li><a href="blog-right-sidebar.html">Living</a>
                <ul>
                  <li><a href="blog-right-sidebar.html">Education</a></li>
                  <li><a href="blog-right-sidebar.html">Travel</a></li>
                  <li><a href="blog-right-sidebar.html">Food</a>
                    <ul>
                      <li><a href="blog-right-sidebar.html">Traditional</a></li>
                      <li><a href="blog-right-sidebar.html">Famous </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="blog-right-sidebar.html">Humor</a></li>
              <li><a href="blog-right-sidebar.html">Sports</a></li>
              <li><a href="blog-right-sidebar.html">Health</a></li>
              <li><a href="blog-right-sidebar.html">Photography</a></li>
            </ul>
          </aside>
          <aside className="widget"><img src={Ad} alt="Ads" /></aside>
            </div>
        )
    }
}

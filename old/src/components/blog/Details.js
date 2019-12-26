import React, { Component } from 'react'
import ArticleImg from '../../images/home-1/2.jpg'
import Avatar from '../../images/profile-pic.jpg'
import { Link } from 'react-router-dom'


export default class Details extends Component {
    render() {
        return (
            <div>
                <div className="blog-post single-post">
                <article>
                    <div className="entry-content-wrapper">
                    <div className="entry-content">
                        <header className="entry-header text-md-center">
                        <h1 className="entry-title">Genean mattis tortor ac sapien congue molestie eget dolor</h1>
                        <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><Link to="blog-three-col.html">Photography</Link></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span><span className="entry-meta-date"> <i className="far fa-clock"></i>April 13, 2020</span><span className="entry-comment-count"><Link to="#comments"><i className="far fa-comment-alt"></i>2</Link></span><span className="entry-comment-count"></span>
                        </div>
                        </header>
                        <div className="entry-media alignwide"><img src={ArticleImg} alt="Card cap" /></div>
                        <p>Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan laoreet. Curabitur feugiat posuere odio nec tincidunt. Pellentesque sagittis nibh venenatis sapieni congue consectetur. Integer nulla nunc, efficitur sit amet sagittis sed, suscipit et magna. Nulla porttitor neque non dapibus nec elit tristique sagittis. Maecenas viverra tortor sed magna volutpat, sed semper leo interdum.</p>
                        <p>Morbi sed leo fermentum, pretium nisi in, maximus nisl. Ut nisi risus, mattis nec quam nec, luctus rutrum leo. Quisque dignissim facilisis sem, eu fringilla elit. Donec eget nunc semper, vulputate risus eu, pellentesque nisl. Sed laoreet risus turpis, vitae tincidunt tellus laoreet ut.</p>
                        <h3>Heading Goes Here</h3>
                        <p>Proin blandit vulputate diam quis pulvinar. Fusce non libero sodales, dictum sem sed, ornare enim. Maecenas efficitur est vel placerat eleifend. Donec vel quam sollicitudin, bibendum odio eget, varius elit. Fusce semper mauris ut elit dignissim, ac imperdiet massa ullamcorper.</p>
                        <blockquote>
                        <p>Donec ac nunc quis nisl aliquet hendrerit. Pellentesque ultricies, felis id iaculis feugiat, mauris nunc viverra lectus, quis egestas felis nisi non ante. Donec bibendum magna vitae eros lacinia ornare. Nullam cursus sollicitudin lacus. Maecenas congue.</p>
                        <cite>— Someone famous in Source Title</cite>
                        </blockquote>
                        <p>Suspendisse viverra massa eget nibh ultricies mollis. Donec sed lorem tincidunt, ultrices ligula ut, euismod sem. Mauris nec tincidunt diam. Donec varius magna vitae velit consectetur efficitur. Sed rutrum aliquet ligula.</p>
                        <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Nulla volutpat aliquam velit 
                            <ul>
                            <li>Phasellus iaculis neque varius </li>
                            <li>Purus sodales ultricies libero
                                <ul> 
                                <li>Phasellus iaculis neque ornare enim</li>
                                <li>Purus sodales ultricies nisl aliquet</li>
                                <li>Eget porttitor lorem libero sodales</li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        </ul>
                        <p>Praesent blandit nibh ac justo auctor pretium. Maecenas mauris metus, vulputate ac volutpat sit amet, facilisis quis odio. Nam ut commodo neque. Cras pellentesque nisi, id laoreet nibh. Aliquam in ante elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nec ante odio. Curabitur metus lectus, euismod sed purus ut, hendrerit porttitor enim. </p>
                    </div>
                    </div>
                </article>
                </div>

                <div className="comments comments-area container-small mb-7" id="comments">
                <h2 className="comments-title h5">One Reply to “Hello world!”</h2>
                <ol className="comment-list">
                    <li className="comment even thread-even depth-1" id="comment-1">
                    <article className="comment-body" id="div-comment-1">
                        <footer className="comment-meta">
                        <div className="comment-author vcard"><img className="avatar" alt="profile pic" src={Avatar} height="100" width="100" /><b className="fn"><Link className="url" href="https://www.energeticthemes.com/" rel="external nofollow">Anushey Malik</Link></b><span className="says">says:</span></div>

                        <div className="comment-metadata"><Link to="/maintenance">
                            <time datetime="2018-07-29T21:45:09+00:00">July 29, 2019 at 9:45 pm</time></Link></div>

                        <div className="comment-content">
                            <p>Aliquam in ante elit. Praesent blandit nibh ac justo auctor pretium. Maecenas mauris metus, vulputate ac volutpat sit amet, facilisis quis odio. Nam ut commodo neque. Suspendisse viverra massa eget nibh.</p>
                        </div>

                        <div className="reply"><Link className="comment-reply-link" href="#">Reply</Link></div>
                        </footer>
                    </article>

                    </li>
                </ol>
                <div className="comment-respond" id="respond">
                    <h3 className="comment-reply-title" id="reply-title">Leave a comment</h3>
                    <form className="comment-form" id="commentform" action="#" method="post" novalidate="">
                    <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                    <p className="comment-form-comment form-group">
                        <label for="comment">Comment</label>
                        <textarea className="form-control" id="comment" name="comment" cols="45" rows="5" required="required"></textarea>
                    </p>
                    <p className="comment-form-author form-group">
                        <label for="author">Name <span className="required">*</span></label>
                        <input className="form-control" id="author" name="author" type="text" value="" size="30" maxlength="245" required="required" />
                    </p>
                    <p className="comment-form-email form-group">
                        <label for="email">Email <span className="required">*</span></label>
                        <input className="form-control" id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required="required" />
                    </p>
                    <p className="comment-form-url form-group">
                        <label for="url">Website</label>
                        <input className="form-control" id="url" name="url" type="url" value="" size="30" maxlength="200" />
                    </p>
                    <p className="form-submit">
                        <input className="submit btn btn-dark" id="submit" name="submit" type="submit" value="Post Comment" />
                    </p>
                    </form>
                </div>

                </div>
            </div>
        )
    }
}

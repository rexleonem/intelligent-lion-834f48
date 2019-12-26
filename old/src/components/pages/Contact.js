import React, { Component } from 'react'
import ContactImg from '../../images/page/2.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div>
            <article  className="mt-6 mb-7">
            <div  className="entry-content">
              <header  className="entry-header">
                <h1  className="entry-title">Get in touch.</h1>
              </header>
              <p>Morbi sed leo fermentum pretium nisi in, maximus nisl. Ut nisi risus mattis nec quam nec luctus rutrum leo. Quisque dignissim facilisis sem, eu fringilla elit. Donec eget nunc semper vulputate risus eu pellentesque nisl.</p>
              <div  className="entry-media alignwide"><img src={ContactImg} alt="team"/></div>
              <p>Pellentesque sagittis nibh venenatis sapieni congue consectetur. Integer nulla nunc, efficitur sit amet sagittis sed, suscipit et magna. Nulla porttitor neque non dapibus nec elit tristique sagittis.</p>
              <p><i  className="far fa-envelope-open mr-2"></i><a href="mailto:afrikasveryown@gmail.com"  className="__cf_email__">afrikasveryown@gmail.com</a><br/><i  className="fas fa-mobile-alt mr-2"></i>+234 813 279 3416<br /><i  className="fas fa-map-pin mr-2"></i>7 Kafi Street Alausa Ikeja, Lagos Nigeria </p>
              <form id="contact-form" method="post" action="#">
                <div  className="row mb-4">
                  <div  className="col-md-6">
                    <input  className="form-control" id="form_name" type="text" name="name" placeholder="Name" required/>
                    <div  className="help-block with-errors"></div>
                  </div>
                  <div  className="col-md-6">
                    <input  className="form-control" id="form_email" type="email" name="email" placeholder="Email" required/>
                    <div  className="help-block with-errors"></div>
                  </div>
                </div>
                <div  className="mb-4">
                  <textarea  className="form-control" id="form_message" name="message" placeholder="Message" rows="5" required></textarea>
                  <div  className="help-block with-errors"></div>
                </div>
                <button  className="btn btn-dark disabled" type="submit">Submit</button>
                <div  className="loading-spinner"></div>
                <div  className="messages mt-20px"></div>
              </form>
            </div>
          </article>
          </div>
        )
    }
}

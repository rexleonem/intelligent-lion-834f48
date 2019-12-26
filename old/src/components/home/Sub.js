import React, { Component } from 'react'

export default class Sub extends Component {
    render() {
        return (
            <div className="bg-moss pt-8 pb-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="mb-2">Subscribe Now</h3>
                  <p className="mb-35px">Be the first to get our contents, subscribe to our mailing list.</p>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="input-group">
                    <input className="form-control" type="email" placeholder="Your email" required />
                    <div className="input-group-md-append">
                      <button className="btn btn-dark" type="submit">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         )
    }
}

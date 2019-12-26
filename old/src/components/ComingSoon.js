import React, { Component } from 'react'

export default class ComingSoon extends Component {
    render() {
        return (
            <div className="container mt-80px mb-80px" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <div className="row">
              <div className="col-md-5">
                <h3>Coming Soon</h3>
              </div>
              <div className="col-lg-8 mb-7">
          <div className="countdown mb-4" id="getting-started"></div>
          <p>
            We're working on this part of our website, please stay tuned.
          </p>
        </div>

            </div>
          </div>        )
    }
}

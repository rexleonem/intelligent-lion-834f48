import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return ( 
            <div className="error-404-banner bg-grey-light-three">
            <div className="container">
                <div className="error-404-content text-center">
                    <div className="txt-404 tilt-this">404</div>
                    <div className="error-inner-content">
                        <h1 className="h1 m-b-xs-20 m-b-md-40">
                            Sorry, This Page Doesn't Exist.
                        </h1>
                        <Link to="/" className="btn btn-primary">BACK TO HOMEPAGE</Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

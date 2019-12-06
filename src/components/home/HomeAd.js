import React, { Component } from 'react'
import Ad from '../../images/holder/ad2.png'

export default class HomeAd extends Component {
    render() {
        return (
          <div className="container mb-6"><img src={Ad} alt="Ad" /></div>
        )
    }
}

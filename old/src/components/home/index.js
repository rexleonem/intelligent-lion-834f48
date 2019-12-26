import React, { Component } from 'react'
import Slider from './Slider'
import Cat1 from './Cat1'
import Cat2 from './Cat2'
import Cat3 from './Cat3'
import Cat4 from './Cat4'
import Cat5 from './Cat5'
import Cat6 from './Cat6'
import HomeAd from './HomeAd'
import Sub from './Sub'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Cat1 />
                <Cat2 />
                <HomeAd />
                <Cat3 />
                <Cat4 />
                <Cat5 />
                <Cat6 />
                <Sub />
            </div>
        )
    }
}

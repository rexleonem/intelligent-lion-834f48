import React, { Component } from 'react'
import moment from 'moment'

export default class time extends Component {
    constructor(props) {
        super(props);
        this.date = props.time;
      }
    
      render() {
          const time = moment(this.date || moment.now()).fromNow();
            return (
            <div>
                <p>{time}</p>
            </div>
        )
    }
}

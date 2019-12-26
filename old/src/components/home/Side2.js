import React, { Component } from 'react'
import BlogImg from '../../images/home-1/29-lqip.jpg'
import { Link } from 'react-router-dom'
const API = 'AIzaSyCfPRKndX6DoiiJ4trcoxmLgPdjNKaBftA'
const channelID = 'UCNNv1_xBpnYynxPM0jLH4fg'
const result = 6;
const ytUrl = 'https://www.youtube.com/watch/'

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class Side2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: [],
      vids: []
    };
  }
componentDidMount(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const vids = responseJson.items;
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt, vids});
      })
      .catch((error) => {
        console.error(error);
      });
}


    render() {
      const {vids} = this.state
      console.log(vids);
        return (

            <div className="col-lg-4">
              {vids.length ? (
            <div className="row blog-post blog-list-style">
                { vids.map( vid => (
            <div className="col-lg-12">
              <article>
              <figure className="entry-media"><img className="lozad" src={vid.snippet.thumbnails.default.url} data-src={vid.snippet.thumbnails.default.url} alt="Entry BlogImg"/>
                </figure>
                <div className="entry-content-wrapper">
                  <header className="entry-header">
                    <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Videos</a></span>
                    </div>
                    <h2 className="entry-title"><a href={`${ytUrl}`+vid.id.videoId} target="_blank" rel="noopener noreferrer">{vid.snippet.title}</a></h2>
                  </header>
                </div>
              </article>
            </div>
              ))}
              </div>
            ) : ''}

          </div>
  )
    }
}

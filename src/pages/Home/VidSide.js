import React, { Component } from 'react'
import TimeAgo from '../../components/time'
import { Link } from 'react-router-dom'
const API = 'AIzaSyDEXTxNap_qCSeNNYhVbehg4gKh9gAu3oM'
// const API = 'AIzaSyCfPRKndX6DoiiJ4trcoxmLgPdjNKaBftA'
// const channelID = 'UCCUNHXF8R_xBnmR2HwvT2SA'
const channelID = 'UCNNv1_xBpnYynxPM0jLH4fg'
const result = 4;
const embedUrl = 'https://www.youtube.com/embed/'
const ytUrl = 'https://www.youtube.com/watch/'


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class VidSide extends Component {

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
            <div className="axil-content">
             { vids.map( vid => (
            <div className="media post-block post-block__small post-block__on-dark-bg m-b-xs-30">
                <a href={`${ytUrl}`+vid.id.videoId} target="_blank" rel="noopener noreferrer" className="align-self-center">
                    <img className=" m-r-xs-30" src={vid.snippet.thumbnails.default.url} alt="" />
                    <span className="video-play-btn video-play-btn__small"></span>
                </a>
                <div className="media-body">
                    <div className="post-cat-group">
                        <a href="post-format-video.html" className="post-cat color-blue-three">VIDEOS</a>
                    </div>
                    <h3 className="axil-post-title hover-line hover-line"><a href={`${ytUrl}`+vid.id.videoId} target="_blank" rel="noopener noreferrer">{vid.snippet.title}</a></h3>
                    <div className="post-metas">
                        <ul className="list-inline">
                            <li><i className="feather icon-user"></i> <a href="#">{vid.snippet.channelTitle}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
              ))}
              </div>
        ) : '' }
        </div>
        )
    }
}

import React, { Component } from 'react'
import VidSide from './VidSide'
import TimeAgo from '../../components/time'
import { Link } from 'react-router-dom'
const API = 'AIzaSyDEXTxNap_qCSeNNYhVbehg4gKh9gAu3oM'
// const API = 'AIzaSyCfPRKndX6DoiiJ4trcoxmLgPdjNKaBftA'
const channelID = 'UCNNv1_xBpnYynxPM0jLH4fg'
const result = 1;
const embedUrl = 'https://www.youtube.com/embed/'
const ytUrl = 'https://www.youtube.com/watch/'


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class Videos extends Component {

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
        <section className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
        <div className="container">
            <div className="section-title title-white m-b-xs-40">
                <h2 className="axil-title">Videos</h2>
                <a href="#" className="btn-link ml-auto">All VIDEOS</a>
            </div>

            <div className="row">
            {vids.length ? (
                <div className="col-lg-8">
                { vids.map( vid => (
                <div className="axil-img-container flex-height-container" key={vid.id.videoId}>
                    {/* <a href="post-format-video.html" className="d-block h-100"> */}
                    <a href={`${ytUrl}`+vid.id.videoId} target="_blank" rel="noopener noreferrer" className="d-block h-100">
                        <img src={vid.snippet.thumbnails.high.url} alt="video post"
                            className="w-100" />
                        <div className="grad-overlay grad-overlay__transparent"></div>
                        <div className="video-popup video-play-btn video-play-btn__big"></div>
                    </a>
                    <div className="media post-block grad-overlay__transparent position-absolute m-b-xs-30">
                        <div className="media-body media-body__big">
                            <div className="axil-media-bottom mt-auto">
                                <h3 className="axil-post-title hover-line hover-line"><a href={`${ytUrl}`+vid.id.videoId} target="_blank" rel="noopener noreferrer">{vid.snippet.title}</a></h3>
                                <div className="post-metas">
                                    <ul className="list-inline">
                                        <li>By <a href="#" className="post-author">{vid.snippet.channelTitle}</a></li>
                                        <li><i className="dot">.</i><TimeAgo time={vid.snippet.publishedAt} /></li>
                                        <li><a href="#"><i className="feather icon-activity"></i>5k Views</a></li>
                                        <li><a href="#"><i className="feather icon-share-2"></i>230 Shares</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
              </div>
            ) : '' }
        <VidSide />
        </div>
        </div>
        </section>
        )
    }
}

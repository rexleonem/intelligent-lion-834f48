import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import { axios } from 'axios';
import { Helmet } from 'react-helmet'

const TITLE = "Africa's Very Own - Videos"
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
const API = 'AIzaSyDEXTxNap_qCSeNNYhVbehg4gKh9gAu3oM'
// const API = 'AIzaSyCfPRKndX6DoiiJ4trcoxmLgPdjNKaBftA'
const channelID = 'UCNNv1_xBpnYynxPM0jLH4fg'
const result = 50;
const embedUrl = 'https://www.youtube.com/embed/'
const ytUrl = 'https://www.youtube.com/watch/'

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class AllVideos extends Component {

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
            function truncateString(str, num) {
            // Clear out that junk in your trunk
            if (str.length > num) {
              return str.slice(0, num) + "...";
            } else {
              return str;
            }
          }            
        return (
        <div>
         {vids.length ? (
		<div className="recent-news-wrapper__fluid p-t-lg-80 p-t-xs-60 p-b-xs-20">
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
         <div className="custom-fluid-container">
            <div className="row masonry-grid">
            { vids.map( vid => (
                <div className="grid-item col-lg-4" key={vid.id.videoId}>
                    <div
                        className="media post-block post-block__fluid post-block__mid flex-column m-b-xs-30 m-b-md-70 m-b-lg-70">
                             <Link to={`/video/${vid.id.videoId}`} className="align-self-center w-100">
                            <div className="video-popup video-play-btn video-play-btn__big"></div>
                            <img className="w-100 m-b-xs-30" src={vid.snippet.thumbnails.high.url} alt="video post" /></Link>
                        <div className="media-body">
                            <div className="post-cat-group m-b-xs-15">
                                <a href="#" className="post-cat cat-btn btn-big bg-color-red-two">VIDEOS</a>
                            </div>
                            <h3 className="axil-post-title hover-line"><a href={`${ytUrl}`+vid.id.videoId} target="_blank" rel="noopener noreferrer">{vid.snippet.title}</a></h3>
                            <p className="mid">{vid.snippet.description}</p>


                        </div>
                    </div>
                </div>
              ))}
              </div>
        </div>
       </div>
    ) : '' }
     </div>
        )
    }
}

import React, { Component } from 'react'
import AboutImg from '../../images/page/1.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <article className="mt-5 mb-7">
                    <div className="entry-content">
                        <header className="entry-header">
                        <h1 className="entry-title">Who we are</h1>
                        </header>
                        <p>Morbi sed leo fermentum pretium nisi in, maximus nisl. Ut nisi risus mattis nec quam nec luctus rutrum leo. Quisque dignissim facilisis sem, eu fringilla elit. Donec eget nunc semper vulputate risus eu pellentesque nisl.</p>
                        <div className="entry-media alignwide"><img src={AboutImg} alt="Card image cap" /></div>
                        <p>Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan laoreet. Curabitur feugiat posuere odio nec tincidunt. Pellentesque sagittis nibh venenatis sapieni congue consectetur. Integer nulla nunc, efficitur sit amet sagittis sed, suscipit et magna. Nulla porttitor neque non dapibus nec elit tristique sagittis. Maecenas viverra tortor sed magna volutpat, sed semper leo interdum.</p>
                        <blockquote>
                        <p>Donec ac nunc quis nisl aliquet hendrerit. Pellentesque ultricies, felis id iaculis feugiat, mauris nunc viverra lectus, quis egestas felis nisi non ante. Donec bibendum magna vitae eros lacinia ornare. Nullam cursus sollicitudin lacus. Maecenas congue.</p>
                        <cite>— Someone famous in Source Title</cite>
                        </blockquote>
                        <p>Morbi sed leo fermentum, pretium nisi in, maximus nisl. Ut nisi risus, mattis nec quam nec, luctus rutrum leo. Quisque dignissim facilisis sem, eu fringilla elit. Donec eget nunc semper, vulputate risus eu, pellentesque nisl. Sed laoreet risus turpis, vitae tincidunt tellus laoreet ut.</p>
                        <h5>Proin blandit 2012</h5>
                        <p>Proin blandit vulputate diam quis pulvinar. Fusce non libero sodales, dictum sem sed, ornare enim. Maecenas efficitur est vel placerat eleifend. Donec vel quam sollicitudin, bibendum odio eget, varius elit.</p>
                        <h5>Aliquam in ante 2016</h5>
                        <p>Suspendisse viverra massa eget nibh ultricies mollis. Donec sed lorem tincidunt, ultrices ligula ut, euismod sem. Mauris nec tincidunt diam. Donec varius magna vitae velit consectetur efficitur. Sed rutrum aliquet ligula.</p>
                    </div>
                 </article>

            
            </div>
        )
    }
}

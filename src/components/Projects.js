import React from 'react'
import watchbuddy from '../assets/watchbuddy.png'
import stackadon from '../assets/stackadon.png'
import stockviewer from '../assets/stockviewer.png'
import ReactPlayer from 'react-player'

export default function Projects() {
  return (
    <div>
      <div className="comps" id="projects">
        <div className="contents">
          <p>
            <img src={watchbuddy} height={'200px'} width={'407px'} />
          </p>
          <h6>Stack:</h6>
          <p>
            GraphQL | Express | React | Redux | Node.js | PostgreSQL | Cypress
          </p>
          <a href="https://watchbuddy-frontend.herokuapp.com/">Checkout</a>
        </div>
        <div className="contents">
          <p>
            <img src={stackadon} height={'200px'} width={'408px'}></img>
          </p>
          <h6>Stack:</h6>
          <p>Express | React | Redux | Node.js | PostgreSQL | Socket.io</p>
          <a href="https://stackadon.herokuapp.com/">Checkout</a>
          <a href="https://github.com/stackadon-casino">Code</a>
        </div>
        <div className="contents">
          <p>
            <img src={stockviewer} height={'200px'} width={'355px'}></img>
          </p>
          <h6>Stack:</h6>
          <p>Electron | React | Redux | Node.js | FlowJS</p>
          <a href="https://github.com/itizidon/stock-viewer">Code</a>
        </div>
      </div>
      <div className="video">
        <div className="inVideo">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PFWivM4SjKk&feature=youtu.be"
            controls={true}
          />
          <h6>Stack:</h6>
          <p>React-Native | Redux | Node.js | PostgreSQL | Edamam | Spoonacular | Sequelize | Express </p>
          <a href="https://github.com/Recipix-1909">Code</a>
        </div>
      </div>
    </div>
  )
}

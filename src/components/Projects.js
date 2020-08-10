import React from 'react'
import watchbuddy from '../assets/watchbuddy.png'
import stackadon from '../assets/stackadon.png'
import stockviewer from '../assets/stockviewer.png'
import ReactPlayer from 'react-player'

export default function Projects() {
  return (
    <div className="projectsPadding">
      <div className="projectsWrapper">
        <div className="projectsTitle">
          <h1 className="projectsLink">Projects</h1>
        </div>
        <div className="smallprojects">
          <div className="comps" id="projects">
            <div className="contents">
              <div>
                <p>
                  <img
                    src={watchbuddy}
                    height={'200px'}
                    width={'407px'}
                    alt="watchbuddy"
                  />
                </p>
                <div className="description">
                  <h5>Watch Buddy</h5>
                  <div className="descriptionNoTitle">
                    <p style={{ width: '250px' }} id="test">
                      This is a web application that sellers post services and
                      buyers can purchase these services as well as schedule a
                      time.
                    </p>
                  </div>
                </div>
                <div className="stackwrapper">
                  <p className="stack">
                    Stack: GraphQL | Express | React | Redux | Node.js |
                    PostgreSQL | Cypress
                  </p>
                </div>
                <a
                  className="links"
                  href="https://watchbuddy-frontend.herokuapp.com/"
                >
                  Checkout
                </a>
              </div>
            </div>
            <div className="contents">
              <p>
                <img
                  src={stackadon}
                  height={'200px'}
                  width={'408px'}
                  alt="stackadon"
                ></img>
              </p>
              <div className="description">
                <h5>Stackadon</h5>
                <div className="descriptionNoTitle">
                  <p style={{ width: '300px' }} id="test">
                    This is a web application that allows users to play
                    blackjack live with other players. There are multiple rooms
                    with different stakes. Players get to choose how many decks
                    they want to play with or they can just spectate other
                    players.
                  </p>
                </div>
              </div>
              <div className="stackwrapper">
                <p className="stack">
                  Stack: Express | React | Redux | Node.js | PostgreSQL |
                  Socket.io
                </p>
              </div>
              <a className="links" href="https://stackadon.herokuapp.com/">
                Checkout
              </a>
              <a className="links" href="https://github.com/stackadon-casino">
                Code
              </a>
            </div>
            <div className="contents">
              <p>
                <img
                  src={stockviewer}
                  height={'200px'}
                  width={'355px'}
                  alt="stockviewer"
                ></img>
              </p>
              <div className="description">
                <h5>Stock-Viewer</h5>
                <div className="descriptionNoTitle">
                  <p style={{ width: '250px' }} id="test">
                    This is a desktop application that lets a user look up a
                    certain stock. The application will show the stock price
                    history in 1 graph and some indicators in another graph.
                  </p>
                </div>
              </div>
              <div className="stackwrapper">
                <p className="stack">
                  Stack: Electron | React | Redux | Node.js | FlowJS
                </p>
              </div>
              <a
                className="links"
                href="https://github.com/itizidon/stock-viewer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="videowrapper">
            <div className="inVideo">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=PFWivM4SjKk&feature=youtu.be"
                controls={true}
              />
              <div className="description">
                <h5>Recipix</h5>
                <div className="descriptionNoTitle">
                  <p style={{ width: '500px' }} id="test">
                    This is a mobile application that allowed users to keep
                    track of items in their fridge. Users can scan items in
                    using the product's barcode and add an expiration date. The
                    app will also show recipes that can be made using the
                    ingredients already there. This selection can also be
                    filtered by different types of diets and ingredients.
                  </p>
                </div>
              </div>
              <div className="stackwrapper">
                <p className="stack">
                  Stack: React-Native | Redux | Node.js | PostgreSQL | Edamam |
                  Spoonacular | Sequelize | Express
                </p>
              </div>
              <a className="links" href="https://github.com/Recipix-1909">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import selfie from './images/selfie.png'
import assassins from './images/assassins.png'
import controller from './images/controller.png'
import library from './images/library.png'
import sackboy from './images/sackboy.png'
import spiderman from './images/spiderman.png'
import steam from './images/steam.png'
import twitch from './images/twitch.png'
import upcoming from './images/upcoming.png'


import './App.css';

function App() {
  return (
    <div className="App-body">
      <div className="App-main">
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src={ selfie } alt="" />
              <h3>Stephenna Jemae</h3>
              <p>Pro Member</p>
            </div>
            <div className="links">
                <div className="link">
                  <img src={ twitch } alt=""/>
                  <h2>Streams</h2>
                </div>
                <div className="link">
                  <img src={ steam } alt=""/>
                  <h2>Games</h2>
                </div>
                <div className="link">
                  <img src={ upcoming } alt=""/>
                  <h2>New</h2>
                </div>
                <div className="link">
                  <img src={ library } alt=""/>
                  <h2>Library</h2>
                </div>
            </div>
            <div className="pro">
              <h2>Join pro for exclusive content</h2>
              <img src={ controller } alt=""/>
            </div>
          </div>
          <div className="games">
            <div className="status">
              <h1>Active Games</h1>
              <input type="text"/>
            </div>
            <div className="cards">
              <div className="card">
                <img src={ assassins } alt=""/>
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
              <div className="card">
                <img src={ assassins } alt=""/>
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
              <div className="card">
                <img src={ assassins } alt=""/>
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
    
  );
}

export default App;

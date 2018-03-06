import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <img
            className="ghLogo"
            src={require('./images/GitHub-Mark-Light-120px-plus.png')}
            alt="github logo"
            style={{ padding: '20px 0px 0px 0px', height: '100px' }}
          />
        </div>
        <h1>
          Github Battle:
          <br />
          Challenge your friends!
        </h1>
        <h3>Input any 2 Github usernames to compare stats and see who comes out on top!</h3>

        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;

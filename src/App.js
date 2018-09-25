import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import config from './config';

//3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL
class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Our App Changed',
      gifs: []
    };
  }

  componentDidMount = () => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${config.api_key}&q=batman`)
      .then(res => {
        this.setState({
          gifs: [...res.data.data]
        });
      });
  }

  changeTitle = () => {
    this.setState({
      title: 'Something Else'
    });
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>

        <input type="text" onChange={this.handleChange} value={this.state.title} />

        <button onClick={this.changeTitle}>Change Title</button>

        <h1>Gifs</h1>

        <div className="row">
          {this.state.gifs.map(gif => (
            <div key={gif.id} className="image" style={{ backgroundImage: `url(${gif.images.downsized.url})` }}></div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// h1.innerText = 'Something';
// div.appendChild(h1);

// export class Component {
//   componentDidMount() {
//     // does some stuff
//   }
  
// }



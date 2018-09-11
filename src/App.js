import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Our App Changed'
    };
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



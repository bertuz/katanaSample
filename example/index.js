import React from 'react';
import { render } from 'react-dom';
import Katana from '../src/Katana';

import './styles/index.styl';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {letter: '🍅'};
  }

  componentDidMount() {
    let alphabet = 'Aabcdefghijklmnopqrstuvwxyz1234567890@'.toUpperCase().split('');
    var pos = 0;
    window.setInterval(()=>{
      this.setState({letter: alphabet[pos]});
      pos = ++pos % alphabet.length;
    }, 1000);
  }

  render() {
    return (
      <div>
        <Katana>{this.state.letter}</Katana>
      </div>
    );
  }
}

render(
  <Demo />,
  document.getElementById('container')
);

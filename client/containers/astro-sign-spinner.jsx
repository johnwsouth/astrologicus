import React from 'react';

export default class AstroSignSpinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSigns: []
    };
    this.fillSigns = this.fillSigns.bind(this);
  }

  fillSigns() {
    var zodiacImgPathArr = ['img/aquarius.png', 'img/aries.png', 'img/cancer.png', 'img/capricorn.png', 'img/gemini.png', 'img/leo.png', 'img/libra.png', 'img/pisces.png', 'img/sagittarius.png', 'img/scorpio.png', 'img/taurus.png', 'img/virgo.png'];
    var zodiacArr = [];
    for (var i = 0; i < 12; i++) {
      zodiacArr.push(<img className='zodiacSign' src={zodiacImgPathArr[i]}></img>);
    }
    return (zodiacArr);
  }

  render() {
    return (this.fillSigns());
  }
}

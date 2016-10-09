import React from 'react';
import './styles/index.styl'

var audio = new Audio('https://drive.google.com/uc?export=download&id=0BwHGMLOUYMrZeVZoekdfMHoyQk0');

export default class Katana extends React.Component {
  get IDPrefix() {
    return 'SkewedShade';
  }

  componentWillMount() {
		this.addShadingEffect();
  }

  addShadingEffect() {
    var css = `.content .cover span::before{content: '${this.props.children}';}`,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.setAttribute("id", `${this.IDPrefix}`);
    style.type = 'text/css';

    if (style.styleSheet)
      style.styleSheet.cssText = css;
    else
      style.appendChild(document.createTextNode(css));

    head.appendChild(style);
  }

  componentWillUnmount() {
    let el = document.getElementsById(`${this.IDprefix}`);
    el.parentNode.removeChild( el );
  }

  componentWillUpdate() {
    let el = document.getElementById(this.IDPrefix);
    el.parentNode.removeChild( el );
  }

	componentDidUpdate() {
  		this.addShadingEffect();
  }

  constructor(props) {
    super(props);
  }

  clangore() {
    audio.play();
  }

  render() {
    return (
      <span className="letterbox" onClick={()=> this.clangore()} >
        <span className="content">
          <span className="letter">{this.props.children}</span>
          <span className="cover">
            <span></span>
          </span>
        </span>
      </span>
    );
  }
}

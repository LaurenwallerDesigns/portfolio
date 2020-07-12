import React from 'react';
import './App.css';
import './style.scss';
import Header from './header.js';
import Arrows from './arrows.js';
import Experience from './experience.js';
import Work from './work.js';
import Footer from './Footer.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.arrowClick = this.arrowClick.bind(this);
  }
   componentDidMount() {
    this.insertText();
  }

  componentWillUnmount() {
  }
  // HTML insert for blurbs

  insertText() {
    const blurbs = document.querySelectorAll(".blurbs div");
    console.log(blurbs);

    blurbs.forEach( b => {
      const div = document.createElement("div");
      div.setAttribute("class", "div-blurb-text");
      const titleNode = document.createElement("P");
        titleNode.setAttribute("class", "blurb-title");
      const ul = document.createElement("UL");
      const li = document.createElement("LI");
      const liTwo = document.createElement("LI");
      const liThree = document.createElement("LI");
        ul.appendChild(li);
        ul.appendChild(liTwo);
        ul.appendChild(liThree);
        div.appendChild(titleNode);
        div.appendChild(ul);
        b.appendChild(div);
    })
  }

  arrowClick() {
    const sections = document.getElementsByClassName("section");
    const firstSection = sections[0];
    console.log(firstSection);

  }
  render () {
    return (
      <body>
      <Header />
      <Arrows
        href = {this.arrowClick}
        onClick= {this.arrowClick()} />
      <Experience />
      <Work />
      <Footer />
      </body>
    );
  }
}

export default App;

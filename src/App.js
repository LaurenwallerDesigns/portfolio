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

    };
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
      const titleNode = document.createElement("P");
        titleNode.setAttribute("class", "blurb-title");
      const ul = document.createElement("UL");
      const li = document.createElement("LI");
      const liTwo = document.createElement("LI");
      const liThree = document.createElement("LI");
        ul.appendChild(li);
        ul.appendChild(liTwo);
        ul.appendChild(liThree);
        b.appendChild(titleNode);
        b.appendChild(ul);
    })
  }
  render () {
    return (
      <body>
      <Header />
      <Arrows />
      <Experience />
      <Work />
      <Footer />
      </body>
    );
  }
}

export default App;

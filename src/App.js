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
      clickCount: 0,
      section: "#experience"
    };
    this.arrowClick = this.arrowClick.bind(this);
  }
   componentDidMount() {
    this.insertText();
    window.addEventListener('scroll', this.scrollTop);
  }

  componentWillUnmount() {
  }
  // HTML insert for blurbs

  scrollTop() {
    const sectionOne = document.querySelector('#header').offsetTop;
    const sectionTwo = document.querySelector('#experience').offsetTop;
    const sectionThree = document.querySelector('#work').offsetTop;
    const sectionFour = document.querySelector('#footer').offsetTop - 600;

    const winScroll = window.pageYOffset;
    const sectionPos = [sectionOne, sectionTwo, sectionThree, sectionFour];
    console.log(sectionPos);
    console.log(winScroll);
    sectionPos.map((sec, index) => {
      if(winScroll >= sec) {
        return this.sectionIndex = index;
        console.log(this.sectionIndex);
      }
    });
    if(this.sectionIndex === 0) {
        const upArrow = document.getElementById('upArrow');
            upArrow.classList.add('hide');
    } else if(this.sectionIndex === 3) {
      const downArrow = document.getElementById('downArrow');
          downArrow.classList.add('hide');
    } else {
      const downArrow = document.getElementById('downArrow');
          downArrow.classList.remove('hide');
      const upArrow = document.getElementById('upArrow');
          upArrow.classList.remove('hide');
    }
  }

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

  arrowClick(event) {
    const button = event.target.id;
    const sections = ["#header", "#experience", "#work", "#footer"];
    if(button === "downArrow"){
      // this.clickCount = this.state.clickCount + 1;
      const next = sections[this.sectionIndex + 1];
      console.log(this.sectionIndex);
      this.setState({
        section: next
      });

    }else if (button === "upArrow"){
      const prev = sections[this.sectionIndex - 1];
      this.setState({
        section: prev
      });
    }
  }

  render () {
    return (
      <body>
      <Header />
      <Arrows
        href={this.state.section}
        onClick= {this.arrowClick} />
      <Experience />
      <Work />
      <Footer />
      </body>
    );
  }
}

export default App;

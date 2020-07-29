import React from 'react';
import './App.css';
import './style.scss';
import Header from './header.js';
import Arrows from './arrows.js';
import Experience from './experience.js';
import Work from './work.js';
import Footer from './Footer.js';
import Checkbox from './checkbox';
import Prevprojects from './prevproject';

const projects = [{id: "prev-one",
                  classes: ["react", "html", "css"],
                  display: true},
                {id: "prev-two",
                classes: ["AJAX", "html", "css"],
                display: true},
                {id: "prev-three",
                classes: ["html", "css", "js"],
              display: true},
                {id: "prev-four",
                classes: ["html", "css", "js"],
              display: true},
                {id: "prev-five",
                classes: ["html", "css", "js"],
              display: true},
                {id: "prev-six",
                classes: ["html", "css", "js", "Bootstrap"],
              display: true},
                {id: "prev-seven",
                classes: ["html", "css", "js"],
              display: true},
                {id: "prev-eight",
                classes: ["html", "JSON-T", "SCSS"],
                display: true}
            ];

const OPTIONS = ["react", "js", "html", "AJAX", "css", "SCSS", "Less", "JSON-T", "Bootstrap"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      section: "#experience",
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      projects: projects
    };
    this.arrowClick = this.arrowClick.bind(this);
    this.filterBtn = this.filterBtn.bind(this);
  }
   componentDidMount() {
    this.insertText();
    this.filterProjects();
    document.getElementById('upArrow').classList.add('hide');
    window.addEventListener('scroll', this.scrollTop);
    window.addEventListener("scroll", this.drawSvg);
  }

  componentWillUnmount() {
  }
  // HTML insert for blurbs

  scrollTop() {
    const sectionOne = document.querySelector('#header').offsetTop;
    const sectionTwo = document.querySelector('#experience').offsetTop - 100;
    const sectionThree = document.querySelector('#work').offsetTop - 70;
    const sectionFour = document.querySelector('#footer').offsetTop - 800;
    const winScroll = window.pageYOffset;
    const sectionPos = [sectionOne, sectionTwo, sectionThree, sectionFour];
    sectionPos.forEach(s => {
      if(winScroll >= s) {
        this.section = s;
      }
    });

    const position = sectionPos.indexOf(this.section);
    if(position < 1){
      const upArrow = document.getElementById('upArrow');
            upArrow.classList.add('hide');
    }else if (position >= 3){
      const downArrow = document.getElementById('downArrow');
            downArrow.classList.add('hide');
    }else {
      const upArrow = document.getElementById('upArrow');
          upArrow.classList.remove('hide');
      const downArrow = document.getElementById('downArrow');
          downArrow.classList.remove('hide');
    }
    return position;
  }

  drawSvg() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var line = document.getElementById("line");
    var length = line.getTotalLength();
      line.style.strokeDasharray = length;
      line.style.strokeDashoffset = length;
    var draw = length * scrollpercent;



    const blurbOne = document.querySelector('.blurbs .container:nth-child(1)');
    const blurbTwo = document.querySelector('.blurbs .container:nth-child(2)');
    const blurbThree = document.querySelector('.blurbs .container:nth-child(3)');
    const blurbFour = document.querySelector('.blurbs .container:nth-child(4)');
    const blurbFive = document.querySelector('.blurbs .container:nth-child(5)');

    const blurbs = [blurbOne, blurbTwo, blurbThree, blurbFour, blurbFive];

    blurbs.forEach( b => {
      var position =  b.getBoundingClientRect();
      if(position.top >= 70 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
        b.classList.add('drawNow');
      } else if(position.top < window.innerHeight && position.bottom >= 0) {
        console.log('Element is partially visible in screen');
        b.classList.remove('drawNow');
      }
    })

    var position =  blurbOne.getBoundingClientRect();
    console.log(position.top,
                position.bottom);
    // checking whether fully visible
    if(position.top >= 70 && position.bottom <= window.innerHeight) {
      console.log('Element is fully visible in screen');
      const blurbOne = document.querySelector('.blurbs .container:nth-child(1)');
      blurbOne.classList.add('drawNow');
    } else if(position.top < window.innerHeight && position.bottom >= 0) {
      console.log('Element is partially visible in screen');
      const blurbOne = document.querySelector('.blurbs .container:nth-child(1)');
      blurbOne.classList.remove('drawNow');

    }

    // Reverse the drawing (when scrolling upwards)
    line.style.strokeDashoffset = length - draw;
    var lineTwo = document.getElementById("line-two");
    var length = lineTwo.getTotalLength();
      lineTwo.style.strokeDasharray = length;
      lineTwo.style.strokeDashoffset = length;
    var draw = length * scrollpercent;

    // Reverse the drawing (when scrolling upwards)
    lineTwo.style.strokeDashoffset = length - draw;

    if(scrollpercent > 0.98){
      const footer = document.querySelector('footer');
      footer.classList.add('draw');
    }else {
      const footer = document.querySelector('footer');
      footer.classList.remove('draw');
    }
  }

  insertText() {
    const blurbs = document.querySelectorAll(".blurbs .blurb-container");
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
      const position = this.scrollTop();
      const next = sections[position + 1];
      this.setState({
        section: next
      });

    }else if (button === "upArrow"){
      const position = this.scrollTop();
      const prev = sections[position - 1];
      this.setState({
        section: prev
      });
    }
  }

  filterBtn(event) {
    const filterMenu = document.getElementById('filter-menu');
    filterMenu.classList.toggle('hide');
    const filterBtn = document.getElementById('filterBtn');
    filterBtn.classList.toggle('hide');
    const title = document.getElementById('titlebtnContainer');
    title.classList.toggle('titlebtnContainer-hide');
  }

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.selected = [];

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        this.selected.push(checkbox);
      });
      this.filterProjects(this.selected);
  };

  filterProjects(array) {
    const filteredProjects = [];
    if(array === undefined || array.length < 1) {
      this.setState({
        projects: projects
      });
    }else {
      for(let project = 0; project < projects.length; project++) {
          const classes = projects[project].classes;
          classes.forEach((c) => array.forEach((s) => {
            if(c === s) {
              filteredProjects.push(projects[project]);
            }
          }))

      }
      //Filters through projects to only display the project once
      const result = filteredProjects.filter((item, index) => {
        console.log(
          item, 
          index, 
          filteredProjects.indexOf(item),
          filteredProjects.indexOf(item) === index);
        return filteredProjects.indexOf(item) === index
      });

      this.setState({
        projects: result
      });
    }
  }


  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);


  render () {
    //document.documentElement.style.setProperty('--vh', `${vh}px`);

    //console.log(vh);
    this.projects = this.state.projects.map((id, index) => {
      return <Prevprojects 
              id={id.id}
              key={index}
              classes={id.classes}
              />
    });

    const windowWidth = window.innerWidth;

    const start = windowWidth * 0.2;
    const startTwo = windowWidth * 0.8;

    return (
      <React.Fragment>
      <div className="svg-container">
        <div className="svg-item">
          <svg id="mySVG" version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 659 522" enable-background="new 0 0 659 522" preserveAspectRatio="none">
            <path class="path" width="100%" height="100%" fill="none" stroke="#28AFB0" stroke-width="5" stroke-miterlimit="10" id="line" d="M2.5 2.5v517" stroke-dasharray="2042 300" stroke-dashoffset="2342"/>
          </svg>
        </div>
        <div className="svg-item">
          <svg id="mySVGTwo" version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 659 522" enable-background="new 0 0 659 522" preserveAspectRatio="none">

            <path id="line-two" class="path" width="100%" height="100%" fill="none" stroke="#28AFB0" stroke-width="5" stroke-miterlimit="10" d="M656.5,2.5v517" stroke-dasharray="2042 300" stroke-dashoffset="2342" />
          </svg>
        </div>
      </div>
        <Header 
        />
        <Arrows
          href={this.state.section}
          onClick= {this.arrowClick} />
        <Experience />
        <Work 
          onclick={this.filterBtn}
          handleFilter={this.createCheckboxes()}
          handleFormSubmit={this.handleFormSubmit}
          selectAll={this.selectAll}
          deselectAll={this.deselectAll}
          filteredProjects={this.projects}
          />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;


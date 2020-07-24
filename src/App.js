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
      console.log('the if');
      this.setState({
        projects: projects
      });
    }else {
      console.log('the else');
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

      console.log(result);
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
    
    
    const one = document.getElementById('one');
    console.log(one);
    //document.documentElement.style.setProperty('--vh', `${vh}px`);

    //console.log(vh);
    this.projects = this.state.projects.map((id, index) => {
      return <Prevprojects 
              id={id.id}
              key={index}
              classes={id.classes}
              />
    });

    return (
      <React.Fragment>
      <Header />
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


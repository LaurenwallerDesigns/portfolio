import React from 'react';
import Blurbs from './Blurbs.js';

class Qual extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {

    	};
  	}
   componentDidMount() {
  	}

  	componentWillUnmount() {
  	}	
	render () {
		return (
			<section id="experience">
				<h2 className="section-title"> Experience </h2>
					<p className="section-subtitle">
						5+ years
						<br />
					</p>
					<div className="blurbs">
						<Blurbs
							id="one"
							className="right blurb-container" />
						<Blurbs
							id="two"
							className="left blurb-container" />
						<Blurbs
							id="three"
							className="right blurb-container" />
						<Blurbs
							id="four"
							className="left blurb-container" />
						<Blurbs
							id="five"
							className="right blurb-container" />
					</div>

			</section>
		);
	}
}

export default Qual;
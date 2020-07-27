import React from 'react';
import Filter from './filter.js';

class Work extends React.Component {
	constructor(props) {
    super(props);
    this.state = {};
  	}
	render () {
		return (
			<section className="work section" id="work">
				<div id="titlebtnContainer" className="titlebtnContainer">
					<h2 className="sectionthree-title">
						My Work
					</h2>
					<Filter 
						onClick={this.props.onclick}
						handleFilter={this.props.handleFilter}
						handleFormSubmit={this.props.handleFormSubmit}
	        			selectAll={this.props.selectAll}
	        			deselectAll={this.props.deselectAll}
					/>
				</div>
				<div className="flex-project">
					{this.props.filteredProjects}
				</div>
			</section>
		);
	}
}

export default Work;
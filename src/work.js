import React from 'react';
import Filter from './filter.js';

class Work extends React.Component {
	render () {
		return (
			<section className="work section" id="work">
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
				<div className="flex-project">
					{this.props.renderP}
				</div>
			</section>
		);
	}
}

export default Work;
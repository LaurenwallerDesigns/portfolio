import React from 'react';

class Filter extends React.Component {
	render () {
		return (
			<div className="div-filter">
				<button onClick={this.props.onClick} className='Button-Background' id="filterBtn">Filter By</button>
				<div id="filter-menu" className="hide">
				<button onClick={this.props.onClick} className="close"> X </button>
				</div>
			</div>
		);
	}
}

export default Filter;
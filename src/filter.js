import React from 'react';
import Checkbox from './checkbox';

class Filter extends React.Component {
	render () {
		return (
			<React.Fragment>
				<div className="div-filter">
					<button onClick={this.props.onClick} className='Button-Background' id="filterBtn">Filter By</button>
				</div>
				<div id="filter-menu" className="hide">
					<button onClick={this.props.onClick} className="close"> X </button>
					<p className="option-title">
						Filter Menu
					</p>
					<form onSubmit={this.props.handleFormSubmit}>
						{this.props.handleFilter}
						<div className="buttons">
							<button
			                  type="button"
			                  className="btn-all btn"
			                  onClick={this.props.selectAll}
			                >
			                  Select All
			                </button>
			                <button
			                  type="button"
			                  className="btn btn-deselect"
			                  onClick={this.props.deselectAll}
			                >
			                  Deselect All
			                </button>
			                <button type="submit" className="btn btn-done" onClick={this.props.onClick}>
			                  Done
			                </button>
		                </div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Filter;
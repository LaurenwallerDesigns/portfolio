import React from 'react';
import Checkbox from './checkbox';

class Filter extends React.Component {
	render () {
		return (
			<div className="div-filter">
				<button onClick={this.props.onClick} className='Button-Background' id="filterBtn">Filter By</button>
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
			                <button type="submit" className="btn btn-done">
			                  Done
			                </button>
		                </div>
					</form>
  				</div>
			</div>
		);
	}
}

export default Filter;
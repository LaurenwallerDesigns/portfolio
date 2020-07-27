import React from 'react';

class Blurbs extends React.Component {
	render () {
		return (
			<div className="container">
				<div id={this.props.id} className={this.props.className}>
				</div>
			</div>
		);
	}
}

export default Blurbs;
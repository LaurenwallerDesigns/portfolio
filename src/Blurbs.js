import React from 'react';
import oval from './img/oval.svg';

class Blurbs extends React.Component {
	render () {
		return (
			<div id={this.props.id}>
				<img src={oval} />
			</div>
		);
	}
}

export default Blurbs;
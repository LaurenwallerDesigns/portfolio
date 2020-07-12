import React from 'react';
import downArrow from './img/downarrow.svg';
import upArrow from './img/uparrow.svg';


class Arrows extends React.Component {
	render () {
		return (
			<div className="arrows">
				<img src={upArrow} className='arrow' />
				<a href=".section" onClick={this.props.onClick}>
				<img src={downArrow} className='arrow' />
				</a>
			</div>
		);
	}
}

export default Arrows;
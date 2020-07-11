import React from 'react';
import downArrow from './img/downarrow.svg';
import upArrow from './img/uparrow.svg';


class Arrows extends React.Component {
	render () {
		return (
			<div className="arrows">
				<img src={upArrow} className='arrow' />
				<img src={downArrow} className='arrow' />
			</div>
		);
	}
}

export default Arrows;
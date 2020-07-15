import React from 'react';
import downArrow from './img/downarrow.svg';
import upArrow from './img/uparrow.svg';


class Arrows extends React.Component {
	render () {
		return (
			<div className="arrows">
				<a href={this.props.href} onClick={this.props.onClick}>
					<img src={upArrow} className='arrow' id='upArrow' alt="" />
				</a>
				<a href={this.props.href} onClick={this.props.onClick}>
					<img src={downArrow} id='downArrow' className='arrow' alt="" />
				</a>
			</div>
		);
	}
}

export default Arrows;
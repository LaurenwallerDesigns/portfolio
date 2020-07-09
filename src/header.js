import React from 'react';
import downArrow from './img/downarrow.svg';
class Header extends React.Component {
	render () {
		return (
			<header>
				<div className="headerDesign">
					<h1 className="title"> Lauren Hamann </h1>
				</div>

				<div className="subtitle">
					<h2 className="subtitle-text">
						Front End Developer
						<br />

						<span>Portfolio</span>
					</h2>
				</div>
				<img src={downArrow} className='arrow' />
			</header>
		);
	}
}

export default Header;
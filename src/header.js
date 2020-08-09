import React from 'react';

class Header extends React.Component {
	render () {
		return (
			<header id="header">
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
			</header>
		);
	}
}

export default Header;
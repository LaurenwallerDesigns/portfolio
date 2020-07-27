import React from 'react';

class Header extends React.Component {
	render () {
		console.log(this.props.height);
		return (
			<header id="header">
				<div className="border">
					<div className="headerDesign">
						<h1 className="title"> Lauren Hamann </h1>
					</div>
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
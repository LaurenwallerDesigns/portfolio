import React from 'react';
import footersvg from './img/footer-svg.svg';

class Footer extends React.Component {
	render () {
		return (
			<div id="footer" className="wrapper section">
				<div id="outline">
					<div id="innerline">
						<footer>
							<h1 className='footer-title'> Contact Me </h1>
							<button className="email"> Email </button>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
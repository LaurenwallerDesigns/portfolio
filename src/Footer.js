import React from 'react';
import footersvg from './img/footer-svg.svg';

class Footer extends React.Component {
	render () {
		return (
			<div id="footer" className="wrapper section">
				<footer 
					style={{backgroundImage: "url(" + footersvg + ")"}}>
					<h1 className='footer-title'> Contact Me </h1>
					<button className="email"> Email </button>
				</footer>
			</div>
		);
	}
}

export default Footer;
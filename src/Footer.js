import React from 'react';
import footersvg from './img/footer-svg.svg';

class Footer extends React.Component {
	render () {
		return (
			<div id="footer" className="wrapper section" style={{height: '100%', position: 'relative'}}>
				<footer 
					style={{backgroundImage: "url(" + footersvg + ")", position: 'absolute', bottom: '0', left: "0px", marginBottom: '0'}}>
					<h1 className='footer-title'> Contact Me </h1>
					<button className="email"> Email </button>
				</footer>
			</div>
		);
	}
}

export default Footer;
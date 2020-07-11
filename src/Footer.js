import React from 'react';
import footersvg from './img/footer-svg.svg';

class Footer extends React.Component {
	render () {
		return (
			<div className="wrapper" style={{height: '100%', position: 'relative'}}>
				<footer 
					style={{backgroundImage: "url(" + footersvg + ")", width: window.innerWidth + 'px', height: "458px", position: 'absolute', bottom: '0', left: "0px", marginBottom: '0'}}>
					<h1 className='footer-title' style={{fontSize: "62px"}}> Contact Me </h1>
					<button className="email"> Email </button>
				</footer>
			</div>
		);
	}
}

export default Footer;
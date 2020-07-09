import React from 'react';
import footersvg from './img/footer-svg.svg';
import upArrow from './img/uparrow.svg';

class Footer extends React.Component {
	render () {
		return (
			<div className="wrapper" style={{height: '100%', position: 'relative'}}>
				<footer 
					style={{backgroundImage: "url(" + footersvg + ")", width: window.innerWidth + 'px', height: "458px", position: 'absolute', bottom: '0', left: "0px", marginBottom: '0'}}>
					<h1 className='footer-title' style={{position: 'absolute', top: '10%', left: '18%', fontSize: "62px"}}> Contact Me </h1>
					<button className="email" style={{position: 'absolute', top: '45%', left: '45%'}}> Email </button>
					<img src={upArrow} style={{position: 'absolute', top: '65%', left: '44%'}} className='arrow' />
				</footer>
			</div>
		);
	}
}

export default Footer;
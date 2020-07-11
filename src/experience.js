import React from 'react';
import Blurbs from './Blurbs.js';
import downArrow from './img/downarrow.svg';

class Qual extends React.Component {
	render () {
		return (
			<section>
				<h2 className="section-title"> Qualifications </h2>
					<p className="section-subtitle">
						5 years experience
						<br />
					</p>
					<div className="blurbs">
						<Blurbs
							id="one" />
						<Blurbs
							id="two" />
						<Blurbs
							id="three" />
						<Blurbs
							id="four" />
						<Blurbs
							id="five" />
					</div>

			</section>
		);
	}
}

export default Qual;
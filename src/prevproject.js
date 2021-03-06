import React from 'react';

const Prevprojects = ({ id, classes, arrowClick }) => (
	<div id={id} className="img">
		<button id="left-arrow" onClick={arrowClick}>&#8592;</button>
		<button id="right-arrow" onClick={arrowClick}>&#8594;</button>
	</div>

);

export default Prevprojects;


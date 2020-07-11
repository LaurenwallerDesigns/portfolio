import React from 'react';
import Filter from './filter.js';
import Prevprojects from './prevproject.js';

class Work extends React.Component {
	render () {
		return (
			<section className="work">
				<h2 className="sectionthree-title">
					My Work
				</h2>
				<Filter />
				<Prevprojects
					id="prev-one" />
				<Prevprojects
					id="prev-two" />
				<Prevprojects
					id="prev-three" />
				<Prevprojects
					id="prev-four" />
				<Prevprojects
					id="prev-five" />
				<Prevprojects
					id="prev-six" />
				<Prevprojects
					id="prev-seven" />
				<Prevprojects
					id="prev-eight" />
			</section>
		);
	}
}

export default Work;
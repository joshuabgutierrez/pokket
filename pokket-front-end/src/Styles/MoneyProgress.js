import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaHandHoldingUsd } from 'react-icons/fa';

const CircularProgressStyles = {
	root: {
		maxWidth: '100px'
	},
	path: {
		stroke: '#FFFFFF',
		transition: 'all 0.5s ease 0s'
	},
	trail: {
		stroke: '#dddddd',
		opacity: 0.7
	}
};

function MoneyProgress() {
	return (
		<React.Fragment>
			<CircularProgressbarWithChildren styles={CircularProgressStyles} value="50" strokeWidth="2">
				<FaHandHoldingUsd size="40" />
			</CircularProgressbarWithChildren>
		</React.Fragment>
	);
}

export default MoneyProgress;

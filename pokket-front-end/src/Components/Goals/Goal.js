import { Divider } from '@material-ui/core';
import React from 'react';
import { BsHouse } from 'react-icons/bs';
import styled from 'styled-components';
import LinearProgressBar from '../../Styles/LinearProgressBar';

const GoalContainer = styled.div`
	border: 1px solid #ddd;
	padding: 1em;
	display: flex;
	justify-content: space-around;
`;

function Goal() {
	return (
		<GoalContainer>
			<BsHouse size="35" />
			<Divider orientation="vertical" flexItem />
			<LinearProgressBar status="normal" />
		</GoalContainer>
	);
}

export default Goal;

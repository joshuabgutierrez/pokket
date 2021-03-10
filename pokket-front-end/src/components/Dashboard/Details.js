import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import { BsArrowUp as ArrowUp, BsArrowDown as ArrowDown } from 'react-icons/bs';

// Styled-components
const DetailsContainer = styled.div`
	border: 2px solid #000;
	border-radius: 5px;
	padding: 2em;
	height: auto;
`;

const DetailsMain = styled.main`
	margin-top: 1em;
	display: flex;
	justify-content: space-between;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.85em;
`;

const StyledChip = styled(Chip)`
    background-color: ${({ status }) => (status === 'up' ? '#f50a3d' : '#25da4a')};
    color: #fff;
    margin-left: 1em;
`;

function Details({ type, today, weekly }) {
	return (
		<DetailsContainer>
			<header>
				<Typography variant="h6">{type}</Typography>
			</header>
			<DetailsMain>
				<section>
					<Typography variant="h4">${today}</Typography>
					<StyledDiv>
						<Typography variant="button">Today</Typography>
						<StyledChip status="down" size="small" icon={<ArrowDown color="#fff" />} label="39" />
					</StyledDiv>
				</section>
				<section>
					<Typography variant="h4">${weekly}</Typography>
					<StyledDiv>
						<Typography variant="button">Week</Typography>
						<StyledChip status="up" size="small" icon={<ArrowUp color="#fff" />} label="104" />
					</StyledDiv>
				</section>
			</DetailsMain>
		</DetailsContainer>
	);
}

export default Details;

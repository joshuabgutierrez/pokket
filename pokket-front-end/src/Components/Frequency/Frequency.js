import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { BsArrowUp } from 'react-icons/bs';

const FrequencyContainer = styled.div`
	background-color: #4357ad;
	max-width: 370px;
	border-radius: 10px;
	color: #fff;
	padding: 1em 2em;

	& section {
		display: flex;
		justify-content: space-between;
	}
`;

const FrequencyStats = styled.div`
	display: flex;
	align-items: center;

	& div {
		display: flex;
		align-items: center;
	}
`;

function Frequency() {
	return (
		<FrequencyContainer>
			<Typography variant="body1" align="left">
				Frequency of Transactions
			</Typography>
			<section>
				<div className="daily">
					<Typography variant="h3" align="left">
						6.1
					</Typography>
					<FrequencyStats>
						<h3>Daily</h3>
						<div>
							<BsArrowUp size="20" />
							<span>0.4</span>
						</div>
					</FrequencyStats>
				</div>
				<div className="daily">
					<Typography variant="h3">10.5</Typography>
					<FrequencyStats>
						<h3>Daily</h3>
						<div>
							<BsArrowUp size="20" />
							<span>0.4</span>
						</div>
					</FrequencyStats>
				</div>
			</section>
		</FrequencyContainer>
	);
}

export default Frequency;

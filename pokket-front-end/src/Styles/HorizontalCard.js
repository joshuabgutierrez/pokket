import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	border-radius: 10px;
	background-color: #007ee3;
	padding: 1em 2em;
	color: #fff;
	width: 100%;
	height: 180px;
`;

function HorizontalCard({ children }) {
	return <CardContainer>{children}</CardContainer>;
}

export default HorizontalCard;

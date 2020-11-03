import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	border-radius: 10px;
	background: #00b4db;
	background: -webkit-linear-gradient(45deg, #0083b0, #00b4db);
	background: linear-gradient(45deg, #0083b0, #00b4db);
	padding: 1em 2em;
	color: #fff;
	width: 100%;
	max-width: 370px;
	height: 180px;
`;

function HorizontalCard({ children }) {
	return <CardContainer>{children}</CardContainer>;
}

export default HorizontalCard;

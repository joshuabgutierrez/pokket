import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Avatar, Badge, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { IoIosNotifications } from 'react-icons/io';

// Styled components
const HeaderContainer = styled.header`
	color: #fff;
	background-color: #333456;
	padding: 1em 0;
	display: flex;
	justify-content: space-between;

	h3 {
		margin: 0;
	}
`;

const StyledLeftHeader = styled.div`
	display: flex;
	align-items: center;
	max-width: 270px;
	width: 100%;
	margin-left: 3em;
`;

const StyledInputText = styled.input`
	color: #fff;
	background-color: transparent;
	border: none;
	outline: none;
	width: 100%;
	margin-left: 0.25em;

	&::placeholder {
		color: #fff;
	}
`;

const StyledRightHeader = styled.div`
	width: 100%;
	max-width: 300px;
	display: flex;
	align-items: center;
	color: #fff;
`;

const StyledUserDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

// Material Ui styling
const useStyles = makeStyles((theme) => ({
	root: {
		color: '#fff',
		marginLeft: '1em',
		borderBottom: 'none'
	},
	fullWidth: {
		maxWidth: '60%'
	}
}));

function Header() {
	const classes = useStyles();

	return (
		<HeaderContainer>
			<StyledLeftHeader>
				<AiOutlineSearch size="25" />
				<StyledInputText type="text" placeholder="Hi Victoria! Please click here to search..." />
			</StyledLeftHeader>
			<StyledRightHeader>
				<Badge badgeContent={1} color="primary">
					<IoIosNotifications size="35" />
				</Badge>
				<StyledUserDetails>
					<Avatar
						alt="Victoria James"
						src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
					/>
					<FormControl className={classes.fullWidth} fullWidth="true">
						<InputLabel className={classes.root}>Victoria James</InputLabel>
						<Select>
							<MenuItem value="Update Profile">Update Profile</MenuItem>
							<MenuItem value="Sign Out">Sign Out</MenuItem>
						</Select>
					</FormControl>
				</StyledUserDetails>
			</StyledRightHeader>
		</HeaderContainer>
	);
}

export default Header;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Avatar, Badge, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { IoIosNotifications } from 'react-icons/io';
import { BiMenuAltRight } from 'react-icons/bi';
import { TabPanelValueContext } from '../../Contexts/TabPanelValueContext';

// Styled components
const HeaderContainer = styled.header`
	color: #fff;
	background-color: #2c2c2c;
	padding: 1em 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

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

	@media (max-width: 599px) {
		display: none;
	}
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
	justify-content: center;
	align-items: center;
	color: #fff;

	@media (max-width: 700px) {
		width: auto;
		margin-right: 2em;
	}
`;

const StyledUserDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-left: 1em;

	@media (max-width: 700px) {
		width: auto;
	}
`;

const StyledFormControl = styled(FormControl)`
	@media (max-width: 700px) {
		display: none;
	}
`;

const MenuIcon = styled(BiMenuAltRight)`
	margin-left: 2em;
	display: none;

	@media (max-width: 599px) {
		display: block;
	}
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
	},
	defaultColor: {
		color: '#fff',
		marginLeft: '0.5em'
	}
}));

function Header() {
	const classes = useStyles();
	const { updateOpenState } = useContext(TabPanelValueContext);

	return (
		<HeaderContainer>
			<MenuIcon size="30" onClick={() => updateOpenState(true)} />
			<StyledLeftHeader>
				<AiOutlineSearch size="25" />
				<StyledInputText type="text" placeholder="Hi Mary! Please click here to search..." />
			</StyledLeftHeader>
			<StyledRightHeader>
				<Badge badgeContent={1} color="primary">
					<IoIosNotifications size="35" />
				</Badge>
				<StyledUserDetails>
					<Avatar
						alt="Mary Doe"
						src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
					/>
					<StyledFormControl className={classes.fullWidth} fullWidth={true}>
						<InputLabel className={classes.root}>Mary Doe</InputLabel>
						<Select value="" className={classes.defaultColor}>
							<MenuItem value="Update Profile">Update Profile</MenuItem>
							<MenuItem value="Sign Out">Sign Out</MenuItem>
						</Select>
					</StyledFormControl>
				</StyledUserDetails>
			</StyledRightHeader>
		</HeaderContainer>
	);
}

export default Header;

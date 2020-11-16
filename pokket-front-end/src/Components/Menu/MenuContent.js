import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ImMeter } from 'react-icons/im';
import { CgArrowsExchange } from 'react-icons/cg';
import { AiFillCreditCard } from 'react-icons/ai';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import { TabPanelValueContext } from '../../Contexts/TabPanelValueContext';

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#2c2c2c',
		color: '#fff',
		textTransform: 'capitalize'
	},

	paddingSpacing: {
		paddingBottom: '2.5em'
	},
	labelIcon: {
		fontSize: '16px',
		minWidth: 100,
		color: '#fff'
	},
	fullHeight: {
		minHeight: '100vh'
	}
}));

export default function VerticalTabs() {
	const classes = useStyles();

	const { value, updateValue } = useContext(TabPanelValueContext);

	const handleChange = (event, newValue) => {
		updateValue(newValue);
	};

	return (
		<div className={`${classes.root} ${classes.fullHeight} `}>
			<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}
				aria-label="Budget menu"
				TabIndicatorProps={{ style: { width: '5px' } }}
				indicatorColor="primary"
			>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<ImMeter size="20" />}
					label="Overview"
					{...a11yProps(0)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<CgArrowsExchange size="20" />}
					label="Transactions"
					{...a11yProps(1)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<AiFillCreditCard size="20" />}
					label="Accounts"
					{...a11yProps(2)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<AiOutlineDollarCircle size="20" />}
					label="Budget"
					{...a11yProps(3)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<GiTrophyCup size="20" />}
					label="Goals"
					{...a11yProps(4)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<AiFillSetting size="20" />}
					label="Settings"
					{...a11yProps(5)}
				/>
			</Tabs>
		</div>
	);
}

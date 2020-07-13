import React from 'react';
import { useLocation } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Header from './Header/Header';
import AdminNav from './AdminNav/AdminNav';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	title: {
		flexGrow: 1,
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			zIndex: theme.zIndex.drawer + 1,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function Layout(props) {
	const { children } = props;
	const classes = useStyles();
	const location = useLocation();

	const theme = createMuiTheme({
		overrides: {
			MuiInput: {
				underline: {
					borderBottom: '0px solid',
					'&&&&:hover': {
						borderBottom: '0px solid',
					},
					'&&&&:before': {
						borderBottom: '0px solid',
					},
					'&&&&:focus': {
						borderBottom: '0px solid',
					},
				},
			},
		},
		palette: {
			primary: {
				main: '#23395B',
			},
			secondary: {
				main: '#FB8B24',
			},
		},

	});

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root} style={{ height: '100%' }}>
				<main className={classes.content} id="main">
					<Header />
					{location.pathname.includes('admin') ? (<AdminNav />) : null}
					<div className="main_section" style={{ flexGrow: '1'}}>{children}</div>
					<div className="footer">
						<span>
							&copy; 2019-2020 &mdash; Delegación de Alumnos de Telecomunicación
						</span>
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default Layout;

import React, { useEffect, useState } from 'react';
import {
	BrowserRouter, Route,
	Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getSession } from '../utils/api/app/session';
import Welcome from './Welcome/Welcome';
import MyLockers from './MyLockers';
import Locations from './Locations';
import Payments from './Payments';
import Lockers from './Lockers';
import Users from './Users';
import Rentals from './Rentals';
import Requests from './Requests';
import Request from './Request';
import MyUser from './MyUser';
import ErrorView from './ErrorView';
import Layout from '../components/Layout';
import SignUp from './SignUp/SignUp';
import EndSession from './EndSession';

const App = () => {
	const loggedUser = useSelector((state) => state.loggedUser);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		getSession()
			.then(() =>	setIsLoaded(true));
	}, []);
	if (!isLoaded) {
		return (<CircularProgress style={{ position: 'fixed', top: '30%', left: '50%' }} />);
	}
	const loggedUserSwitch = (
		<Layout>
			<Switch>
				<Route exact path="/" component={MyLockers} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/myLockers" component={MyLockers} />
				<Route exact path="/request" component={Request} />
				<Route exact path="/admin/locations" component={Locations} />
				<Route exact path="/admin/payments" component={Payments} />
				<Route exact path="/admin/lockers" component={Lockers} />
				<Route exact path="/admin/users" component={Users} />
				<Route exact path="/admin/rentals" component={Rentals} />
				<Route exact path="/admin/requests" component={Requests} />
				<Route exact path="/me" component={MyUser} />
				<Route path="/500" render={(props) => <ErrorView {...props} code={500} />} />
				<Route render={(props) => <ErrorView {...props} code={404} />} />
			</Switch>
		</Layout>

	);
	const defaultSwitch = (
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route exact path="/signup" component={SignUp} />
			<Route path="/500" render={(props) => <ErrorView {...props} code={500} />} />
			<Route render={() => <EndSession />} />
		</Switch>
	);

	const routerSwitch = loggedUser.user ? loggedUserSwitch : defaultSwitch;
	return (
		<BrowserRouter>
			{ routerSwitch }
		</BrowserRouter>
	);
};

export default App;

import React, { Fragment } from 'react';
import {
	BrowserRouter, Route,
	Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import LogOut from './LogOut';
import Layout from '../components/Layout';
import SignUp from './SignUp/SignUp';
import EndSession from './EndSession';

const AppRouter = () => {
	const session = useSelector((state) => state.session);

	const adminRoutes = (
		<Fragment key="adminRoutes">
			<Route exact path="/admin/locations" component={Locations} />
			<Route exact path="/admin/payments" component={Payments} />
			<Route exact path="/admin/lockers" component={Lockers} />
			<Route exact path="/admin/users" component={Users} />
			<Route exact path="/admin/rentals" component={Rentals} />
			<Route exact path="/admin/requests" component={Requests} />
		</Fragment>
	);
	const userLogedSwitch = (
		<Layout>
			<Switch>
				<Route exact path="/" component={MyLockers} />
				<Route exact path="/logout" component={LogOut} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/myLockers" component={MyLockers} />
				<Route exact path="/request" component={Request} />
				<Route exact path="/me" component={MyUser} />
				{session.user && session.user.isAdmin ? adminRoutes : null}
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

	const routerSwitch = session.user ? userLogedSwitch : defaultSwitch;
	return (
		<BrowserRouter>
			{ routerSwitch }
		</BrowserRouter>
	);
};

export default AppRouter;

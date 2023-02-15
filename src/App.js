import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Header />
					<About />
				</Route>
				<Route path="/projects">
					<Header />
					<Projects />
				</Route>
				<Route path="/contact">
					<Header />
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
	}
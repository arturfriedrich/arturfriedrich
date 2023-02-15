import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Header />
					<About />
					<Footer />
				</Route>
				<Route path="/aboutme">
					<Header />
					<About />
					<Footer />
				</Route>
				<Route path="/projects">
					<Header />
					<Projects />
					<Footer />
				</Route>
				<Route path="/contact">
					<Header />
					<Contact />
					<Footer />
				</Route>
			</Switch>
		</Router>
	);
	}
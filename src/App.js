import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={
					<div>
						<Header />
					</div>
				}>
					
					{/* <About />
					<Footer /> */}
				</Route>
				{/* <Route path="/aboutme">
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
				</Route> */}
			</Routes>
		</Router>
	);
	}
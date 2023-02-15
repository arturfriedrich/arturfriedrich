import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
			<h1>Your Name</h1>
			<nav>
				<ul>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				</ul>
			</nav>
    </header>
    )
}
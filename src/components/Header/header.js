import React from "react";
import { Link } from 'react-router-dom';
import * as ROUTES from "../../assets/js/routes"
import "header.css"

export default function Header() {
    return (
        <div>
			<Link to={ROUTES.HOME}>
				<p>Friedrich Artúr</p>
			</Link>
			<div>
				<Link to={ROUTES.ABOUT}><p>About me</p></Link>
				<Link to={ROUTES.PROJECTS}><p>Projects</p></Link>
				<Link to={ROUTES.CONTACT}><p>Contact</p></Link>
			</div>
			<div>
				<a href="https://github.com/arturfriedrich" target="_blank">
					<img src={require("../../assets/images/github.png")} />
				</a>
				<a href="https://twitter.com/arturfriedrich7" target="_blank">
					<img src={require("../../assets/images/twitter.png")} />
				</a>
				<a href="https://www.linkedin.com/in/friedrich-art%C3%BAr-6840201a1/" target="_blank">
					<img src={require("../../assets/images/linkedin.png")} />
				</a>
			</div>
		</div>
    )
}
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../images/Indialand Logo-03.png'
import "./main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3><span>India</span>Land</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/about">About us</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
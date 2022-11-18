import React from "react";
import Logo from '../../assets/logo.svg'
import Avatar from '../../assets/image-avatar.png'
import IconMenu from "../icons/IconMenu";
import IconCart from "../icons/IconCart";

function Navbar() {
	return (
		<header className="container mx-auto flex items-center px-4">
			<button className="md:hidden">
				<IconMenu />
			</button>
			<img src={Logo}
				alt="Logo Sneakers"
				className="mr-auto mb-1 md:mr-0"
			/>
			<nav className="hidden md:block md:mr-auto">
				<a href="#">Collections</a>
				<a href="#">Men</a>
				<a href="#">Women</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
			<div className="flex gap-4">
				<button>
					<IconCart />
				</button>
				<img src={Avatar} alt="" className="w-10" />
			</div>
		</header>
	);
}

export default Navbar;

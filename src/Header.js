import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
	return(
		<nav className="header">
			{/*Logo on left */}
			<Link to="/">
			<img 
			className="header__logo" 
			src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			alt=""/>
			</Link>

			{/*Search in the middle*/}
			<div className="header__search">
				<input type="text" className="header__searchInput"/>
				<SearchIcon className="header__searchIcon"/>
			</div>


			{/*3 Links, sign in , orders, your prime*/}
			{/*Basket icon + number of items */}
		</nav>
	);
}

export default Header
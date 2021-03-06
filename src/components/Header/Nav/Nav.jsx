import React from 'react'

import { NavLink } from 'react-router-dom'

import './Nav.scss'

// add style on active navlink

const Nav = () => (
	<nav className="nav">
		<ul className="nav__list">
			<li>
				<NavLink exact to='/'>
					All
				</NavLink>
			</li>
			<li>
				<NavLink exact to='/active'>
					Active
				</NavLink>
			</li>
			<li>
				<NavLink exact to='completed'>
					Completed
				</NavLink>
			</li>
		</ul>
	</nav>
)

export default Nav
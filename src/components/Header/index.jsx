import React, {  } from 'react'
import Form from './Form/Form'
import Nav from './Nav/Nav'

import './Header.scss'

const Header = ({darkMode, setDarkMode, setTasks}) => (
	<header className={darkMode ? "header header--dark" : "header header--light"}>
		<div className="header__container">
			<div className="header__banner">
				<h1>Tout-Doux</h1>
				<div className="header__banner__switch-mode" onClick={() => setDarkMode(!darkMode)} >
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.1265 4.0605C9.78267 5.52842 9.73591 7.05027 9.98896 8.53653C10.242 10.0228 10.7898 11.4434 11.6 12.7149C12.4102 13.9863 13.4665 15.0828 14.7068 15.94C15.947 16.7972 17.3462 17.3976 18.822 17.706C18.0461 18.5088 17.1169 19.1475 16.0894 19.5843C15.0619 20.021 13.9572 20.2469 12.8407 20.2485C12.7372 20.2485 12.6322 20.2523 12.5272 20.2485C10.5835 20.18 8.7252 19.4328 7.27513 18.1366C5.82506 16.8405 4.87487 15.0773 4.58964 13.1534C4.30441 11.2295 4.70216 9.26648 5.71378 7.60536C6.72541 5.94423 8.28699 4.68998 10.1272 4.0605H10.1265ZM11.235 2.25C11.191 2.25015 11.147 2.25416 11.1037 2.262C8.71619 2.68689 6.57025 3.98001 5.07905 5.8924C3.58786 7.80478 2.85686 10.2012 3.02678 12.6203C3.19671 15.0394 4.25555 17.3101 5.99944 18.9952C7.74334 20.6804 10.049 21.6608 12.4725 21.7478C12.5955 21.7523 12.7185 21.7478 12.84 21.7478C14.4142 21.7488 15.9655 21.3707 17.3627 20.6455C18.7599 19.9204 19.962 18.8694 20.8672 17.5815C20.9406 17.4705 20.9834 17.3421 20.9914 17.2093C20.9993 17.0765 20.9722 16.944 20.9127 16.825C20.8531 16.706 20.7633 16.6048 20.6523 16.5316C20.5412 16.4583 20.4128 16.4156 20.28 16.4078C18.7817 16.2763 17.3337 15.802 16.0479 15.0216C14.7621 14.2413 13.673 13.1757 12.8647 11.9073C12.0564 10.6389 11.5505 9.2016 11.3863 7.70652C11.2221 6.21145 11.4038 4.69863 11.9175 3.285C11.9612 3.17185 11.9772 3.04989 11.9642 2.92929C11.9512 2.80869 11.9096 2.69294 11.8429 2.59168C11.7761 2.49041 11.6861 2.40657 11.5803 2.34714C11.4746 2.28771 11.3562 2.2544 11.235 2.25Z" fill="white"/>
					</svg>
				</div>
			</div>
			<div className="header__form--container">
				<Form darkMode={darkMode} setTasks={setTasks} />
			</div>
			<Nav />
		</div>
	</header>
)

export default Header
import React from 'react'
import './Header.scss'
import { useState } from 'react'

import liteIcons from '../../assets/lite-icon.svg'
import darkIcon from '../../assets/dark-icon.svg'

function Header() {
	let [mode, setMode] = useState(
		localStorage.getItem('mode') === 'true' || false
	)
	const changeTheme = () => {
		document.body.classList.toggle('lite')
		setMode(!mode)
		localStorage.setItem('mode', !mode)
	}
	return (
		<header>
			<div className='header__container'>
				<h1>TODO</h1>
				{mode ? (
					<img
						src={liteIcons}
						alt='lite icons todo'
						className='lite-icon'
						onClick={changeTheme}
					/>
				) : (
					<img
						src={darkIcon}
						alt='dark icons todo'
						className='dark-icon'
						onClick={changeTheme}
					/>
				)}
			</div>
		</header>
	)
}

export default Header

import React from 'react'

import logo from '../../assets/img/logo/logo.png'

import './index.scss'

export const NavBar = () => {
  return (
	<div className='navbar'>
		<a href="/" className='logo' >
			<img src={logo} alt="logo" width='180px' height='35px' />
		</a>
		<div className="button">
			<button>Mobile App</button>	
		</div>
	</div>
  )
}

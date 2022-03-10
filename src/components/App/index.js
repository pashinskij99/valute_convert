import React from 'react'
import { ConvertContainer } from '../ConvertContainer'
import { NavBar } from '../NavBar'

import './index.scss'

export const App = () => {
  return (
	<div className='container'>
		<NavBar />
		<ConvertContainer />
	</div>
  )
}

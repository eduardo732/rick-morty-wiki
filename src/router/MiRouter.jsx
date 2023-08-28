import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Episode from '../pages/Episode'
import Location from '../pages/Location'
import Nav from '../components/navbar/Nav'

const MiRouter = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/episode' element={<Episode/>}/>
				<Route path='/location' element={<Location/>}/>
				<Route path='*' element={<Home/>}/>
			</Routes>
		</>
	)
}

export default MiRouter
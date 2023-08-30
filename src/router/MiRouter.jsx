import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Episode from '../pages/Episode'
import Location from '../pages/Location'
import NavigationBar from '../components/navbar/NavigationBar'
import { styled } from 'styled-components'

const StyledMainContainer = styled.div`
	width: 100%;
` 
const MiRouter = () => {
	return (
		<StyledMainContainer>
			<NavigationBar />
			<Routes>
				<Route path='/rick-morty-wiki' element={<Home/>}/>
				<Route path='/rick-morty-wiki/episode' element={<Episode/>}/>
				<Route path='/rick-morty-wiki/location' element={<Location/>}/>
				<Route path='*' element={<Home/>}/>
			</Routes>
		</StyledMainContainer>
	)
}

export default MiRouter
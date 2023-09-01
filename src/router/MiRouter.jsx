import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Episode from '../pages/Episode'
import Location from '../pages/Location'
import NavigationBar from '../components/navbar/NavigationBar'
import { styled } from 'styled-components'
import CharacterDetail from '../pages/CharacterDetail'

const StyledMainContainer = styled.div`
	width: 100%;
` 
const MiRouter = () => {
	return (
		<StyledMainContainer>
			<NavigationBar />
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/:id' element={<CharacterDetail/>}/>
				<Route path='/episode' element={<Episode/>}/>
				<Route path='/episode/:id' element={<CharacterDetail/>}/>
				<Route path='/location' element={<Location/>}/>
				<Route path='/location/:id' element={<CharacterDetail/>}/>
				<Route path='*' element={<Home/>}/>
			</Routes>
		</StyledMainContainer>
	)
}

export default MiRouter
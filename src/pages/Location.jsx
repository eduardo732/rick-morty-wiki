import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { styled } from 'styled-components'
import FilterEpisodeAndLocation from '../components/filters/FilterEpisodeAndLocation'
import CharacterList from '../components/content/CharacterList'

const StyledH5 = styled.h5`
	text-align: center;
`
const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`
const StyledContainer = styled.div`
	width: 70%;
	margin: 10px 20px;
	display: flex;
	flex-direction: column;
`
const StyledP = styled.p`
	margin: 10% 30% 0 0;
`
const Location = () => {
	const [characters, setCharacters] = useState([])
	const [location, setLocation] = useState(1)
	const [infoLocation, setInfoLocation] = useState(1)
	const [characterLink, setCharactersLink] = useState([])
	const [info, setInfo] = useState({})

	useEffect(() => {
		try {
			fetch(`https://rickandmortyapi.com/api/location`)
			.then(results => results.json())
			.then(data => {
				setInfo(data.info)
			})
		} catch (error) {
			console.log('Error', error);
		}
	})
	useEffect(() => {
		try {
			fetch(`https://rickandmortyapi.com/api/location/${location}`)
			.then(results => results.json())
			.then(data => {
				setCharactersLink(data.residents)
				setInfoLocation(data)
			})
			Promise.all(
				characterLink.map(link => 
					fetch(link)
					.then(res => res.json())
				)
			)
			.then(data => setCharacters(data))
		} catch (error) {
			console.log('Error', error);
		}
	}, [characterLink, location])
	return (
		<>
			<Header>Location: {infoLocation.name}</Header>
			<StyledH5>Dimension: {infoLocation.dimension}</StyledH5>
			<StyledH5>Type: {infoLocation.type}</StyledH5>
			<StyledDiv>
				<FilterEpisodeAndLocation
					current={location}
					setCurrent={setLocation}
					total={info.count}
				>Location
				</FilterEpisodeAndLocation>
			{
						characters && characters.length > 0 ? (
							<StyledContainer>
								<CharacterList
									characters={characters}
								/>
							</StyledContainer>
							
						) : (
							<StyledP>No characters Found</StyledP>
						)
					}
			</StyledDiv>
		</>
	)
}

export default Location
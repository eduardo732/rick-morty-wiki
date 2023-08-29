import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { styled } from 'styled-components'
import CharacterList from '../components/content/CharacterList'
import FilterEpisodeAndLocation from '../components/filters/FilterEpisodeAndLocation'

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
const Episode = () => {
	const [characters, setCharacters] = useState([])
	const [episode, setEpisode] = useState(1)
	const [infoEpisode, setInfoEpisode] = useState(1)
	const [characterLink, setCharactersLink] = useState([])
	const [info, setInfo] = useState({})

	useEffect(() => {
		try {
			fetch(`https://rickandmortyapi.com/api/episode`)
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
			fetch(`https://rickandmortyapi.com/api/episode/${episode}`)
			.then(results => results.json())
			.then(data => {
				setCharactersLink(data.characters)
				setInfoEpisode(data)
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
	}, [characterLink, episode])

	return (
		<>
			<Header>Episode name: {infoEpisode.name}</Header>
			<StyledH5>Air Date: {infoEpisode.air_date}</StyledH5>
			<StyledDiv>
				<FilterEpisodeAndLocation 
					current={episode}
					setCurrent={setEpisode}
					total={info.count}
				>Episode</FilterEpisodeAndLocation>
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

export default Episode
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import CharacterList from '../components/content/CharacterList'
import FilterEpisodeAndLocation from '../components/filters/FilterEpisodeAndLocation'
import StyledP from '../components/styled/StyledP'
import StyledDiv from '../components/styled/StyledDiv'
import StyledContainer from '../components/styled/StyledContainer'
import StyledH5 from '../components/styled/StyledH5'



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
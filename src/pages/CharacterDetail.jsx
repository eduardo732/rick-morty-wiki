import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`
const StyledBox = styled.div`
	margin: 5px;
	color: white;
	background-color: ${props => {
		switch (props.status) {
			case 'Alive':
				return 'green';
			case 'Dead':
				return 'red';
			case 'unknown':
				return 'gray';
			default:
				return 'red';
		}
	}};
	border-radius: 5px;
	width: 300px;
	height: 25px;
	text-align: center;

`
const StyledInfo = styled.div`
	text-align: start;
	width: 300px;
`
const CharacterDetail = () => {
	const { id } = useParams()
	const [character, setCharacter] = useState({})

	useEffect(() => {
		try {
			fetch(`https://rickandmortyapi.com/api/character/${id}`)
				.then(results => results.json())
				.then(data => {
					setCharacter(data)
					console.log(data);
				})
		} catch (error) {
			setCharacter({})
		}
	}, [id])
	return (

		<StyledDiv>
			<img src={character?.image} alt="/" width='300px;' height='300px;' />
			<StyledBox status={character?.status}>{character?.status}</StyledBox>
			<StyledInfo>
				<div><strong>Gender:</strong> {character?.gender}</div>
				<div><strong>Location:</strong> {character?.location?.name}</div>
				<div><strong>Origin:</strong> {character?.origin?.name}</div>
				<div><strong>Species:</strong> {character?.species}</div>
			</StyledInfo>

		</StyledDiv>
	)
}

export default CharacterDetail
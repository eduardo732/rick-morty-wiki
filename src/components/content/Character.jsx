import React from 'react'
import { styled } from 'styled-components'

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
  border-radius: 4px;
	border: 2px solid #7d7dff;
	box-sizing: border-box;
  width: 30%;
	height: 360px;
	margin-bottom: 15px;
`
const StyledContainer = styled.div`
	position: relative;
`
const StyledImg = styled.img`
  overflow: hidden;
  width: 100%;
	position: relative;
`
const StyledBox = styled.div`
	position: absolute;
	top: 0;
	right: 0;
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
	padding: 2px 5px;
	border-radius: 5px;
`
const StyledH1 = styled.h1`
	font-size: 1rem;
	padding: 5px;
`

const StyledSpan = styled.span`
	font-size: 1rem;
	padding: 0 5px;
	margin-bottom: 10px;
`
const Character = ({ value }) => {
	return (
		<StyledCard>
			<StyledContainer>
				<StyledImg src={value.image} alt='/'/>
				<StyledBox status={value.status}>{value.status}</StyledBox>
			</StyledContainer>
			
			<StyledH1>{value.name}</StyledH1>
			<StyledSpan>Last Location</StyledSpan>
			<StyledSpan>{value.location.name}</StyledSpan>
		</StyledCard>
	)
}

export default Character
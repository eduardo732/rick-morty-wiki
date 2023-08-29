import React, { memo } from 'react'
import { styled } from 'styled-components'
import Character from './Character'

const StyledCharacters = styled.div`
  display: flex;
	flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CharacterList = memo(({ characters }) => {
	return (
			<StyledCharacters>
				{characters.map(value => <Character key={value.id} value={value} />)}
			</StyledCharacters>
			
	)
})

export default CharacterList
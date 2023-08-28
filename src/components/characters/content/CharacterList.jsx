import React, { memo } from 'react'
import { styled } from 'styled-components'
import Character from './Character'
import MyPagination from '../../pagination/MyPagination'

const StyledCharacters = styled.div`
  display: flex;
	flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
const StyledContainer = styled.div`
	width: 70%;
	margin: 10px 20px;
	display: flex;
	flex-direction: column;
`
const CharacterList = memo(({ characters, onNextPage, onPrevPage, onPageChange, totalPages, pageNumber }) => {
	return (
		<StyledContainer>
			<StyledCharacters>
				{characters.map(value => <Character key={value.id} value={value}/>)}
			</StyledCharacters>
			<MyPagination
				onNextPage={onNextPage}
				onPrevPage={onPrevPage}
				onPageChange={onPageChange}
				totalPages={totalPages}
				pageNumber={pageNumber}
			/>
		</StyledContainer>
	)
})

export default CharacterList
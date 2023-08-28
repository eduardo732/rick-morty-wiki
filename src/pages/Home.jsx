import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { styled } from 'styled-components'
import SearcherForm from '../components/characters/filters/SearcherForm'
import CharacterList from '../components/characters/content/CharacterList'
import Filter from '../components/characters/filters/Filter'

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`
const StyledP = styled.p`
	margin: 10% 30% 0 0;
`
const Home = () => {
	const [characters, setCharacters] = useState([])

	const [search, setSearch] = useState('')
	const [filterStatus, setFilterStatus] = useState('')
	const [filterGender, setFilterGender] = useState('')
	const [filterSpecies, setFilterSpecies] = useState('')

	const [pageNumber, setPageNumber] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		try {
			fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}
				&name=${search}
				&status=${filterStatus}
				&species=${filterSpecies}
				&gender=${filterGender}`
			)
				.then(results => results.json())
				.then(data => {
					setCharacters(data.results)
					setTotalPages(data.info.pages)
				})
		} catch (error) {
			setCharacters([])
		}

	}, [filterGender, filterSpecies, filterStatus, pageNumber, search])
	const handleFilterStatus = (value) => {
		setFilterStatus(value)
		setPageNumber(1)
	}
	const handleFilterSpecies = (value) => {
		setFilterSpecies(value)
		setPageNumber(1)
	}
	const handleFilterGender = (value) => {
		setFilterGender(value)
		setPageNumber(1)
	}
	const clear = () => {
		const clean = ''
		setFilterStatus(clean)
		setFilterSpecies(clean)
		setFilterGender(clean)
		setSearch(clean)
		setPageNumber(1)
	}
	const handleNextPage = () => {
		if(pageNumber < totalPages) {
			setPageNumber(pageNumber + 1)
		}
	}
	const handlePreviousPage = () => {
		if(pageNumber > 1) {
			setPageNumber(pageNumber - 1)
		}
	}
	const handleNewPage = (num) => {
		setPageNumber(num)
	}
	const handleSearch = (value) => {
		setSearch(value)
		setPageNumber(1)
	}
	return (
		<>
			<Header>Characters</Header>
			<SearcherForm onSubmit={handleSearch}/>
			<StyledDiv>
					<Filter
						characters={characters}
						onClearFilters={clear}
						onFilterStatusChange={handleFilterStatus}
						onFilterSpeciesChange={handleFilterSpecies}
						onFilterGenderChange={handleFilterGender}
					/>
					{
						characters && characters.length > 0 ? (
							<CharacterList 
								characters={characters}
								onNextPage={handleNextPage}
								onPrevPage={handlePreviousPage}	  
								onPageChange={handleNewPage}
								totalPages={totalPages}
								pageNumber={pageNumber}
							/>
						) : (
							<StyledP>No characters Found</StyledP>
						)
					}
				</StyledDiv>
		</>
	)
}

export default Home
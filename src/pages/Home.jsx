import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import SearcherForm from '../components/filters/SearcherForm'
import CharacterList from '../components/content/CharacterList'
import Filter from '../components/filters/Filter'
import MyPagination from '../components/pagination/MyPagination'
import StyledP from '../components/styled/StyledP'
import StyledDiv from '../components/styled/StyledDiv'
import StyledContainer from '../components/styled/StyledContainer'


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
		if (pageNumber < totalPages) {
			setPageNumber(pageNumber + 1)
		}
	}
	const handlePreviousPage = () => {
		if (pageNumber > 1) {
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
			<SearcherForm onSubmit={handleSearch} />
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
						<StyledContainer>
							<CharacterList
								characters={characters}
							/>
							<MyPagination
								onNextPage={handleNextPage}
								onPrevPage={handlePreviousPage}
								onPageChange={handleNewPage}
								totalPages={totalPages}
								pageNumber={pageNumber}
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

export default Home
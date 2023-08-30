import React, { memo, useEffect, useState } from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction:column;
	margin: 0 15px;
	width:30%;
	justify-content: start;
	align-items: center;
	@media (max-width: 600px) {
		width:60%;
	}
`
const StyledAccordion = styled(Accordion)`
	width: 80%;
`
const Filter = memo(({ characters, 
	onFilterStatusChange, 
	onFilterSpeciesChange, 
	onFilterGenderChange, 
	onClearFilters }) => {

	const [statusListClean, setStatusListClean] = useState([])
	const [speciesListClean, setSpeciesListClean] = useState([])
	const [genderListClean, setGenderListClean] = useState([])

	useEffect(() => {
		if(characters) {
			const statusList = characters.map((value) => value.status)
			const speciesList = characters.map((value) => value.species)
			const genderList = characters.map((value) => value.gender)
			setGenderListClean(Array.from(new Set(genderList)))
			setSpeciesListClean(Array.from(new Set(speciesList)))
			setStatusListClean(Array.from(new Set(statusList)))
		}
	}, [characters])

	const handleStatusFilterChange = (event) => {
    const filterValue = event.target.textContent;
    onFilterStatusChange(filterValue);
  };
	const handleSpeciesFilterChange = (event) => {
		const filterValue = event.target.textContent;
		onFilterSpeciesChange(filterValue)
	}
	const handleGenderFilterChange = (event) => {
		const filterValue = event.target.textContent;
		onFilterGenderChange(filterValue)
	}
	const handleClear = () => {
		onClearFilters()
	}
	

  return (
    <StyledDiv>
      <h2>Filters</h2>
			<Button variant="link" onClick={() => handleClear()}>Clear filters</Button>
      <StyledAccordion>
			<Accordion.Item eventKey="0">
        <Accordion.Header>Status</Accordion.Header>
				{statusListClean.map(item => 
						<Accordion.Body key={item}>
							<Button variant="outline-primary" onClick={(e) => handleStatusFilterChange(e)}>{item}</Button>{' '}
						</Accordion.Body> 
					)
				}
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Species</Accordion.Header>
        {speciesListClean.map(item => 
						<Accordion.Body key={item}>
							<Button variant="outline-primary" onClick={(e) => handleSpeciesFilterChange(e)}>{item}</Button>{' '}
						</Accordion.Body> 
					)
				}
      </Accordion.Item>
			<Accordion.Item eventKey="2">
        <Accordion.Header>Gender</Accordion.Header>
        {genderListClean.map(item => 
						<Accordion.Body key={item}>
							<Button variant="outline-primary" onClick={(e) => handleGenderFilterChange(e)}>{item}</Button>{' '}
						</Accordion.Body> 
					)
				}
      </Accordion.Item>
			</StyledAccordion>
    </StyledDiv>
  );
})

export default Filter


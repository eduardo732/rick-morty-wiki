import React, { memo } from 'react'
import { Form } from 'react-bootstrap';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction:column;
	margin: 0 15px;
	width:30%;
	justify-content: start;
	align-items: center;
`
const StyledSelect = styled(Form)`
	margin-top: 10px;
	width: 80%;
`
const FilterEpisodeAndLocation = memo(({ children, current, total, setCurrent}) => {
	const handleChange = (event) => {
    const selectedValue = event.target.value;
    setCurrent(selectedValue);
  }
	return (
		<StyledDiv>
			<h2>Pick Episode</h2>
			<StyledSelect>
				<Form.Select aria-label="Default select example" value={current} onChange={handleChange}>
					{
						Array.from({ length: total }, (_, index) => (
							<option key={index + 1} value={index + 1}>{children} - {index + 1}</option>
						))
					}
			</Form.Select>
			</StyledSelect>
		</StyledDiv>
	)
})

export default FilterEpisodeAndLocation


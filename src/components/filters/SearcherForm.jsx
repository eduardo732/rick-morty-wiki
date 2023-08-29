import { Field, Form, Formik } from 'formik';
import React from 'react'
import { styled } from 'styled-components';
import * as Yup from 'yup';

const StyledFormikContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px; 
`
const StyledForm = styled(Form)`
	display:flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 40%;
`
const StyledDiv = styled.div`
	width: 60%;
`
const StyledField = styled(Field)`
	border: none;
  outline: none;
	padding: 10px;
	width: 100%;
	border: 2px solid #0B5ED7;
	border-radius: 5px;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
`
const StyledButton = styled.button`
	height: 40px;
	width: 70px;
	border: none;
	border-radius: 5px;
	background-color: #7d7dff;
	color: white;
	cursor: pointer;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
`
const SearcherForm = ({ onSubmit }) => {
	const initialValues = {
		searchTerm: '',
	};
	const validationSchema = Yup.object({
		searchTerm: Yup.string().required('Search term is required'),
	})
	const handleSubmit = (value) => {
		onSubmit(value.searchTerm)
		value.searchTerm = ''
	}
	return (
		<StyledFormikContainer>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<StyledForm>
					<StyledDiv>
						<StyledField type="text" id="searchTerm" name="searchTerm" placeholder="Search for characters" />
					</StyledDiv>
					<div>
						<StyledButton type="submit">Search</StyledButton>
					</div>
				</StyledForm>
			</Formik>
		</StyledFormikContainer>
	)
}

export default SearcherForm
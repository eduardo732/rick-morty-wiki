import React from 'react'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Header = ({ children }) => {
	return (
		<StyledHeader>
			<h1>{children}</h1>
		</StyledHeader>
	)
}

export default Header
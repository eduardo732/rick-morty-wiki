import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #F8F9FA;
	padding: 10px 30px
`
const StyledSpan = styled.span`
	color: #0d6efd;
`
const StyledUl = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
`
const StyledLi = styled.li`
	margin: 5px;
`
const StyledButton = styled.button`
	border: ${props => props.selected ? 'none': 'green'};
	background: transparent;
	color: ${props => props.selected ? '#0B5ED7': 'gray'};
	font-size: 1.2rem;
	font-weight: ${props => props.selected ? 'bold': 'none'};
	font-family: 'Ubuntu';
	text-decoration: ${props => props.selected ? 'underline': 'none'};
	text-underline-offset: 10px;
	text-decoration-thickness: 3px;
	&:hover {
		color: ${props => props.selected ? 'none': '#0B5ED7'};
	}
`

const Nav = () => {
	const [isSelected, setIsSelected] = useState('button1');
	const handleButtonClick = (buttonName, event) => {
		setIsSelected(buttonName)
	}
	return (
		<StyledNav>
			<Link to='/' style={{ textDecoration: 'none', color: 'black', fontSize: '1.75rem'}}><div>Rick & Morty <StyledSpan>Wiki</StyledSpan></div></Link>
			<StyledUl>
				<StyledLi><Link to='/'><StyledButton selected={isSelected === 'button1'} onClick={(e) => handleButtonClick('button1', e)}>Characters</StyledButton></Link></StyledLi>
				<StyledLi><Link to='/episode'><StyledButton selected={isSelected === 'button2'} onClick={(e) => handleButtonClick('button2', e)}>Episode</StyledButton></Link></StyledLi>
				<StyledLi><Link to='/location'><StyledButton selected={isSelected === 'button3'} onClick={(e) => handleButtonClick('button3', e)}>Location</StyledButton></Link></StyledLi>
			</StyledUl>
		</StyledNav>
	)
}

export default Nav
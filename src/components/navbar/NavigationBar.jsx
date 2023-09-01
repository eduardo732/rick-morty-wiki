import React, { useState } from 'react'
import { Nav, NavLink, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledNav = styled(Navbar)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px 30px;
	width: 100%;
`
const StyledSpan = styled.span`
	color: #0d6efd;
`

const StyledNavLink = styled(NavLink)`
	border: ${props => props.selected ? 'none': 'green'};
	background: transparent;
	color: ${props => props.selected ? '#0B5ED7': 'gray'};
	font-size: 1.2rem;
	font-weight: ${props => props.selected ? 'bold': 'none'};
	font-family: 'Ubuntu';
	text-decoration: ${props => props.selected ? 'underline': 'none'};
	text-underline-offset: 10px;
	text-decoration-thickness: 3px;
	margin: 5px 5px;
	&:hover {
		color: ${props => props.selected ? 'none': '#0B5ED7'};
	}
`
const NavigationBar = () => {
	const [isSelected, setIsSelected] = useState('button1');
	const handleButtonClick = (buttonName, event) => {
		setIsSelected(buttonName)
	}
	return (
		<StyledNav collapseOnSelect expand='lg' variant='light' bg='light'>
			<Link to='/' style={{ textDecoration: 'none', color: 'black', fontSize: '1.75rem'}}><div>Rick & Morty <StyledSpan>Wiki</StyledSpan></div></Link>
			<Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'/>
			<Navbar.Collapse id='navbarScroll' className="justify-content-end">
				<Nav>
					<StyledNavLink eventKey={1} as={Link} to='/' selected={isSelected === 'button1'} onClick={(e) => handleButtonClick('button1', e)}>Characters</StyledNavLink>
					<StyledNavLink eventKey={2} as={Link} to='/episode' selected={isSelected === 'button2'} onClick={(e) => handleButtonClick('button2', e)}>Episode</StyledNavLink>
					<StyledNavLink eventKey={3} as={Link} to='/location' selected={isSelected === 'button3'} onClick={(e) => handleButtonClick('button3', e)}>Location</StyledNavLink>
				</Nav>
			</Navbar.Collapse>
		</StyledNav>
	)
}

export default NavigationBar
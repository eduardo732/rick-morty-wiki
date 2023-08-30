import { styled } from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`

export default StyledDiv
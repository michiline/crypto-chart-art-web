import styled, { css } from 'styled-components'
import NavLink from './NavLink'


const Footer = () => {
	return (
		<RootContainer scrolled={scrolled}>
			<CenterContainer>


			</CenterContainer>
		</RootContainer>
  )
}

const RootContainer = styled.header`
	width: 100%;
`

const CenterContainer = styled.div`
	width: 1100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export default Header
  
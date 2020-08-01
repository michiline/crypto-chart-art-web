import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'
import NavLink from './NavLink'
import { useScroll } from '../hooks'

const Header = () => {
	const [scrolled] = useScroll()
	const router = useRouter()
	return (
		<RootContainer scrolled={scrolled}>
			<CenterContainer>
				<Logo onClick={() => router.push('/')}>CryptoChartArt</Logo>
				<Links>
					<NavLink href='/' name='HOME'/>
					<NavLink href='/join' name='JOIN US'/>
					<NavLink href='/members' name='MEMBERS'/>
					<NavLink href='/about' name='ABOUT'/>
				</Links>
			</CenterContainer>
		</RootContainer>
  )
}

const RootContainer = styled.header`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	padding: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	transition-property: background-color, padding;
	transition-duration: 150ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	${props => props.scrolled && css`
	background-color: #1A1A1DE1;
		padding: 10px !important;
	`}
`

const CenterContainer = styled.div`
	width: 1100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const Logo = styled.h1`
	color: white;
	&:hover {
		cursor: pointer;
	}
	&:active {
		transform: translateY(2px);
	}
`

const Links = styled.nav`
	width: max-content;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

export { NavLink }
export default Header
  
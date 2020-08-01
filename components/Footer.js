import styled, { css } from 'styled-components'
import Link from 'next/link'

const Footer = () => {
	return (
		<RootContainer>
			<CenterContainer>
				<LinksContainer>
					<LinksColumn>
						<LinksHeader>Navigation</LinksHeader>
						<NavLink href='/' name='Home' />
						<NavLink href='/join' name='Join us' />
						<NavLink href='/members' name='Members' />
						<NavLink href='/about' name='About' />
					</LinksColumn>
					<LinksColumn>
						<LinksHeader>Useful Links</LinksHeader>
						<ExternalLink href='#'>TradingView</ExternalLink>
						<ExternalLink href='#'>Ledger</ExternalLink>
						<ExternalLink href='#'>Trezor</ExternalLink>
						<ExternalLink href='#'>Blockfi</ExternalLink>
					</LinksColumn>
					<LinksColumn>
						<LinksHeader>Exchanges</LinksHeader>
						<ExternalLink href='#'>Binance</ExternalLink>
						<ExternalLink href='#'>Bittrex</ExternalLink>
						<ExternalLink href='#'>Coinbase</ExternalLink>
						<ExternalLink href='#'>Bitstamp</ExternalLink>
					</LinksColumn>
					<LinksColumn>
						<LinksHeader>Social Links</LinksHeader>
						<ExternalLink href='#'>Hive</ExternalLink>
						<ExternalLink href='#'>Twitter</ExternalLink>
						<ExternalLink href='#'>Discord</ExternalLink>
						<ExternalLink href='#'>Telegram</ExternalLink>
					</LinksColumn>
				</LinksContainer>
				<Disclaimer>
					CryptoChartArt.com is not a registered investment, legal or tax advisor or broker/dealer. 
					All investment/financial opinions expressed by CryptoChartArt.com are from the personal research and experience of the owner of the site and are intended as educational material.
					Although best efforts are made to ensure that all the informations is accurate and up to date, occasionally unintended errors and misprints may occur.
					You should consult with professional advisers before purchasing any cryptocurrencies. 
				</Disclaimer>
				<Copyright>© 2020 Crypto Chart Art </Copyright>

			</CenterContainer>
		</RootContainer>
  )
}

const RootContainer = styled.footer`
	width: 100%;
	background-color: black;
	color: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const CenterContainer = styled.div`
	width: 1100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 30px;
	padding-bottom: 30px;
`

const LinksContainer = styled.div`
	margin-top: 30px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const LinksColumn = styled.div`
	width: 20%;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const LinksHeader = styled.p`
	font-size: 20px;
	line-height: 30px;
	font-weight: bold;
	letter-spacing: 0.2px;
	color: #005cb2;
`

const SLink = styled.a`
  color: white;
  text-decoration: none;
  transition-property: color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #005cb2;
  }
  &:active {
    transform: translateY(2px);
  }
  margin-top: 5px;
  &:first-of-type {
	  margin-top: 10px;
  }
`

const ExternalLink = styled.a`
	color: white;
	text-decoration: none;
	transition-property: color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	&:hover {
	color: #005cb2;
	}
	&:active {
	transform: translateY(2px);
	}
	margin-top: 5px;
	&:first-of-type {
		margin-top: 10px;
	}
`

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

const Disclaimer = styled.p`
	width: 640px;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.1px;
	margin-top: 30px;
`

const Copyright = styled.p`
	width: 640px;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.1px;
	margin-top: 30px;
	text-align: center;
	color: #005cb2;
`

export default Footer
  
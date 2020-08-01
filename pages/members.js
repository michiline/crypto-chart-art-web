import styled from 'styled-components'
import { membersImg, joinUsImg } from '../images'
import { HiveIcon, TwitterIcon } from '../components'
import { externalLink } from '../common'

const MembersPage = ({ posts }) => {
	return (
    <RootContainer>
      <CoverContainer img={membersImg}>
        <Headers>
          <H2>
            Members club
          </H2>
          <H3>
            Premium content for those who want more. Coming soon...
          </H3>
        </Headers>
        <Social>
          <SocialLink href='https://twitter.com/CryptoChartArt' onClick={(e) => externalLink({e, url: 'https://twitter.com/CryptoChartArt'})}>
            <TwitterIcon />
          </SocialLink>
          <SocialLink href='https://hive.blog/@cryptochartart' onClick={(e) => externalLink({e, url: 'https://hive.blog/@cryptochartart'})}>
            <HiveIcon />
          </SocialLink>
        </Social>
      </CoverContainer>
    </RootContainer>
  )
}

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`

const Headers = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
`

const Social = styled.div`
  width: 116px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 50px;
  right: 50px;
`

const SocialLink = styled.a`
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`

const H2 = styled.h2`
  color: white;
  font-size: 50px;
`

const H3 = styled.h3`
  color: white;
  font-size: 35px;
  font-weight: 100;
`

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`

const ContentRow = styled.div`
  width: 1100px;
  height: min-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  &:first-of-type {
    margin-top: 0 !important;
  }
`

const Image = styled.img`
  width: 650px;
  object-fit: cover;
`

const TextColumn = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 50px;
`

const Text = styled.p`
  margin-top: 20px;
  text-align: start;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.2px;
  font-weight: 100;
`

const TextHeader = styled.h4`
  font-size: 30px;
  color: #005cb2;
`

const ExternalLink = styled.a`
  color: #005cb2;
	text-decoration: none;
	transition-property: color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	&:hover {
	  color: #005cb27A;
	}
	&:active {
	transform: translateY(2px);
	}
	margin-top: 5px;
	&:first-of-type {
		margin-top: 10px;
  }
  font-weight: 700;
`

export default MembersPage
  
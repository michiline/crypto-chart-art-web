import styled from 'styled-components'
import { homeImg } from '../images'
import { PostPreview } from '../components'

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
	  const posts = await res.json()
	  return {
		  props: {
			  posts
		  }
	  }
}

const HomePage = ({ posts }) => {
	return (
    <RootContainer>
      <CoverContainer img={homeImg}>
        <Headers>
          <H2>
            Join our trading community
          </H2>
          <H3>
            Charts, coin analysis, altcoin picks
          </H3>
        </Headers>
      </CoverContainer>
      {posts.map((post, index) => {
				return (
					<PostPreview {...post} key={index} />
				)
			})}
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
`

const Headers = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
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

export default HomePage
  
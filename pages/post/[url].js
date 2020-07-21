import useSWR from 'swr'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { millisToString } from '../../common'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { url: post.title },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${params.url}`)
  const post = await res.json()

  return { props: { post } }
}

const PostPage = ({ post }) => {
  const { longTitle, created, coverImg, nodes} = post
  const html = buildHtml(nodes)
	return (
    <RootContainer>
      <CoverImage img={coverImg}>
      <Headers>
          <H2>
            {longTitle}
          </H2>
          <H3>
            {millisToString({ date: new Date(created), showHours: false })}
          </H3>
        </Headers>
      </CoverImage>
      <PostContainer>
        <CenterContainer>
          {html}
        </CenterContainer>
      </PostContainer>
      
    </RootContainer>
  )
}

const buildHtml = (tags) => {
  const html = tags.map(({ name, data }, index) => {
	  switch(name) {
		case 'H1': {
 		  return (
  			<h1 key={index}>{data}</h1>
		  )
		}
		case 'TXT':
		  return (
			<Text key={index}>{data}</Text>
		  )
		case 'IMG': 
		  return (
        <ImageLink key={`${index}i`} href={data}>
			    <Image src={data} key={index}/>
        </ImageLink>

		  )
		default: 
		  return (
			  <div key={index}>{data}</div>
		  )
	  }
	})
  return html
  }

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
`

const CoverImage = styled.div`
  background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${props => props.img});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  height: 100vh;
  border: 1px solid black;
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

const PostContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top 50px;
`

const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 1;
  padding-bottom: 30px;
  max-width: 640px;
	padding-bottom: 50px;
`

const Text = styled.p`
    margin-top: 25px;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
`

const ImageLink = styled.a`
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  margin-top: 25px;
  width: 100%;
`

export default PostPage
  

// import useSWR from 'swr'
// import styled from 'styled-components'
// import { useRouter } from 'next/router'
// import { millisToString } from '../../common'

// const fetcher = url => fetch(url).then(res => res.json())

// const getPostByUrl = async (url) => {
//   const response = await fetch(url)
//   if (response.status === 404) {
//     throw new Error('Not found.')
//   }
//   return response.json()
// }

// export async function getServerSideProps(context) {
//   const { url } = context.query
//   const data = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/post/${url}`)
//   return {
//     props: {
//       initialData: data
//     }
//   }
// }

// const PostPage = ({ initialData }) => {
//   const router = useRouter()
//   const { url } = router.query
//   const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/post/${url}`, getPostByUrl, { initialData })
//   if (error) {
//     return error.message
//   }
//   if (!data) {
//     return 'Loading'
//   }
//   const { longTitle, created, coverImg, nodes} = data
//   const html = buildHtml(nodes)
// 	return (
//     <RootContainer>
//       <CoverImage img={coverImg}>
//       <Headers>
//           <H2>
//             {longTitle}
//           </H2>
//           <H3>
//             {millisToString({ date: new Date(created), showHours: false })}
//           </H3>
//         </Headers>
//       </CoverImage>
//       <PostContainer>
//         <CenterContainer>
//           {html}
//         </CenterContainer>
//       </PostContainer>
      
//     </RootContainer>
//   )
// }

// const buildHtml = (tags) => {
//   const html = tags.map(({ name, data }, index) => {
// 	  switch(name) {
// 		case 'H1': {
//  		  return (
//   			<h1 key={index}>{data}</h1>
// 		  )
// 		}
// 		case 'TXT':
// 		  return (
// 			<Text key={index}>{data}</Text>
// 		  )
// 		case 'IMG': 
// 		  return (
//         <ImageLink key={`${index}i`} href={data}>
// 			    <Image src={data} key={index}/>
//         </ImageLink>

// 		  )
// 		default: 
// 		  return (
// 			  <div key={index}>{data}</div>
// 		  )
// 	  }
// 	})
//   return html
//   }

// const RootContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `

// const CoverImage = styled.div`
//   background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${props => props.img});
//   background-repeat: no-repeat;
//   background-position: right;
//   background-size: cover;
//   width: 100%;
//   height: 100vh;
//   border: 1px solid black;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const Headers = styled.div`
//   width: 1100px;
//   display: flex;
//   flex-direction: column;
// `

// const H2 = styled.h2`
//   color: white;
//   font-size: 50px;
// `

// const H3 = styled.h3`
//   color: white;
//   font-size: 35px;
//   font-weight: 100;
// `

// const PostContainer = styled.div`
//   width: 100%;
//   height: min-content;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   margin-top 50px;
// `

// const CenterContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	opacity: 1;
//   padding-bottom: 30px;
//   max-width: 640px;
// 	padding-bottom: 50px;
// `

// const Text = styled.p`
//     margin-top: 25px;
//     width: 100%;
//     font-size: 18px;
//     line-height: 24px;
// `

// const ImageLink = styled.a`
//   width: 100%;
//   &:hover {
//     cursor: pointer;
//   }
// `

// const Image = styled.img`
//   margin-top: 25px;
//   width: 100%;
// `

// export default PostPage
  
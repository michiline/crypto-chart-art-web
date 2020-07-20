import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import PostPreview from './PostPreview'

const fetcher = url => fetch(url).then(res => res.json())

const getPostByUrl = async (url) => {
  const response = await fetch(url)
  if (response.status === 404) {
    throw new Error('Not found.')
  }
  return response.json()
}

const PostList = () => {
	const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/post`, getPostByUrl)
	if (error) {
	  return error.message
	}
	if (!data) {
	  return 'Loading'
	}
	return (
		<RootContainer>
			{data.map((post, index) => {
				return (
					<PostPreview {...post} key={index} />
				)
			})}
		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 100%;
	height: min-content;
	max-width: 640px;
	padding-bottom: 100px;
`

export default PostList
import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import PostPreview from './PostPreview'

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
	  const posts = await res.json()
	  console.log(posts)
	  return {
		  props: {
			  posts
		  }
	  }
}

const PostList = ({ posts }) => {
	return (
		<>
			{posts.map((post, index) => {
				return (
					<PostPreview {...post} key={index} />
				)
			})}
		</>

	)
}


export default PostList
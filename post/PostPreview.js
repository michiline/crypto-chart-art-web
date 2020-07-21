import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CalendarIcon } from '../components'
import { millisToString } from '../common'
import Link from 'next/link'

const PostPreview = ({ title, longTitle, description, coverImg, created }) => {
	const router = useRouter()
	return (
		<RootContainer>
			<CoverImage src={coverImg} onClick={() => router.push(`/post/${title}`)}/>
			<Info>
				<Title onClick={() => router.push(`/post/${title}`)}>{longTitle}</Title>
				<Description>{description}...</Description>
				<BottomRow>
					<CreatedContainer>
						<CalendarIcon/>
						<Created>{millisToString({ date: new Date(created), showHours: false})}</Created>
					</CreatedContainer>
					<ReadMore href={`/post/${title}`} name='READ MORE'/>
				</BottomRow>

			</Info>
		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 640px;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 1;
	padding-bottom: 30px;
	margin-top: 100px;
`

const CoverImage = styled.img`
	width: 100%;
	&:hover {
		cursor: pointer;
	}
`

const Info = styled.div`
	margin-top: 30px;
	width: 70%;
	display: flex;
	flex-direction: column;
`

const Title = styled.h2`
	width: 100%;
	font-size: 30px;
	&:hover {
		cursor: pointer;
		color: #005cb2;
	}
	&:active {
		transform: translateY(2px);
	}
`

const Description = styled.p`
	width: 90%;
	margin-top: 20px;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.1px;
	max-height: 72px;
	overflow: hidden;
`

const BottomRow = styled.div`
	margin-top: 30px;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const ReadMoreButton = styled.button`
	border: none;
	background-color: transparent;
	font-size: 16px;
	font-weight: 700;
	letter-height: 24px;
	letter-spacing: 0.2px;
	&:hover {
		cursor: pointer;
		color: #005cb2;
	}
	&:active {
		transform: translateY(2px);
	}
`

const CreatedContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: min-content;
`

const Created = styled.p`
	margin-left: 10px;
`

const SLink = styled.a`
	color: black;
	text-decoration: none;
	margin-left: 40px;
	font-size: 16px;
	font-weight: 700;
	letter-height: 24px;
	letter-spacing: 0.2px;
	&:hover {
		cursor: pointer;
		color: #005cb2;
	}
	&:active {
		transform: translateY(2px);
	}
`

const ReadMore = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

export default PostPreview
import Link from 'next/link'
import styled from 'styled-components'

const SLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 40px;
  transition-property: color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #005cb2;
  }
  &:active {
    transform: translateY(2px);
  }
`

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

export default NavLink

import Link from 'next/link'
import styled from 'styled-components'

const SLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 40px;
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

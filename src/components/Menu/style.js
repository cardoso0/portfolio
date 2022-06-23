import styled from 'styled-components'

export const Container = styled.div`
  background-color: #121212;
  color: white;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`

export const Nav = styled.nav`
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 70%;
    display: flex;
    justify-content: space-between;
  }
`

export const Logo = styled.h1`
  display: none;
  list-style-type: none;

  @media (min-width: 768px) {
    display: flex;
    margin: auto 0;
    justify-content: space-between;
    width: 200px;

    img {
      width: 30px;
    }
  }
`

export const UlPages = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  padding: 1.2em 1em 1.2em 1em;

  @media (min-width: 768px) {
    margin: 0;
    width: 20em;
    justify-content: space-between;

    li {
      margin: auto 0;
      text-transform: uppercase;
      color: white;
    }
  }
`
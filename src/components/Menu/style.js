import styled from 'styled-components'

export const Container = styled.div`
  background-color: #4d3e6b;
  color: white;
`

export const Nav = styled.nav`
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
  }
`

export const UlPages = styled.ul`
  margin: 0 auto;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 1.2em 1em 1.2em 1em;

  @media (min-width: 768px) {
    margin: 0;
    width: 20em;
    justify-content: space-between;

    li {
      margin: auto 0;
      text-transform: uppercase;
    }
  }

`

export const UlSocialMedias = styled.ul`
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
import styled from "styled-components";

export const Bg = styled.div`
  background-color: #121212;
`

export const Main = styled.main`
  color: white;
  padding-top: 5em;
  padding-bottom: 4em;
  max-width: 80%;
  margin: 0 auto;

  h1 {
    margin: 0;
  }

  @media (min-width: 768px) {
    max-width: 70%;

    .texto {
      max-width: 85%;
    }
  }
`
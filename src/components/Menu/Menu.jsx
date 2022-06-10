import * as S from './style'

export const Menu = () => {

  return (
    <S.Container>
      <S.Nav>
        <S.Logo>‹FC/›</S.Logo>
        <S.UlPages>
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
        </S.UlPages>
      </S.Nav>
    </S.Container>
  )
}
import * as S from './style'

export const Menu = () => {

  return (
    <div>
      <S.Container>
        <S.Nav>
          <S.Logo>‹FC/›</S.Logo>
          <S.UlPages>
            <a href="#home"><li>Home</li></a>
            <a href="#sobre"><li>Sobre</li></a>
            <a href="#projetos"><li>Projetos</li></a>
          </S.UlPages>
        </S.Nav>
      </S.Container>
    </div>
  )
}
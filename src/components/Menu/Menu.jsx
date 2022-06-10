import * as S from './style'
import linkedin from '../../img/linkedin.png'

export const Menu = () => {

  return (
    <S.Container>
      <S.Nav>
        <S.Logo>‹FC/›</S.Logo>
        <S.UlPages>
          <li>Home</li>
          <li>Projetos</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </S.UlPages>
      </S.Nav>
    </S.Container>
  )
}
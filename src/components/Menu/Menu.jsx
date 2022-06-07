import * as S from './style'
import linkedin from '../../img/linkedin.png'

export const Menu = () => {

  return (
    <S.Container>
      <S.Nav>
        <S.UlPages>
          <li>Projetos</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </S.UlPages>
        <S.UlSocialMedias>
          <li>
            <a href="#">
              <img src={linkedin} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt="logo" />
            </a>
          </li>
        </S.UlSocialMedias>
      </S.Nav>
    </S.Container>
  )
}
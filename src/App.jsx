import * as S from './Style'
import { Menu } from "../src/components/Menu/Menu"
import { Home } from "../src/components/Home/Home"
import { Sobre } from "../src/components/Sobre/Sobre"

const App = () => {

  return (
    <div>
      <S.Container>
        <Menu />
        <Home />
        <Sobre />
      </S.Container>
    </div>
  )
}

export default App

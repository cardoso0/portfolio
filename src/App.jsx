import * as S from './Style'
import { Menu } from "../src/components/Menu/Menu"
import { Home } from "../src/components/Home/Home"

const App = () => {

  return (
    <div>
      <S.Container>
        <Menu />
        <Home />
      </S.Container>
    </div>
  )
}

export default App

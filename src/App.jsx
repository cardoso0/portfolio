import { Route, Routes } from 'react-router-dom'
import * as S from './Style'
import { Menu } from "../src/components/Menu/Menu"
import { Home } from "../src/components/Home/Home"
import { Sobre } from "../src/components/Sobre/Sobre"
import { Projetos } from './components/Projetos/Projetos'
import { Footer } from './components/Footer/Footer'

const App = () => {

  return (
    <div>
      <S.Container>
        <Menu />
        <Home />
        <Sobre />
        <Projetos />
        <Footer />
      </S.Container>
    </div>
  )
}

export default App

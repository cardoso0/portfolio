import * as S from './style'
import weeks from '../../img/52weeks.png'
import todos from '../../img/todos.png'
import link from '../../img/link.png'

export const Projetos = () => {

  return (
    <S.Bg id="projetos">
      <S.Main>
        <h1>Projetos</h1>
        <S.Card>
          <img className='imgProject' src={weeks} alt="Projeto 52 Semanas" />
          <h3>Projeto 52 Semanas</h3>
          <p>De maneira simples, o desafio 52 semanas é uma técnica para poupar dinheiro mesmo ganhando pouco.</p>
          <p>Tecnologias usadas no projeto: HTML, CSS com Styled Components, React.</p>
          <button>
            <img className='imgBtn' src={link} alt="link para acessar projeto" /> <p>Visualizar</p>
          </button>
        </S.Card>
        <S.Card>
          <img className='imgProject' src={todos} alt="Projeto Todo List" />
          <h3>Todo List</h3>
          <p>Adicione tarefas, marque como concluídas ou exclua. Essa é a nossa Lista de Tarefas.</p>
          <p>Tecnologias usadas no projeto: HTML, CSS com Styled Components, React.</p>
          <button>
            <img className='imgBtn' src={link} alt="link para acessar projeto" /> <p>Visualizar</p>
          </button>
        </S.Card>
      </S.Main>
    </S.Bg>
  )
}
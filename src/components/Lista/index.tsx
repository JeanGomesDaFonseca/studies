import { ITarefa } from '../../types/Tarefa';
import Item from './Item';
import './Lista.module.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


function Lista({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item 
          selecionaTarefa={selecionaTarefa}
          key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;

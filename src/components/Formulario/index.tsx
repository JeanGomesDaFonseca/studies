import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  //É dessa maneira que se usa o useState com class components.  (graças a Deus que hojé se usa os Hooks)
  state = {
    tarefa: "",
    tempo: "00:00",
  };
//Essa é a forma para declarar uma função
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            placeholder="O que você deseja estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao
        type="submit">
          Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;

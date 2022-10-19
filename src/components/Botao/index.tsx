import React, { ReactFragment } from "react"
import style from './Botao.module.scss'

type Params = {
    type?: "button" | "submit" | "reset" | undefined;
    children?: ReactFragment | undefined;
}

const Botao: React.FC<Params> = (props:Params) =>{   
    return(
        <button type={props.type} className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao


//ESSA É A VERSÃO EM "CLASS COMPONENTS" QUE NÃO ESTÁ ACEITANDO O CHILDREN!

// import React from "react";
// import style from "./Botao.module.scss";

// class Botao extends React.Component<{
//   type: "button" | "submit" | "reset" | undefined
// }> {
//   render() {
//     const { type = "button" } = this.props;
//     return (
//       <button type={type} className={style.botao}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

// export default Botao;

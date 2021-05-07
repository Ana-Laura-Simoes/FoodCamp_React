import React from 'react';
import Opcao from "./Opcoes";
export default function SecaoPratos(props){
  const {todosPratos, setTodosPratos} = props;
    
  const pratos=[{borda:false,contador:0,imagem:"img/veggie_burguer.jpg" ,titulo:"Veggie Burguer" ,descricao:"Sem batata, com um pouco de salada" ,preco:"14,90"},
        {borda:false,contador:0,imagem:"img/coxinha.jpg" ,titulo:"Coxinha de Jaca" ,descricao:"Não é frango, mas é bom" ,preco:"7,90"},
        {borda:false,contador:0,imagem:"img/pastel.jpg" ,titulo:"Pastel" ,descricao:"Nada a declarar",preco:"9,90"}];

        return(
        <div className="secao">
          <div className="titulo">Primeiro, seu prato</div>
          <div className="opcoes pratos">
          <Opcao array={pratos}
              todosItens={todosPratos}
              setTodosItens={setTodosPratos}          
          />
          </div>
        </div>
    );
}
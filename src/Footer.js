import React from 'react';
export default function Footer(props){
  const {todos}=props;
  const [link, setLink] = React.useState(0);
  const [classe, setClasse] = React.useState("");
  
  console.log(todos);
    return(
        <div class="footer">
        <a href="#" class={todos===true? "fazer-pedido ativo" : "fazer-pedido"}>
       { todos===true? (<p>Fechar pedido</p>):(<p>Selecione os 3 itens<br />para fechar o pedido</p>)}
        </a>
      </div>
    );
}
import React from 'react';
export default function Footer(props){
  const {todos,mensagem}=props;
  
  const mensagemFormatada = encodeURIComponent(mensagem);

  const url = `https://wa.me/5521991234?text=${mensagemFormatada}`;
  

    return(
        <div className="footer">
        <a href={todos===true?url:"#"} className={todos===true? "fazer-pedido ativo" : "fazer-pedido"}>
       { todos===true? (<p>Fechar pedido</p>):(<p>Selecione os 3 itens<br />para fechar o pedido</p>)}
        </a>
      </div>
    );

  }

    
import React from 'react';
export default function Footer(props){
  const {todos,nomePrato,precoPrato,qtdPrato,nomeBebida,precoBebida,qtdBebida,nomeSobremesa,precoSobremesa,qtdSobremesa}=props;

  let precoPratoTotal=parseFloat(precoPrato)*qtdPrato;
  let precoBebidaTotal=parseFloat(precoBebida)*qtdBebida;
  let precoSobremesaTotal=parseFloat(precoSobremesa)*qtdSobremesa;

  let precoTotal=  (precoPratoTotal + precoBebidaTotal + precoSobremesaTotal).toFixed(2);

  let mensagem=`Olá, gostaria de fazer o pedido: - Prato: ${nomePrato} (${qtdPrato}x) - Bebida: ${nomeBebida} (${qtdBebida}x) - Sobremesa: ${nomeSobremesa} (${qtdSobremesa}x) Total: R$ ${precoTotal} `;

  const mensagemFormatada = encodeURIComponent(mensagem);

  const url = `https://wa.me/5521999998844?text=${mensagemFormatada}`;
  

    return(
        <div className="footer">
        <a href={todos===true?url:"#"} className={todos===true? "fazer-pedido ativo" : "fazer-pedido"}>
       { todos===true? (<p>Fechar pedido</p>):(<p>Selecione os 3 itens<br />para fechar o pedido</p>)}
        </a>
      </div>
    );

  }

    
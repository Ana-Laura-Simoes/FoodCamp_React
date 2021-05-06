import React from 'react';
export default function Opcao(props){
  const [borda, setBorda] = React.useState(props.borda); 
  const [array, setArray] = React.useState(props.array);
  const [contador, setContador] = React.useState(0); 


  function Selecionado(item){
    setArray(props.Desmarcar(item));
console.log(array); 
  }

  function Decrementar(cont){
    (cont>1)?setContador(contador-1):setBorda(false);
  }
  function Incrementar(cont){
    setContador(contador+1);
  }

    return(
        <div  className={borda===true ? "opcao selecionado": "opcao"} onClick={()=>Selecionado(props.titulo)}>
        <img src={props.imagem} />
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="preco">R$ {props.preco}</div>
        <div class="check">
         <span class="menos" onClick={()=>Decrementar(contador)}>- </span> {contador} <span class="mais" onClick={()=>Incrementar(contador)}> +</span>
        </div>
      </div>

    );
}
import React from 'react';
export default function Opcao(props){
  const [borda, setBorda] = React.useState(false); 
  const [array, setArray] = React.useState(props.array);

  //setArray(array.forEach((item) => item.borda=borda));
  function Selecionado(){
   if(!borda){
    setBorda(true);
   }
      
      
      
  
  }

    return(
        <div  className={borda===true ? "opcao selecionado": "opcao"} onClick={Selecionado}>
        <img src={props.imagem} />
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="preco">R$ {props.preco}</div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
      </div>

    );
}
import React from 'react';
export default function Opcao(props){
  //const [borda, setBorda] = React.useState(props.borda); 
  const [array, setArray] = React.useState(props.array);
  //const [contador, setContador] = React.useState(1); 

function ProcuraItem(item){
  array.forEach(element => {if(element.titulo === item ) {
   return true;
     } });
}

  function Selecionado(borda,item){
    if(!borda){
      array.forEach(element => {if(element.titulo === item ) {
        element.borda=true;
        element.contador=1;
         }
      else{element.borda=false
    element.cont=0;
    }  });
      const novoArray=[...array];
      setArray(novoArray);
    
    }

  }

  function Decrementar(item){
    array.forEach(element => {if(element.titulo === item ) {
      element.contador-=1;
      if(element.contador===0) element.borda=false;     
    }console.log(element);
    });
    const novoArray=[...array];
    setArray(novoArray);

  }

  function Incrementar(item){
    //setContador(contador+1);    
    array.forEach(element => {if(element.titulo === item ) {element.contador+=1;
      console.log(element); } });

  const novoArray=[...array];
  setArray(novoArray);
  
      }


  return(
    array.map((item) => {
      return(
          <div  className={item.borda===true ? "opcao selecionado": "opcao"} onClick={()=>Selecionado(item.borda,item.titulo)}>
          <img src={item.imagem} />
          <div class="titulo">{item.titulo}</div>
          <div class="descricao">{item.descricao}</div>
          <div class="preco">R$ {item.preco}</div>
          <div class="check">
          <span class="menos" onClick={()=>Decrementar(item.titulo)}>- </span> {item.contador} <span class="mais" onClick={()=>Incrementar(item.titulo)}> +</span>
          </div>
        </div>
  
      );
    })
  );



}
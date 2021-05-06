import React from 'react';
import Finalizar from "./Finalizar";
export default function Opcao(props){
  const {todosItens, setTodosItens} = props;
  const [array, setArray] = React.useState(props.array);

  

  function Selecionado(borda,item){
    if(!borda){
      array.forEach(element => {if(element.titulo === item ) {
        element.borda=true;
        element.contador=1;
        incluiItens(item,element.preco,element.contador);
         <Finalizar
          nome={item}
         preco={element.preco}
        //contador={element.contador}
         />

         }
      else{element.borda=false
    element.cont=0;
    }});
      const novoArray=[...array];
      setArray(novoArray);
    
    }
 
  }

  function incluiItens(item,preco,contador){  
    const itemSelecionado = {
      nome: item,
      preco: preco,
      contador: contador,
    }    
    const novaArray = [...todosItens, itemSelecionado];
    setTodosItens(novaArray);  
  }







  function Decrementar(item){
    array.forEach(element => {if(element.titulo === item ) {
      element.contador-=1;
      //const contador=element.contador;
      //props.contador(contador);
      if(element.contador===0) element.borda=false;     
    }//console.log(element);
    });
    const novoArray=[...array];
    setArray(novoArray);

  }

  function Incrementar(item){
    //setContador(contador+1);    
    array.forEach(element => {if(element.titulo === item ) {element.contador+=1;
      //const contador=element.contador;
      //props.contador(contador); 
    } });

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
          <span class="menos"onClick={(e) => { e.stopPropagation(); Decrementar(item.titulo) }}>- </span> {item.contador} <span class="mais" onClick={()=>Incrementar(item.titulo)}> +</span>
          </div>
        </div>
  
      );
    })
  );



}
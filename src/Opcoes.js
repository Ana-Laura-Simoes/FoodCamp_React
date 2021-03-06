  
import React from 'react';
export default function Opcao(props){
  const {todosItens, setTodosItens} = props;
  const [array, setArray] = React.useState(props.array);

  function Selecionado(borda,item){
    if(!borda){ 
      array.forEach(element => {if(element.titulo === item ) {
        element.borda=true;
        element.contador=1;
        incluiItens(item,element.preco,element.contador);
         }
});
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
    const novaArray = [...todosItens,itemSelecionado];
    setTodosItens(novaArray);
  }

  function excluiItens(nome){
    const novaArray = todosItens.filter((item) => item.nome !== nome);
    setTodosItens(novaArray);
  }

  function atualizaContador(nome,contador){
    const itensAtualizados = todosItens.map((item) => {
      if (item.nome === nome) {
        return {
          nome: nome,
          preco: item.preco,
          contador: contador,
        };
      } else {
        return item;
      }      
    });
    setTodosItens(itensAtualizados);
    //console.log(itensAtualizados)
  }

  function Decrementar(item){
    array.forEach(element => {if(element.titulo === item ) {
      element.contador-=1;
      //incluiItens(item,element.preco,element.contador);
      atualizaContador(item,element.contador);
      if(element.contador===0) {
        //setTodosItens([]);
        excluiItens(item);
        element.borda=false;}     
      }
    });
    const novoArray=[...array];
    setArray(novoArray);

  }

  function Incrementar(item){
        
    array.forEach(element => {if(element.titulo === item ) {
      element.contador+=1;
      //incluiItens(item,element.preco,element.contador);
      atualizaContador(item,element.contador);
    } });

  const novoArray=[...array];
  setArray(novoArray);
  
      }


  return(
    array.map((item) => {
      return(
          <div  className={item.borda===true ? "opcao selecionado": "opcao"} onClick={()=>Selecionado(item.borda,item.titulo)}>
          <img src={item.imagem} />
          <div className="titulo">{item.titulo}</div>
          <div className="descricao">{item.descricao}</div>
          <div className="preco">R$ {item.preco}</div>
          <div className="check">
          <span className="menos"onClick={(e) => { e.stopPropagation(); Decrementar(item.titulo) }}>- </span> {item.contador} <span className="mais" onClick={()=>Incrementar(item.titulo)}> +</span>
          </div>
        </div>
  
      );
    })
  );

}
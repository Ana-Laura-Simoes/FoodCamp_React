  
import React from 'react';
import Footer from "./Footer";
import SecaoPratos from "./Pratos";
import SecaoBebidas from "./Bebidas";
import SecaoSobremesas from "./Sobremesas";

export default function Menu(props){
    const [todosPratos, setTodosPratos] = React.useState([]);
    const [todasBebidas, setTodasBebidas] = React.useState([]);
    const [todasSobremesas, setTodasSobremesas] = React.useState([]);
    let todos = false;
    let nomePrato;
    let precoPrato;
    let qtdPrato;
    let nomeBebida;
    let precoBebida;
    let qtdBebida;
    let nomeSobremesa;
    let precoSobremesa;
    let qtdSobremesa;

    if(todosPratos.length > 0 && todasBebidas.length > 0 && todasSobremesas.length > 0) {
        todos = true;
        console.clear();
        for(let i=0;i<todosPratos.length;i++){
            console.log("lala");
            nomePrato=todosPratos[i].nome;
            precoPrato=todosPratos[i].preco.replace(",",".");
            qtdPrato=todosPratos[i].contador;
        }
        console.log(nomePrato);
        console.log(precoPrato);
        console.log(qtdPrato);

        for(let i=0;i<todasBebidas.length;i++){
            console.log("lala");
            nomeBebida=todasBebidas[i].nome;
            precoBebida=todasBebidas[i].preco.replace(",",".");
            qtdBebida=todasBebidas[i].contador;
        }
        console.log(nomeBebida);
        console.log(precoBebida);
        console.log(qtdBebida);

        for(let i=0;i<todasSobremesas.length;i++){
            nomeSobremesa=todasSobremesas[i].nome;
            precoSobremesa=todasSobremesas[i].preco.replace(",",".");
            qtdSobremesa=todasSobremesas[i].contador;
        }
        console.log(nomeSobremesa);
        console.log(precoSobremesa);
        console.log(qtdSobremesa);
      }

      //console.clear()
      //console.log(todosPratos)
      //console.log(todasBebidas)
      //console.log(todasSobremesas)
      //console.log(todos);

    return(
        <>
        <div className="menu">
         <SecaoPratos
          todosPratos={todosPratos}
          setTodosPratos={setTodosPratos}
         />
         <SecaoBebidas 
          todasBebidas={todasBebidas}
          setTodasBebidas={setTodasBebidas}         
         />
         <SecaoSobremesas 
          todasSobremesas={todasSobremesas}
          setTodasSobremesas={setTodasSobremesas}         
         />
      </div>
      <Footer todos={todos}
          nomePrato={nomePrato}
          precoPrato={precoPrato}
          qtdPrato={qtdPrato}
          nomeBebida={nomeBebida}
          precoBebida={precoBebida}
          qtdBebida={qtdBebida}
          nomeSobremesa={nomeSobremesa}
          precoSobremesa={precoSobremesa}
          qtdSobremesa={qtdSobremesa}
      />
      </>
    );
}


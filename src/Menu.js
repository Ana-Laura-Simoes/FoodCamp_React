  
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
    let pratitos="";
    let valorPratitos=0;
    let bebitas="";
    let valorBebitas=0;
    let sobremesitas="";
    let valorSobremesitas=0;

    if(todosPratos.length > 0 && todasBebidas.length > 0 && todasSobremesas.length > 0) {
        todos = true;
        console.clear();
        for(let i=0;i<todosPratos.length;i++){
            let nomePrato=todosPratos[i].nome;
            let precoPrato=todosPratos[i].preco.replace(",",".");
            let qtdPrato=todosPratos[i].contador;
            pratitos +=` ${nomePrato} (${qtdPrato}x)`;
            valorPratitos+=parseFloat(precoPrato)*qtdPrato;
        }
        for(let i=0;i<todasBebidas.length;i++){
            let nomeBebida=todasBebidas[i].nome;
            let precoBebida=todasBebidas[i].preco.replace(",",".");
            let qtdBebida=todasBebidas[i].contador;
            bebitas+=` ${nomeBebida} (${qtdBebida}x)`;
            valorBebitas+=parseFloat(precoBebida)*qtdBebida;
        }


        for(let i=0;i<todasSobremesas.length;i++){
            let nomeSobremesa=todasSobremesas[i].nome;
            let precoSobremesa=todasSobremesas[i].preco.replace(",",".");
            let qtdSobremesa=todasSobremesas[i].contador;
            sobremesitas+=` ${nomeSobremesa} (${qtdSobremesa}x)`;
            valorSobremesitas+=parseFloat(precoSobremesa)*qtdSobremesa;
        }
      }

      console.clear() 
      let precoTotal=  (valorPratitos + valorBebitas + valorSobremesitas).toFixed(2);
      let mensagem=`Olá, gostaria de fazer o pedido:\n- Prato: ${pratitos}\n- Bebida: ${bebitas}\n- Sobremesa: ${sobremesitas}\nTotal: R$ ${precoTotal}`;
      console.log(mensagem);
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
       mensagem={mensagem}
          
      />
      </>
    );
}


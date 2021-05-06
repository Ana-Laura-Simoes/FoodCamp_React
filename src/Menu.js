import React from 'react';
import SecaoPratos from "./Pratos";
import SecaoBebidas from "./Bebidas";
import SecaoSobremesas from "./Sobremesas";

export default function Menu(props){
    const [todosPratos, setTodosPratos] = React.useState([]);
    const [todasBebidas, setTodasBebidas] = React.useState([]);
    const [todasSobremesas, setTodasSobremesas] = React.useState([]);
    let todos = true;

    if(todosPratos.length > 0 && todasBebidas.length > 0 && todasSobremesas.length > 0) {
        todos = false;
      }

      console.clear()
      console.log(todosPratos)
      console.log(todasBebidas)
      console.log(todasSobremesas)

    return(
        <div class="menu">
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
    );
}


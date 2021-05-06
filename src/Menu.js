import React from 'react';
import SecaoPratos from "./Pratos";
import SecaoBebidas from "./Bebidas";
import SecaoSobremesas from "./Sobremesas";

export default function Menu(){
    const [opcaoPrato, setOpcaoPrato] = React.useState(0); 
    return(
        <div class="menu">
         <SecaoPratos opcaoSelecao={opcaoPrato}/>
         <SecaoBebidas/>
         <SecaoSobremesas/>
      </div>
    );
    alert(opcaoPrato);
}


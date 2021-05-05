import SecaoPratos from "./Pratos";
import SecaoBebidas from "./Bebidas";
import SecaoSobremesas from "./Sobremesas";
export default function Menu(){
    return(
        <div class="menu">
         <SecaoPratos/>
         <SecaoBebidas/>
         <SecaoSobremesas/>
      </div>
    );
}


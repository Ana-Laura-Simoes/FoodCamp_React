import Opcao from "./Opcoes";
export default function SecaoPratos(props){
    const pratos=[{borda:false,contador:0,imagem:"img/frango_yin_yang.png" ,titulo:"Frango Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"14,90"},
        {borda:false,contador:0,imagem:"img/frango_yin_yang.png" ,titulo:"Carne Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"17,90"},
        {borda:false,contador:0,imagem:"img/frango_yin_yang.png" ,titulo:"Peixe Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"16,90"}];    
    

        return(
        <div class="secao">
          <div class="titulo">Primeiro, seu prato</div>
          <div class="opcoes pratos">
          <Opcao array={pratos}/>
          </div>
        </div>
    );
}


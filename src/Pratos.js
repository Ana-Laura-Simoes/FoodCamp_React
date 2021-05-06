import Opcao from "./Opcoes";
export default function SecaoPratos(props){
    const pratos=[{borda:false,imagem:"img/frango_yin_yang.png" ,titulo:"Frango Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"14,90"},
        {borda:false,imagem:"img/frango_yin_yang.png" ,titulo:"Carne Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"17,90"},
        {borda:false,imagem:"img/frango_yin_yang.png" ,titulo:"Peixe Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"16,90"}];    
    
    function Desmarcar(item){
      
    pratos.forEach(element => {if(element.titulo === item) element.borda=true;
    else element.borda=false });
    return pratos;
  }

        return(
        <div class="secao">
          <div class="titulo">Primeiro, seu prato</div>
          <div class="opcoes pratos">
          {pratos.map((item) => {
          return (
            <Opcao
              borda={item.borda}
              Desmarcar={Desmarcar}
              array={pratos}
              imagem={item.imagem}
              titulo={item.titulo}
              descricao={item.descricao}
              preco={item.preco}
            />
          );
        })}
          </div>
        </div>
    );
}


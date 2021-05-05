import Opcao from "./Opcoes";
export default function SecaoPratos(props){
    const pratos=[{imagem:"img/frango_yin_yang.png" ,titulo:"Frango Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"14,90"},
        {imagem:"img/frango_yin_yang.png" ,titulo:"Carne Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"17,90"},
        {imagem:"img/frango_yin_yang.png" ,titulo:"Peixe Yin Yang" ,descricao:"Um pouco de batata, um pouco de salada" ,preco:"16,90"}];    
    return(
        <div class="secao">
          <div class="titulo">Primeiro, seu prato</div>
          <div class="opcoes pratos">
          {pratos.map((item) => {
          return (
            <Opcao
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


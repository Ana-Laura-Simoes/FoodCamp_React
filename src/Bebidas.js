import Opcao from "./Opcoes";
export default function SecaoBebidas(props){
    const bebidas=[{imagem:"img/coquinha_gelada.png" ,titulo:"Coquinha gelada" ,descricao:"Lata 350ml" ,preco:"6,90"},
        {imagem:"img/coquinha_gelada.png" ,titulo:"Guaraná gelado" ,descricao:"Lata 350ml" ,preco:"4,90"},
        {imagem:"img/coquinha_gelada.png" ,titulo:"Suquinho gelado" ,descricao:"500ml" ,preco:"7,90"}];    
    return(
        <div class="secao">
          <div class="titulo">Agora, sua bebida</div>
          <div class="opcoes bebidas">
            <Opcao array={bebidas}/>
          </div>
        </div>
    );
}


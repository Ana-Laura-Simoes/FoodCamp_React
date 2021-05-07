import Opcao from "./Opcoes";
export default function SecaoSobremesas(props){
  const {todasSobremesas, setTodasSobremesas} = props;
    const sobremesas=[{imagem:"img/pudim.png" ,titulo:"Pudim" ,descricao:"Apenas um pudim" ,preco:"7,90"},
        {imagem:"img/pudim.png" ,titulo:"Mousse" ,descricao:"Cremoso, gostoso" ,preco:"6,90"},
        {imagem:"img/pudim.png" ,titulo:"Brownie" ,descricao:"É um bolinho" ,preco:"4,90"}];    
    return(
        <div class="secao">
          <div class="titulo">Por fim, sua sobremesa</div>
          <div class="opcoes sobremesas">
            <Opcao  array={sobremesas}
              todosItens={todasSobremesas}
              setTodosItens={setTodasSobremesas}           
           />
          </div>
        </div>
    );
}
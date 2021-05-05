export default function Opcao(props){
    return(
        <div class="opcao"onClick="">
        <img src={props.imagem} />
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="preco">R$ {props.preco}</div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
      </div>

    );
}
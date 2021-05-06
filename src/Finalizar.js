
export default function Finalizar(props){
    console.log(props.nome);
    console.log(props.preco);
    console.log(props.contador);
    return(
        <div>{props.nome} {props.preco} {(props.contador)} </div>
    )
}
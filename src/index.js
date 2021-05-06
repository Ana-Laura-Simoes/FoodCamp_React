  
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function App() {
let opcaoPrato={titulo:"",preco:"",qtd:0};
let opcaoBebida={titulo:"",preco:"",qtd:0};
let opcaoSobremesa={titulo:"",preco:"",qtd:0}; 
  return (
    <>
     <Header/>
     <Menu
     opcaoPrato={opcaoPrato}
     opcaoBebida={ opcaoBebida}
     opcaoSobremesa={ opcaoSobremesa} 
     />
     <Footer/>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
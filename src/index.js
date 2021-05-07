  
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";


function App() {

  return (
    <>
     <Header/>
     <Menu/>
     
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
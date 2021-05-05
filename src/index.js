  
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";


function App() {
  return (
    <>
     <Header/>
     <Menu/>
     <Footer/>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import { Body } from "./Body";

function App(){
    return(
        <div>
       
          <NavBar/>
          <Body/>
      
        </div>
    );
}

const app = App();
const element = document.querySelector(".root");




ReactDOM.render(<Body/>, element)
ReactDOM.render(<NavBar/>, element);
ReactDOM.render(app, element);

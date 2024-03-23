import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Body from "./components/bodySection";
import ToDoInput from "./toDoInput";
import PracticeFolder from "./practiceFolder";
import Products from "./apis";
import { ContextComponent } from "./components/contextComponent";  
import { useContext } from "react";
import TicTacToe from "./ticTacToe/ticTacToe";
import ComplexObject from "./Exercises/ComplexObject";
// import { useContext } from "react";

function App() {
  // const { color, chngColor } = useContext(Context);


  return (
    <div className="bg-gray">
      <ComplexObject/>

      </div>
  
  );
}

export default App;

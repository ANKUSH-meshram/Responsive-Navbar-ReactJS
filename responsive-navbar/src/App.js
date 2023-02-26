import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;

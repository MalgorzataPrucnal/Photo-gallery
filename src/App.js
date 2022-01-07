import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Gallery } from './views/gallery';
// import { Home } from "./views/home/home";

function App() {
  return (
    <div className="App">
<Gallery/>
</div>
  );
}

export default App;

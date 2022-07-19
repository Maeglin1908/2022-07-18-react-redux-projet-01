import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyLogin from "./pages/MyLogin";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<MyLogin/>} />
            </Routes>
            <footer>
                <hr/>
                <Navigation/>

            </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import FirstPage from "./Components/FirstPage/FirstPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";

function App() {
    return <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    </div>;
}

export default App;

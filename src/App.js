import './App.css'
import FirstPage from './Components/FirstPage/FirstPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import SecondPage from './Components/SecondPage/SecondPage'
import ThirdPage from './Components/ThirdPage/ThirdPage'
import FourPage from './Components/FourPage/FourPage'
import FivePage from './Components/FivePage/FivePage'
import SixPage from './Components/SixPage/SixPage'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App

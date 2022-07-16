import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Form from "./components/Form"
import Watch from "./components/Watch"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/time" element={<Watch />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

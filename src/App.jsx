import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<MainPage />} path="/" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

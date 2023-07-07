import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Mart from './mart'
import Login from './login';
import SignUp from "./signup";
import Reset from './resetpass';


function App() {
    return(
        <Router>
        <div className="App">
        <div className="Content">
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/" element={<Mart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reset" element={<Reset/>}/>
            </Routes>
        </div>
        </div>
        </Router>
    );
}

export default App;
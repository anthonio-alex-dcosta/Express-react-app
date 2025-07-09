import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup/>}> </Route>
          <Route path="/" element={<Login/>}> </Route>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Naruto from './components/Naruto'
import Info from './Pages/infoPersonagem'
import '/src/style/estilo.css';

function App() {
  const [count, setCount] = useState(0)

  document.body.classList.add('paginaInteira');
  
  return (
    <>
    <div className="App">
      <p className='titulo'>Naruto API</p>
    </div>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
        <Route index element={<span className='bemVindo'>Bem vindo</span>}></Route>
        <Route path="naruto" element={<Outlet/>} >
          <Route index element={<Naruto/>}/>
          <Route path=":key" element={<Info></Info>}></Route>
        </Route>
        
      </Route>
    </Routes>

    </>
  )
}

export default App

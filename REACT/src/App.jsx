import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Import_Lists'
import Utils_Route from './utils/Utils_Route'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/*" element={ <Home/> } />


            <Route exact path="/utils/*" element={ <Utils_Route /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App

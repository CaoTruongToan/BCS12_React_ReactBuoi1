import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Slide from './Component/Slide'
import Content from './Component/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Slide/>

      <Content/>

      <Footer/>
    </>
  )
}

export default App

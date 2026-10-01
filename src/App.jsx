import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <main className="Cards-grid">
        <Card name="Nelson" role="FrontEnd Dev" bio="Spending Time Wisely" avatar="./src/assets/org1.png"/>
        <Card name="Putra" role="BackEnd Dev" bio="Do Less, Achieve More" avatar="./src/assets/org2.png"/>
        <Card name="Angga" role="DevOps Engineer" bio="Focus and Execute" avatar="./src/assets/org4.png"/>
      </main>
    </div>
    <Footer />
    </>
   
  )
}

export default App

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
        <Card name="nelson" role="FrontEnd Dev" bio="Hidup susah jangan dibuat susah" avatar="./src/assets/org1.png"/>
        <Card name="putra" role="BackEnd Dev" bio="Hidup susah jangan dibuat susah" avatar="./assets/org1.png"/>
        <Card name="aryo" role="UI/UX Dev" bio="Hidup susah jangan dibuat susah" avatar="./assets/org3.png"/>
        <Card name="angga" role="DevOps Engineer" bio="Hidup susah jangan dibuat susah" avatar="./assets/org4.png"/>
      </main>
    </div>
    <Footer />
    </>
   
  )
}

export default App

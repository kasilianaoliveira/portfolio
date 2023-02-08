import { useState } from 'react'
import { Home } from './components/Home/Index';
import "./global.css";
import { Menu } from './components/Menu/Index';
import { About } from './components/About/Index';
import { Projects } from './components/Projects/Index';
import { Services } from './components/Services/Index';
import { Footer } from './components/Footer/Index';

function App() {

  return (
    <>
      <Menu />
      <main className="App">
        <Home />
        <About />
        <Projects />
        <Services />
        <Footer />
      </main>
    </>
  )
}

export default App

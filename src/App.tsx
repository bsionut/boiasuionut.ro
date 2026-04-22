import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Process />
        <Portfolio />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

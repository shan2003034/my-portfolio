import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#deff9a] selection:text-black">
      <Navbar/>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#deff9a] selection:text-black">
      <Navbar/>
      <Hero />
      <main className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Chatbot/>
      </main>

    </div>
  )
}

export default App
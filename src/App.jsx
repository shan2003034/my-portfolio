import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#deff9a] selection:text-black">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects/>

    </div>
  )
}

export default App
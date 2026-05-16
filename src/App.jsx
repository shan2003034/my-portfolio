import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#deff9a] selection:text-black">
      <Hero />
      <About />
      <Education />
    </div>
  )
}

export default App
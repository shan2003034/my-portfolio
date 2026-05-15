import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#deff9a] selection:text-black">
      <Hero />
      <About />
    </div>
  )
}

export default App
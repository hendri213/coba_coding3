import Index from './content/Index'
import About from './content/About'
import Projects from './content/Projects'
import './globals.css'

const Home = () => {
  return (
    <div className="md:px-10 px-7 py-4 mt-[50px]">
      <Index />
      <About />
      <Projects />
    </div>
  )
}

export default Home
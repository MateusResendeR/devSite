import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='w-full flex'>
      <div className='w-full justify-items-center'>
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App

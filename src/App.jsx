import {About, Header, Footer, Skills, Work } from './container'
import Navbar from './components/Navbar/Navbar'
import './App.scss';

function App() {


  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
      
    </div>
  )
}

export default App

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  return (
    <div className='h-screen relative bg-slate-200'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App

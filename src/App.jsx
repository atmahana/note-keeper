import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App

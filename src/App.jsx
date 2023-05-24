import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Content from './layouts/Content'

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

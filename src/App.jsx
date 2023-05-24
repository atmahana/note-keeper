import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Content from './layouts/Content'

function App() {

  return (
    <div className='flex flex-col h-screen relative'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App

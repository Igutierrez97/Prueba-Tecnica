import './App.css'
import { Navbar } from './components'
import { Home } from './pages'
import { LayaouContainer } from './style-Component'

function App() {

  return (
    <>
      <Navbar/>
      <LayaouContainer>
      <Home/>
      </LayaouContainer>
      
    </>
  )
}

export default App

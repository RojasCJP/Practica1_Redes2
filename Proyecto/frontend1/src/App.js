import './App.css'
import Graphics from './components/graphics'
import Images from './components/images'
import People from './components/people'
import Navbar from './components/navbar'
import Home from './components/home'

function App() {
  let Component
  switch (window.location.pathname) {
    case '/':
      Component = Home
      break
    case '/images':
      Component = Images
      break
    case '/people':
      Component = People
      break
    default:
      Component = Home
      break
  }

  return (<>
    <Navbar />
    <div className='container'>
      <Component />
    </div>
  </>
  )
}

export default App

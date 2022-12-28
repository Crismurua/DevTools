
import { Provider } from 'react-redux/es/exports'
import './App.css'
import  NavBar  from './components/NavBar/NavBar'
import { Home, Settings, Projects } from './pages'
import store from './redux/store'
import { Layout } from './styled-components'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Provider store={store}>
      <NavBar />
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </Layout>
    </Provider>
  )
}

export default App

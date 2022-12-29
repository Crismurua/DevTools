
import { Provider } from 'react-redux/es/exports'
import './App.css'
import  NavBar  from './components/NavBar/NavBar'
import { Settings, Projects } from './pages'
import store from './redux/store'
import { Layout } from './styled-components'
import { Routes, Route } from 'react-router-dom'
import UserDetail from './pages/Home/components/UserDetail/UserDetail'
import Home from './pages/Home/Home'




function App() {

  return (
    <Provider store={store}>
      <NavBar />
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/:id' element={<UserDetail/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </Layout>
    </Provider>
  )
}

export default App

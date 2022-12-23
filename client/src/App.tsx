import { useState } from 'react'
import { Provider } from 'react-redux/es/exports'
import './App.css'
import { NavBar } from './components'
import { Home } from './pages'
import store from './redux/store'
import { Layout } from './styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <NavBar />
      <Layout>
        <Home/>
      </Layout>
    </Provider>
  )
}

export default App

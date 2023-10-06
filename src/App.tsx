import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CustomButton from './components/CustomButton/CustomButton'
import Layout from './Layout/Layout'
import About from './pages/About'
import UsersView from './pages/UsersView'
import UserSingle from './components/Users/UserSingle'

function App() {

  return (
    <>
        <CustomButton />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<UsersView />} />
            <Route path='/users/:userId' element={<UserSingle/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

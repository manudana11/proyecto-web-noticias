import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import FormNews from './components/Form/FormNews'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <div className='App'>
    <BrowserRouter>
      <GlobalProvider>
        <Header/>
        <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/listNews' element={<ListNews/>} />
          <Route path='/formNews' element={<FormNews/>} />
        </Routes>
        </div>
        <Footer/>
      </GlobalProvider>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App

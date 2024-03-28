import './App.css'
import Home from './components/home'
import Transactions_Page from './components/Transcations'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/transactions'} element={<Transactions_Page />}/>
        {/* <Route path={'/'} element={<Home />}/> */}
        {/* <Route path={'/'} element={<Home />}/> */}
      </Routes>
    </Router>
      {/* <Home /> */}
    </>
  )
}

export default App

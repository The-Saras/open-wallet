import './App.css'
import Home from './components/home'
import Transactions_Page from './components/Transcations'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import User_Login from './components/User_Login'
import User_Signup from './components/User_Signup'
import Account_Details from './components/Account_Details'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/transactions'} element={<Transactions_Page />}/>
        <Route path={'/user_login'} element={<User_Login/>}/>
        <Route path={'/user_signup'} element={<User_Signup/>}/>
        <Route path={'/account_details'} element={<Account_Details />}/>

        {/* <Route path={'/'} element={<Home />}/> */}
        {/* <Route path={'/'} element={<Home />}/> */}
      </Routes>
    </Router>
      {/* <Home /> */}
    </>
  )
}

export default App

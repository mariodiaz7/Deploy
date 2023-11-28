import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Signin from "./components/header/signin/Signin"
import Login from "./components/header/login/Login"
import LandingPage from "./components/landingPage/LandingPage"
import AddInfo from "./components/add/addInfo/AddInfo"
import Marketplace from "./components/marketplace/Marketplace"
import Pupilajes from "./components/pupilajes/Pupilajes"
import Profile from "./components/profile/Profile"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/Signin" Component={Signin}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/AddInfo" Component={AddInfo}/>
        <Route path="/Marketplace" Component={Marketplace}/>
        <Route path="/Pupilajes" Component={Pupilajes} />
        <Route path="/Profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

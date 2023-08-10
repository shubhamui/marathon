import { Header } from "./component/header"
import "./App.css"
import { Cover } from "./component/cover"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./component/footer"
import { Marathon } from "./component/marathon"
import { Dp } from "./component/dp"
import { Volunteer } from "./component/volunteer"


export const App = () => {
  return (
    <div className="inner">
      <BrowserRouter>
      {/* <BrowserRouter basename="/viratvaishyamahapanchayat"> */}
      <Header />
      <main style={{flex : 1}}>
        <Routes>
          <Route path="/" exact element={<Cover />} />
          <Route path="/marathon" exact element= {localStorage.getItem("registered") ? <h1>You are registered</h1> : <Marathon />} />
          <Route path="/make-my-dp" exact element={<Dp />} />
          <Route path="/volunteer" exact element={ window.localStorage.getItem("REGISTERED") ? <h1 id="vol-register">You are already Registered</h1> : <Volunteer /> } />
        </Routes>
      
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
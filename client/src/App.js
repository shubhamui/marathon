import { Header } from "./component/header"
import "./App.css"
import { Cover } from "./component/cover"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./component/footer"
import { Marathon } from "./component/marathon"
import { Dp } from "./component/dp"

export const App = () => {
  return (
    <div className="inner">
      <BrowserRouter>
      {/* <BrowserRouter basename="/viratvaishyamahapanchayat"> */}
      <Header />
      <main style={{flex : 1}}>
      
        
        <Routes>
          <Route path="/" exact element={<Cover />} />
          <Route path="/marathon" exact element={<Marathon />} />
          <Route path="/make-my-dp" exact element={<Dp />} />
        </Routes>
      
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
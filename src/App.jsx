import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-20 lg:py-10" >
        <HashRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Header/>
                <Body/>
                <Footer/>
              </>
            } />
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App

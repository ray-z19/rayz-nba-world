import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./component_modules/Home"
import { PlayerH2H } from "./component_modules/PlayerH2H";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player-h2h" element={<PlayerH2H />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

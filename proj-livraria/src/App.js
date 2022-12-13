import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { Home } from './pages/home'
import { Contato } from './pages/contato'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

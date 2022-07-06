import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Search } from './pages/search/Search'
import { Response } from './pages/response/Response'

import './styles/app.css'

function App() {
  return (
    <div className="App d-flex flex-column">
      <Router>
        <Routes>
          <Route exact path='/' element={<Search />} />
          <Route exact path='/found/:code' element={<Response />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

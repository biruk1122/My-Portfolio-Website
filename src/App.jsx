import {Routes, Route} from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    
      <Routes>
        <Route path="/*" element={<MainLayouts/>}>
          <Route path="" element={<Home/>} />
        </Route>
      </Routes>
    
  )
}

export default App
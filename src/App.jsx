import './App.css'
import Calendario from './components/Calendario';
import PageReact from './pages/PageReact';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PageUseReduscer from './pages/PageUseReduscer';
import PageUseEffect from './pages/PageUseEffect';
import PageUseContext from './pages/PageUseContext';
import PageUseState from './pages/PageUseState';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageReact />} />
        <Route path="/usereducer" element={<PageUseReduscer />} />
        <Route path="/useeffect" element={<PageUseEffect />} />
        <Route path="/usecontext" element={<PageUseContext />} />
        <Route path="/usestate" element={<PageUseState />} />
      </Routes>
      {/* <Calendario /> */}
    </BrowserRouter>
  )
}

export default App

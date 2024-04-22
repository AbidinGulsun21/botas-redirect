import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';
import Trading from './pages/trading';
import Pipeline from './pages/pipeline';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="trading" element={<Trading />} />
          <Route path="pipeline" element={<Pipeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


// eslint-disable-next-line
{/* <div className="card bg-white p-0 m-0 w-100">
<div className="card-content">
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center">
      <div className="h-50">
        <h3 className="text-danger firma-font">Botaş App</h3>
        <span>Total Visits</span>
      </div>
      <img src={val.logo} alt='botaş-app' />
    </div>
  </div>
</div>
</div> */}

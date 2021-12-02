import React, { Suspense } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./components/LandingPage/LandingPage'))
const SongTable = React.lazy(() => import('./components/SongTable/SongTable'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className='centered'>Loading...</div>
      }>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/songtable" element={<SongTable />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

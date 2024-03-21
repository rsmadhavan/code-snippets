// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import DisplayPage from './pages/DisplayPage';

function App() {
  console.log()
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/display" element={<DisplayPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

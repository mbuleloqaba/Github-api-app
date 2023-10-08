import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchUser from './components/SearchUser'; // Import your SearchUser component
import UserDetails from './components/UserDetails'; // Import your UserDetails component



function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Browser</h1>
        <Routes>
          <Route path="/" element={<SearchUser />} />
          <Route path="/user/:username" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

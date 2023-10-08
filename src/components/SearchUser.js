import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SearchUser.css'; // Import the CSS file

function SearchUser() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/user/${username}`);
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('User not found'); // You can set a more detailed error message
      setLoading(false);
    }
  }

  return (
    <div className="search-container">
    <input
      type="text"
      placeholder="Enter GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="input-field"
    />
    <button onClick={searchUser} disabled={loading} className="search-button">
      {loading ? 'Searching...' : 'Search'}
    </button>
    {error && <p className="error-message">{error}</p>}
    {userData && (
      <div className="user-data-container">
        <h2>{userData.name}</h2>
        <Link to={`/user/${username}`} className="user-data-link">
          View Details
        </Link>
      </div>
    )}
  </div>
);
}

export default SearchUser;

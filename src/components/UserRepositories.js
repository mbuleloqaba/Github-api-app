// UserRepositories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserRepositories.css'; // Import the CSS file

function UserRepositories({ username }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRepositories = async () => {
      try {
        const response = await axios.get(`/api/user/${username}/repositories`);
        setRepositories(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUserRepositories();
  }, [username]);

  return (
<div className="repositories-container">
      <h3>Repositories:</h3>
      {loading ? (
        <p>Loading repositories...</p>
      ) : (
        <ul className="repositories-list">
          {repositories.map((repo) => (
            <li key={repo.id} className="repository-item">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repository-link">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default UserRepositories;

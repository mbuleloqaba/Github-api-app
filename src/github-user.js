import React, { useState } from 'react';
import axios from 'axios';

function SearchUser() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const searchUser = async () => {
    try {
      const response = await axios.get(`/api/user/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={searchUser}>Search</button>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
}

export default SearchUser;

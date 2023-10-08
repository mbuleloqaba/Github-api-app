import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserRepositories from './UserRepositories'; // Import the UserRepositories component
import './UserDetails.css'; // Import the CSS file


function UserDetails() {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`/api/user/${username}`);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <div className="user-details-container">
      {loading ? (
        <p className="loading-message">Loading user details...</p>
      ) : (
        userDetails && (
          <div>
            <h2 className="user-name">{userDetails.name}</h2>
            <img src={userDetails.avatar_url} alt={`${userDetails.login}'s avatar`} className="avatar" />
            {userDetails.bio ? <p className="bio">Bio: {userDetails.bio}</p> : null}
            <UserRepositories username={username} />
          </div>
        )
      )}
    </div>
  );
}

export default UserDetails;

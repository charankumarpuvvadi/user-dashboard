import React from 'react';

function UserCard({ user, onViewDetails }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>{user.email}</p>
      <button onClick={onViewDetails} className="view-details-btn">
        View Details
      </button>
    </div>
  );
}

export default UserCard;

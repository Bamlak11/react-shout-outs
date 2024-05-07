import React from 'react'

const Announcement = ({ message, name, date }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default Announcement


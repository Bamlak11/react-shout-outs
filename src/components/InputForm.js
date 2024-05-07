import React, { useState } from 'react'

const InputForm = ({ onSubmit }) => {
    const [announcement, setAnnouncement] = useState({ message: '', name: '', date: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setAnnouncement({ ...announcement, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(announcement);
      setAnnouncement({ message: '', name: '', date: '' });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Message:</label>
        <input type="text" name="message" placeholder="Message" value={announcement.message} onChange={handleChange} /><br></br>

        <label>Name:</label>
        <input type="text" name="name" placeholder="Name" value={announcement.name} onChange={handleChange} /><br></br>

        <label>Date:</label>
        <input type="date" name="date" value={announcement.date} onChange={handleChange} />
       
       <button type="submit">Submit</button>
      </form>
    );
  };

export default InputForm

import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import Announcement from './components/Announcement';
import { useState } from 'react';


function App() {
  const [announcements, setAnnouncements] = useState([]);

  const handleFormSubmit = (newAnnouncement) => {
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  return (
    <>
   {announcements.map((announcement, index) => (
        <Announcement key={index} {...announcement} />
      ))}

      <InputForm onSubmit={handleFormSubmit}/>

    </>
  );
}

export default App;
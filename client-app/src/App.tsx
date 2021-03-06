import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';


function App() {

  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
      console.log(activities);
    })
  }, [])
  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities'/>
      <header className="App-header">
     
        <ul>
          {activities.map((activity:any) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

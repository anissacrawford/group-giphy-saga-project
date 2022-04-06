import axios from 'axios';
import React from 'react';
import { useEffect } from 'react'

function App(props) {

  const getGiphy = () => {
    axios.get('/api/giphy')
      .then(response => {
        console.log(response.data);
      })
  }

  useEffect(() => {
    getGiphy();
  }, []);

  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;

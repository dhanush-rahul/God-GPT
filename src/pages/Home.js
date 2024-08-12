import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
function Home(){

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const goToDashboard = () =>{
        navigate('/dashboard');
    }

    useEffect(() => {
      fetch('/api')
        .then((response) => response.json())
        .then((data) => setData(data.message));
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to God-GPT</h1>
          <button className="dash" onClick={goToDashboard}>Go to Dashboard</button>
          {data ? <p>{data}</p> : <p>Loading...</p>}
        </header>
      </div>
    );
}
export default Home;
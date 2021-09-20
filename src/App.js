import React, { useState, useEffect } from 'react';
import './App.css';
import SortButtons from './components/SortButtons/SortButtons';
import Table from './components/Table/Table';

function App() {
  const url = 'https://randomuser.me/api/?results=100';

  const [users, setUsers] = useState([]);
  const [mutableUsers, setMutableUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [coloredRows, setColoredRows] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users.results);
        setMutableUsers(Array.from(users.results));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Interview task</h1>
      <SortButtons
        mutableUsers={[...mutableUsers]}
        setMutableUsers={setMutableUsers}
        coloredRows={coloredRows}
        setColoredRows={setColoredRows}
        users={users}
      />
      {loading ? (
        <div className="loading-screen">
          <h1>...Loading</h1>
        </div>
      ) : error ? (
        <div className="error-screen">
          <h1>There was an error, please try again in a few minutes</h1>
        </div>
      ) : (
        <Table
          coloredRows={coloredRows}
          mutableUsers={mutableUsers}
          setMutableUsers={setMutableUsers}
        />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './Table.css';

const Table = ({ setMutableUsers, mutableUsers, coloredRows }) => {
  const deleteUser = (userId) => {
    const filteredUsers = mutableUsers.filter(
      (user) => user.login.uuid !== userId,
    );
    setMutableUsers(filteredUsers);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>image </th>
            <th> name </th>
            <th> surname </th>
            <th> country</th>
            <th> delete</th>
          </tr>
        </thead>
        <tbody>
          {mutableUsers.map((user) => {
            return (
              <tr
                className={`row ${coloredRows && 'row-colored'}`}
                key={user.login.uuid}
              >
                <td>
                  <img alt="user-avatar" src={user.picture.thumbnail} />
                </td>
                <td>{user.name.first} </td>
                <td>{user.name.last} </td>
                <td>{user.location.country} </td>
                <td>
                  <button onClick={() => deleteUser(user.login.uuid)}>
                    delete
                  </button>{' '}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useState } from 'react';

const SortButtons = ({
  coloredRows,
  setColoredRows,
  setMutableUsers,
  mutableUsers,
  users,
}) => {
  const [toggleSort, setToggleSort] = useState(true);

  const handleSort = () => {
    setToggleSort(!toggleSort);
    const sortedUsers = mutableUsers.sort(function (a, b) {
      var textA = a.location.country.toUpperCase();
      var textB = b.location.country.toUpperCase();
      if (toggleSort) {
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      } else {
        return textA < textB ? 1 : textA > textB ? -1 : 0;
      }
    });
    setMutableUsers(sortedUsers);
  };

  const handleRestore = () => {
    setMutableUsers(Array.from(users));
    setToggleSort(true);
  };

  return (
    <div>
      <button onClick={() => setColoredRows(!coloredRows)}>Colored rows</button>
      <button onClick={handleSort}>Sort by country</button>
      <button onClick={handleRestore}>Restore the init state</button>
    </div>
  );
};

export default SortButtons;

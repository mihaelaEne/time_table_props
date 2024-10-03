import React from 'react';

function Header({ days }) {
  return (
    <thead className="thead-light">
      <tr>
        <th>Time</th>
        {days.map((day, index) => (
          <th key={index}>{day}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;

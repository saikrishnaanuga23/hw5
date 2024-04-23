import React from 'react';

const View = ({ activity, onNewActivity }) => {
  return (
    <div>
      <h1>Don't know what to do</h1>
      <button onClick={onNewActivity}>Get New Activity</button>
      <p>{activity}</p>
    </div>
  );
};

export default View;
import React, { useState, useEffect } from 'react';
import View from './view';
import { fetchActivity } from './model';

const Controller = () => {
  const [activity, setActivity] = useState('');

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const newActivity = await fetchActivity();
    setActivity(newActivity);
  };

  const handleNewActivity = () => {
    getActivity();
  };

  return <View activity={activity} onNewActivity={handleNewActivity} />;
};

export default Controller;
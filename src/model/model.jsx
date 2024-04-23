const fetchActivity = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      return data.activity;
    } catch (error) {
      console.error('Error', error);
      return 'Error';
    }
  };
  
  export { fetchActivity };
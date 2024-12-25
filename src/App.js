import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './component/Card';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function cardResponse() {
    try {
      const apiCall = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
      setUserData(apiCall.data);
      setError(null);
    } catch (error) {
      setError('Failed to load user data');
    }
  }

  useEffect(() => {
    cardResponse();
  }, []);

  return (
    <div className="container py-8 bg-gray-50 min-h-screen flex items-center justify-center">
      {error && <div className="text-red-500 text-center text-xl">{error}</div>}
      {userData && !error && (
        <Card
          firstName={userData?.results[0]?.name?.first}
          lastName={userData?.results[0]?.name?.last}
          gender={userData?.results[0]?.gender}
          phoneNumber={userData?.results[0]?.phone}
          image={userData?.results[0]?.picture?.large}
        />
      )}
    </div>
  );
}

export default App;

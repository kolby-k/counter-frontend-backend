import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [frontendCount, setFrontendCount] = useState(0);
  const [backendCount, setBackendCount] = useState(0);

  const incrementFrontendCounter = () => {
    setFrontendCount(frontendCount + 1);
  };

  const incrementBackendCounter = async () => {
    try {
      const response = await fetch('http://localhost:3000/', { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Server count: ", data.count);
      setBackendCount(data.count);
    } catch (error) {
      console.error("Failed to increment backend counter:", error);
    }
  };

  return (
    <div>
      <button onClick={incrementFrontendCounter}>
        Increment Frontend Counter
      </button>
      <p>Frontend Counter: {frontendCount}</p>

      <button onClick={incrementBackendCounter}>
        Increment Backend Counter
      </button>
      <p>Backend Counter: {backendCount}</p>
    </div>
  );
}

export default App;
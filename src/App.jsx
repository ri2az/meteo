import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('dark'); // dark par défaut

  const apiKey = '729a7fe5bdd54586be0133151252903'; // ← Mets ta vraie clé API ici

  const getWeather = async () => {
    if (!city) {
      setError("Merci d'entrer une ville.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=fr`
      );

      if (!response.ok) {
        throw new Error("Ville non trouvée.");
      }

      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!weather) {
      document.body.style.background = mode === 'dark' ? '#1e1e1e' : '#f4f4f4';
      document.body.style.color = mode === 'dark' ? 'white' : '#222';
      return;
    }

    const condition = weather.current.condition.text.toLowerCase();
    let background = mode === 'dark' ? '#1e1e1e' : '#f4f4f4';

    if (condition.includes('soleil')) {
      background =
        mode === 'dark'
          ? 'linear-gradient(to right, #3b2f2f, #8a613a)'
          : 'linear-gradient(to right, #f9d976, #f39f86)';
    } else if (condition.includes('pluie')) {
      background =
        mode === 'dark'
          ? 'linear-gradient(to right, #1f1c2c, #928dab)'
          : 'linear-gradient(to right, #a1c4fd, #c2e9fb)';
    } else if (condition.includes('neige')) {
      background =
        mode === 'dark'
          ? 'linear-gradient(to right, #1e3c72, #2a5298)'
          : 'linear-gradient(to right, #e0eafc, #cfdef3)';
    } else if (condition.includes('nuage')) {
      background =
        mode === 'dark'
          ? 'linear-gradient(to right, #232526, #414345)'
          : 'linear-gradient(to right, #bdc3c7, #2c3e50)';
    }

    document.body.style.background = background;
    document.body.style.color = mode === 'dark' ? 'white' : '#222';
  }, [weather, mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>🌦 Météo</h1>
        {/* Switch animé */}
        <label className="switch" title="Changer de thème">
          <input type="checkbox" onChange={toggleMode} checked={mode === 'light'} />
          <span className="slider"></span>
        </label>
      </div>

      <input
        type="text"
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1rem',
          backgroundColor: mode === 'dark' ? '#333' : '#fff',
          color: mode === 'dark' ? 'white' : '#222',
          border: `1px solid ${mode === 'dark' ? '#555' : '#ccc'}`,
        }}
      />
      <button
        onClick={getWeather}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: mode === 'dark' ? '#555' : '#ddd',
          color: mode === 'dark' ? 'white' : '#222',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Rechercher
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '2rem' }}>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="icone météo" />
          <p>🌡 Température : {weather.current.temp_c}°C</p>
          <p>💧 Humidité : {weather.current.humidity}%</p>
          <p>💨 Vent : {weather.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
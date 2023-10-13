import React, { useState } from 'react';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const birthYear = new Date(birthDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <form>
        <label htmlFor="birthDate">Enter your Date of Birth:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button type="button" onClick={calculateAge}>
          Calculate Age
        </button>
      </form>
      {age !== null && <p>You are {age} years old.</p>}
    </div>
  );
}

export default App;


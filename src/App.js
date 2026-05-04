import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SupplierSignup from './SupplierSignup';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', email, password);
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>SIGNUP FORM</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '250px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '250px' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none' }}
        >
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        <Link to="/supplier-signup">Become a supplier? Sign up</Link>
      </p>
    </div>
  );
}function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplier-signup" element={<SupplierSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

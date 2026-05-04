import { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <button type="submit" style={{ padding: '10px 20px', width: '100%' }}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;

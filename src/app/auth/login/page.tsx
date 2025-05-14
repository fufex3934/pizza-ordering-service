'use client';

import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { loginSchema } from '@/validators/user';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    try {
      loginSchema.parse(form); // Zod validation
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || 'Login failed');
      setSuccess('Login successful!');
      // redirect or set auth state here
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Email" name="email" margin="normal" value={form.email} onChange={handleChange} />
      <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={form.password} onChange={handleChange} />
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>Login</Button>
    </Box>
  );
}

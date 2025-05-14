'use client';

import { useAuth } from '@/context/AuthContext';
import { Button, Typography } from '@mui/material';

export default function Home() {
  const {user,loading} = useAuth();
  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Please log in</div>;
  return (
    <main style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        🍕 Welcome to Pizza Ordering App
      </Typography>
      <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
      <Button variant="contained" color="primary">
        Let's Go
      </Button>
    </main>
  );
}

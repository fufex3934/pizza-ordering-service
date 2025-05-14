'use client';

import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        🍕 Welcome to Pizza Ordering App
      </Typography>
      <Button variant="contained" color="primary">
        Let's Go
      </Button>
    </main>
  );
}

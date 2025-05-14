// app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from '@/lib/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

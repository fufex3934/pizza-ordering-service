'use client';

import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from '@/lib/theme';
import { AuthProvider } from '@/context/AuthContext'; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">{children}</Container>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

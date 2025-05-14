// app/layout.tsx
'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/lib/theme';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

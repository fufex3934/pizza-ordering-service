"use client";

import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { registerSchema } from "@/validators/user";


export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    try {
      registerSchema.parse(form); // zod validation
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");
      setSuccess("Registration successful!");
      setForm({ name: "", email: "", password: "" });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        margin="normal"
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        margin="normal"
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        margin="normal"
        value={form.password}
        onChange={handleChange}
      />
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Register
      </Button>
    </Box>
  );
}

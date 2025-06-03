import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { saveUser } from '../utils/localStorage';

type UserData = {
  nome: string;
  email: string;
};

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<UserData>({ nome: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveUser(formData);
    setFormData({ nome: '', email: '' });
    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        name="nome"
        label="Nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">Cadastrar</Button>
    </Box>
  );
};

export default UserForm;

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
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    mt={2} // distância controlada
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}
      >
        <TextField
          name="nome"
          label="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
          InputLabelProps={{ sx: { color: 'primary.main' } }} // muda a cor da label
          inputProps={{ style: { color: '#1976d2' } }} // muda a cor do texto digitado
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          InputLabelProps={{ sx: { color: 'primary.main' } }}
          inputProps={{ style: { color: '#1976d2' } }}
        />
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
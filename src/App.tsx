import React, { useState } from 'react';
import { Box, Container, Tabs, Tab, Typography } from '@mui/material';
import CadastroPage from './pages/CadastroPage';
import UsuariosPage from './pages/UsuariosPage';

const App: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cadastro de Usuários
      </Typography>

      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Cadastrar" />
        <Tab label="Usuários" />
      </Tabs>

      <Box sx={{ mt: 4 }}>
        {tabIndex === 0 && <CadastroPage />}
        {tabIndex === 1 && <UsuariosPage />}
      </Box>
    </Container>
  );
};

export default App;

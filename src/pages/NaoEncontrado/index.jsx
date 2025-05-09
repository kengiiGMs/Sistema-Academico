import React from "react";
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NaoEncontrado = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth={false} sx={{ height: '90vh' }}>
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h5">Página não encontrada</Typography>
                <Button variant="outlined" onClick={() => { navigate("/") }} sx={{ marginTop: '1rem' }}>Voltar para o Login</Button>
            </Box>
        </Container >
    )
}

export default NaoEncontrado;
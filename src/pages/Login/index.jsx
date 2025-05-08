import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, TextField, Button, Stack, CircularProgress } from '@mui/material';
import usarLogin from '../../hooks/login/usarLogin';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [solicitar, loading] = usarLogin();

    const createHandle = async (e) => {
        e.preventDefault();
        await solicitar(email, senha);
    }

    return (
        <Container maxWidth={false} sx={{ width: '100vw', height: '100vh' }}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                {loading ? (
                    <CircularProgress size="3rem" />
                ) : (
                    <Card sx={{ width: { xs: '70vw', sm: '50vw', lg: '30vw' }, p: 1 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                            <form onSubmit={createHandle}>
                                <Stack spacing={{ xs: 1, sm: 2 }}>
                                    <Typography variant="h5" align='center'>Faça o seu Login!</Typography>
                                    <TextField id="email" label="Insira o seu Email" variant="filled" onChange={(e) => { setEmail(e.target.value) }} required />
                                    <TextField id="password" label="Insira a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenha(e.target.value) }} required />
                                    <Button variant="contained" type="submit" disabled={loading}>Fazer Login</Button>
                                </Stack>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Container>
    )
}

export default Login;
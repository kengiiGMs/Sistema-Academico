import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, TextField, Button, Stack } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createHandle = async (e) => {
        e.preventDefault();
        alert(`Email = ${email} | Senha = ${password}`);
    }

    return (
        <Container maxWidth={false} sx={{ width: '100vw', height: '100vh' }}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Card sx={{ width: { xs: '70vw', sm: '50vw', lg: '30vw' }, p: 1 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <form onSubmit={createHandle}>
                            <Stack spacing={{ xs: 1, sm: 2 }}>
                                <Typography variant="h5" align='center'>Faça o seu Login!</Typography>
                                <TextField id="email" label="Insira o seu Email" variant="filled" onChange={(e) => { setEmail(e.target.value) }} required />
                                <TextField id="password" label="Insira a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setPassword(e.target.value) }} required />
                                <Button variant="contained" type="submit">Fazer Login</Button>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}

export default Login;
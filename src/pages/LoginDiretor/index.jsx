import { useState } from 'react';

import usarLogarDiretor from '../../hooks/diretor/useLogarDiretor';

import { Typography, TextField, Button, Link, Box, CircularProgress } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [solicitar, loading] = usarLogarDiretor();

    const fazerLogin = async (e) => {
        e.preventDefault();
        await solicitar(email, senha);
    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box component="form" onSubmit={fazerLogin} sx={{ margin: '15px', backgroundColor: 'white', gap: '10px', display: 'flex', flexDirection: 'column', padding: '15px', borderRadius: '10px' }}>
                <Box component="img" src="./logo.png" sx={{ width: '50%', display: 'block', margin: 'auto' }}>
                </Box>

                <Typography>Email:</Typography>
                <TextField
                    id="email"
                    label="Insira o seu Email"
                    variant="filled"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                />

                <Typography>Senha:</Typography>
                <TextField
                    id="senha"
                    label="Insira a sua Senha"
                    variant="filled"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    fullWidth
                />

                <Button variant="contained" type="submit" disabled={loading} fullWidth>
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Fazer Login"}
                </Button>

                <Typography fontSize="0.9rem" textAlign="center">
                    Não possui uma conta?{' '}
                    <Link href="/diretor/cadastrarLogin" underline="hover">
                        Criar Conta
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default Login;
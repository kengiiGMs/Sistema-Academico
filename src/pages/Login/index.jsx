import { useState, useEffect } from 'react';
import { Container, Box, Card, CardContent, Typography, TextField, Button, Stack, CircularProgress, Link } from '@mui/material';
import usarLogin from '../../hooks/login/usarLogin';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import usarValidarToken from "../../hooks/validarToken/usarValidarToken";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const valido = usarValidarToken(token);
            if (valido) {
                navigate('/home');
            } else {
                Cookies.remove('token');
            }
        }
    }, [])

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [solicitar, loading] = usarLogin();

    const createHandle = async (e) => {
        e.preventDefault();
        await solicitar(email, senha);
    }

    return (
        <Container maxWidth={false} sx={{ height: '90vh' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
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
                                    <Link href="/cadastrarLogin" underline="hover" textAlign="center">
                                        Criar Conta
                                    </Link>
                                </Stack>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Container >
    )
}

export default Login;
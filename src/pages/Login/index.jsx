import { useState } from 'react';

import usarLogarDiretor from '../../hooks/diretor/useLogarDiretor';
import useRedirecionarSeAutenticado from '../../hooks/autenticado/useRedirecionarSeAutenticado';

import { Typography, TextField, Button, Link, Container, Box, CircularProgress } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [solicitar, loading] = usarLogarDiretor();

    useRedirecionarSeAutenticado();

    const fazerLogin = async (e) => {
        e.preventDefault();
        await solicitar(email, senha);
    }

    return (

        <Container sx={{ display: 'flex', flexDirection: 'column', height: '95vh', alignItems: 'center', justifyContent: 'center' }}>
            <Container sx={{ backgroundColor: 'white', width: { xs: "100%", sm: "70%", md: "60%", lg: "45%" }, borderRadius: "10px", padding: "20px" }}>
                <Box component="img" src="./logo.png" sx={{ width: { xs: "50%", sm: "60%", md: "40%", lg: "50%" }, display: 'block', margin: 'auto' }}>
                </Box>
                <form onSubmit={fazerLogin}>
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '95%' }}>
                        <Typography style={{ fontWeight: 'bold' }}>Email: </Typography>
                        <TextField
                            id='email'
                            label='Insira o seu Email'
                            variant='filled'
                            type='email'
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />

                        <Typography style={{ fontWeight: 'bold' }}>Senha: </Typography>
                        <TextField
                            id='senha'
                            label='Insira a sua Senha'
                            variant='filled'
                            type='password'
                            autoComplete='current-password'
                            onChange={(e) => { setSenha(e.target.value) }}
                            required
                        />
                        <Button variant="contained" type="submit" disabled={loading}>{loading ? (<CircularProgress color='white' />) : (<Typography sx={{ fontWeight: 'bold' }}>Fazer Login</Typography>)}</Button>
                        <Typography sx={{ marginRight: '0.5vw', fontSize: '90%', textAlign: 'center', margin: '8px' }}>Não possui uma conta?      <Link href='/cadastrarLogin' underline='hover' textAlign='center'>Criar Conta</Link></Typography>
                    </Container>
                </form>
            </Container>
        </Container >
    )
}

export default Login;
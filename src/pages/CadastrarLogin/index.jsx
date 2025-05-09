import { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, TextField, Button, Stack, Link } from '@mui/material';


const CadastrarLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmar, setSenhaConfirmar] = useState("");

    const criarUsuario = async (e) => {
        e.preventDefault();
        alert(`${email} | ${senha} | ${senhaConfirmar}`)
    }

    return (
        <Container maxWidth={false} sx={{ width: '100vw', height: '100vh' }}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                <Card sx={{ width: { xs: '70vw', sm: '50vw', lg: '30vw' }, p: 1 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <form onSubmit={criarUsuario}>
                            <Stack spacing={{ xs: 1, sm: 2 }}>
                                <Typography variant="h5" align='center'>Cadastre o seu Login!</Typography>
                                <TextField id="email" label="Insira o seu Email" variant="filled" onChange={(e) => { setEmail(e.target.value) }} required />
                                <TextField id="password" label="Insira a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenha(e.target.value) }} required />
                                <TextField id="passwordConfirmar" label="Confirme a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenhaConfirmar(e.target.value) }} required />
                                <Button variant="contained" type="submit">Fazer Login</Button>
                                <Link href="/" underline="hover" textAlign="center">
                                    Voltar
                                </Link>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}

export default CadastrarLogin;
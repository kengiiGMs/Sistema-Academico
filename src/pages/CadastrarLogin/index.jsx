import { useState } from 'react';

import useCriarDiretor from '../../hooks/diretor/useCriarDiretor';
import useRedirecionarSeAutenticado from '../../hooks/autenticado/useRedirecionarSeAutenticado';

import { Typography, TextField, Button, Link, Container, CircularProgress } from '@mui/material';

const CadastrarLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmar, setSenhaConfirmar] = useState("");
    const [nome, setNome] = useState("");
    const [solicitar, loading] = useCriarDiretor();

    useRedirecionarSeAutenticado();

    const criarDiretor = async (e) => {
        e.preventDefault();
        if (senha != senhaConfirmar) {
            alert("As senhas não são iguais");
        } else {
            await solicitar(nome, email, senha, senhaConfirmar);
            setEmail('')
            setSenha('')
            setSenhaConfirmar('')
            setNome('')
        }
    }

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <Container sx={{ backgroundColor: 'white', width: { xs: "100%", sm: "70%", md: "60%", lg: "45%" }, borderRadius: "10px", padding: "20px" }}>
                <form onSubmit={criarDiretor}>
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nome:</Typography>
                        <TextField id="nome" label="Insira o seu Nome" variant="filled" onChange={(e) => { setNome(e.target.value) }} required />
                        <Typography sx={{ fontWeight: 'bold' }}>Email:</Typography>
                        <TextField id="email" label="Insira o seu Email" variant="filled" type="email" onChange={(e) => { setEmail(e.target.value) }} required />
                        <Typography sx={{ fontWeight: 'bold' }}>Senha:</Typography>
                        <TextField id="password" label="Insira a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenha(e.target.value) }} required />
                        <Typography sx={{ fontWeight: 'bold' }}>Confirmar Senha:</Typography>
                        <TextField id="passwordConfirmar" label="Confirme a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenhaConfirmar(e.target.value) }} required />
                        <Button variant="contained" type="submit" disabled={loading}>{loading ? (<CircularProgress color='white' />) : (<Typography sx={{ fontWeight: 'bold' }}>Criar Login</Typography>)}</Button>
                        <Typography sx={{ marginRight: '0.5vw', fontSize: '90%', textAlign: 'center', margin: '8px' }}>Já possuí uma conta?   <Link href='/' underline='hover' textAlign='center'>Fazer Login</Link></Typography>
                    </Container>
                </form>
            </Container>
        </Container>
    )
}

export default CadastrarLogin;
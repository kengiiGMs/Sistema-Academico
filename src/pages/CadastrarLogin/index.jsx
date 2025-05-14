import { useState } from 'react';

import useCriarDiretor from '../../hooks/diretor/useCriarDiretor';

import { Typography, TextField, Button, Link, Box, CircularProgress } from '@mui/material';

const CadastrarLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmar, setSenhaConfirmar] = useState("");
    const [nome, setNome] = useState("");
    const [solicitar, loading] = useCriarDiretor();

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
        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box component="form" onSubmit={criarDiretor} sx={{ margin: '15px', backgroundColor: 'white', gap: '10px', display: 'flex', flexDirection: 'column', padding: '15px', borderRadius: '10px' }}>
                <Box component="img" src="./logo.png" sx={{ width: '35%', display: 'block', margin: 'auto' }}>
                </Box>

                <Typography>Nome:</Typography>
                <TextField
                    id="nome"
                    label="Insira o seu Nome"
                    variant="filled"
                    onChange={(e) => { setNome(e.target.value) }}
                    required
                    fullWidth
                />


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

                <Typography>Confirmar Senha:</Typography>
                <TextField
                    id="passwordConfirmar"
                    label="Confirme a sua Senha"
                    variant="filled"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => { setSenhaConfirmar(e.target.value) }}
                    required
                    fullWidth
                />


                <Button variant="contained" type="submit" disabled={loading} fullWidth>
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Fazer Login"}
                </Button>

                <Typography fontSize="0.9rem" textAlign="center">
                    Já possui uma conta?{' '}
                    <Link href="/" underline="hover">
                        Criar Login
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default CadastrarLogin;
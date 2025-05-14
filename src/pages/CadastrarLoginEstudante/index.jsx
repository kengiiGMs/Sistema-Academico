import { useState } from 'react';

import { Typography, TextField, Button, Link, Box, CircularProgress } from '@mui/material';
import useCriarEstudante from '../../hooks/estudante/useCriarEstudante';

const CadastrarLoginEstudante = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");
    const [curso, setCurso] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senhaConfirmar, setSenhaConfirmar] = useState("");
    const [solicitar, loading] = useCriarEstudante();

    const criarDiretor = async (e) => {
        e.preventDefault();
        if (senha != senhaConfirmar) {
            alert("As senhas não são iguais");
        } else {
            await solicitar(nome, email, senha, endereco, curso, telefone, senhaConfirmar);
        }
    }

    return (
        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box component="form" onSubmit={criarDiretor} sx={{ margin: '15px', backgroundColor: 'white', gap: '10px', display: 'flex', flexDirection: 'column', padding: '15px', borderRadius: '10px' }}>
                <Box component="img" src="/logo.png" sx={{ width: '35%', display: 'block', margin: 'auto' }}>
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

                <Typography>Curso:</Typography>
                <TextField
                    id="curso"
                    label="Insira o seu Curso"
                    variant="filled"
                    onChange={(e) => { setCurso(e.target.value) }}
                    required
                    fullWidth
                />

                <Typography>Endereço:</Typography>
                <TextField
                    id="endereco"
                    label="Insira o seu Endereço"
                    variant="filled"
                    onChange={(e) => { setEndereco(e.target.value) }}
                    required
                    fullWidth
                />

                <Typography>Telefone:</Typography>
                <TextField
                    id="telefone"
                    label="Insira o seu Telefone"
                    variant="filled"
                    type='number'
                    onChange={(e) => { setTelefone(e.target.value) }}
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
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Criar Login"}
                </Button>

                <Typography fontSize="0.9rem" textAlign="center">
                    Já possui uma conta?{' '}
                    <Link href="/" underline="hover">
                        Fazer Login
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default CadastrarLoginEstudante;
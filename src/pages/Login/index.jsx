import { useState } from 'react';

import usarLogin from '../../hooks/login/usarLogin';

import useRedirecionarSeAutenticado from '../../hooks/autenticado/useRedirecionarSeAutenticado';

import { Typography, TextField, Button, Link } from '@mui/material';

import ContainerCentralizado from '../../components/containerCentralizado';
import IndicadorDeCarregamento from '../../components/indicadorDeCarregamento';
import CartaoComFormulario from '../../components/cartaoComFormulario';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [solicitar, loading] = usarLogin();

    useRedirecionarSeAutenticado();



    const fazerLogin = async (e) => {
        e.preventDefault();
        await solicitar(email, senha);
    }

    return (
        <ContainerCentralizado>
            {loading ? (
                <IndicadorDeCarregamento tamanho="3rem" />
            ) : (
                <CartaoComFormulario funcaoAoEnviarFormulario={fazerLogin}>
                    <Typography variant="h5" align='center'>Faça o seu Login!</Typography>
                    <TextField
                        id="email"
                        label="Insira o seu Email"
                        variant="filled"
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                    />
                    <TextField
                        id="senha"
                        label="Insira a sua Senha"
                        variant="filled"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => { setSenha(e.target.value) }}
                        required
                    />
                    <Button variant="contained" type="submit" disabled={loading}>Fazer Login</Button>
                    <Link href="/cadastrarLogin" underline="hover" textAlign="center">Criar Conta</Link>
                </CartaoComFormulario>
            )}
        </ContainerCentralizado>
    )
}

export default Login;
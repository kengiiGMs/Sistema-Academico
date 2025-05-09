import { useState } from 'react';

import usarCriar from '../../hooks/usuario/usarCriar';
import useRedirecionarSeAutenticado from '../../hooks/autenticado/useRedirecionarSeAutenticado';

import { Typography, TextField, Button, Link } from '@mui/material';
import ContainerCentralizado from '../../components/containerCentralizado';
import IndicadorDeCarregamento from '../../components/indicadorDeCarregamento';
import CartaoComFormulario from '../../components/cartaoComFormulario';

const CadastrarLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmar, setSenhaConfirmar] = useState("");
    const [solicitar, loading] = usarCriar();

    useRedirecionarSeAutenticado();

    const criarUsuario = async (e) => {
        e.preventDefault();
        if (senha != senhaConfirmar) {
            alert("As senhas não são iguais");
        } else {
            await solicitar(email, senha);
        }
    }

    return (
        <ContainerCentralizado>
            {loading ? (
                <IndicadorDeCarregamento tamanho="3rem" />
            ) : (
                <CartaoComFormulario funcaoAoEnviarFormulario={criarUsuario}>
                    <Typography variant="h5" align='center'>Cadastre o seu Login!</Typography>
                    <TextField id="email" label="Insira o seu Email" variant="filled" type="email" onChange={(e) => { setEmail(e.target.value) }} required />
                    <TextField id="password" label="Insira a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenha(e.target.value) }} required />
                    <TextField id="passwordConfirmar" label="Confirme a sua Senha" variant="filled" type="password" autoComplete="current-password" onChange={(e) => { setSenhaConfirmar(e.target.value) }} required />
                    <Button variant="contained" type="submit">Cadastar Login</Button>
                    <Link href="/" underline="hover" textAlign="center">
                        Voltar
                    </Link>
                </CartaoComFormulario>
            )}
        </ContainerCentralizado>
    )
}

export default CadastrarLogin;
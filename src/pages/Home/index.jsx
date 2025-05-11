import { useState } from 'react';
import { Container, Button, Typography, TextField, Link } from '@mui/material';

import usarCriar from '../../hooks/estudante/usarCriar';

import BarraDeNavegacao from '../../components/barraDeNavegacao';
import CartaoComFormulario from '../../components/cartaoComFormulario';
import IndicadorDeCarregamento from '../../components/indicadorDeCarregamento';
import ContainerCentralizado from '../../components/containerCentralizado';

const Home = () => {
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [curso, setCurso] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const [solicitarCriar, carregando] = usarCriar();

    const criarEstudante = async (e) => {
        e.preventDefault();
        await solicitarCriar(nome, endereco, curso, telefone, email);

    }

    return (
        <>
            <BarraDeNavegacao />
            {carregando ? (
                <ContainerCentralizado>
                    <IndicadorDeCarregamento tamanho='3rem' />
                </ContainerCentralizado>
            ) : (
                <Container sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <CartaoComFormulario funcaoAoEnviarFormulario={criarEstudante}>
                        <Typography variant='h5' align='center'>Cadastro do Estudante</Typography>
                        <TextField
                            id='nome'
                            label='Insira o Nome'
                            variant='filled'
                            onChange={(e) => { setNome(e.target.value) }}
                            required
                        />
                        <TextField
                            id='endereco'
                            label='Insira o endereço'
                            variant='filled'
                            onChange={(e) => { setEndereco(e.target.value) }}
                            required
                        />

                        <TextField
                            id='curso'
                            label='Insira o curso'
                            variant='filled'
                            onChange={(e) => { setCurso(e.target.value) }}
                            required
                        />

                        <TextField
                            id='telefone'
                            label='Insira o telefone'
                            variant='filled'
                            type='number'
                            onChange={(e) => { setTelefone(e.target.value) }}
                            required
                        />

                        <TextField
                            id='email'
                            label='Insira o email'
                            variant='filled'
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />

                        <Button variant='contained' type='submit' disabled={carregando}>Cadastrar</Button>
                        <Link href='/gestao' underline='hover' textAlign='center'>Gerir Estudantes</Link>
                    </CartaoComFormulario>
                </Container>
            )}

        </>
    )
}

export default Home;
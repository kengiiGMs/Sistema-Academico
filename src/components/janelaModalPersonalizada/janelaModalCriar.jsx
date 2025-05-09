import { useState } from 'react';
import { Typography, TextField } from '@mui/material';
import JanelaModal from '../janelaModal';
import usarCriar from '../../hooks/estudante/usarCriar';

const JanelaModalCadastrar = ({ abrir, fechar }) => {
    const [solicitarCriar, carregando] = usarCriar();
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [curso, setCurso] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const efetuarCadastro = async (e) => {
        e.preventDefault();
        await solicitarCriar(nome, endereco, curso, telefone, email);
        fechar();
    }

    return (
        <JanelaModal fechar={fechar} abrir={abrir} funcaoAoEnviarFormulario={efetuarCadastro} carregando={carregando} textoBotao='Cadastrar' >
            <Typography variant='h5' sx={{ marginBlock: '5px' }}>Cadastro de Estudante</Typography>
            <TextField id='nome' label='Insira o seu Nome' variant='filled' onChange={(e) => { setNome(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='endereco' label='Insira o seu Endereço' variant='filled' onChange={(e) => { setEndereco(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='curso' label='Insira o seu Curso' variant='filled' onChange={(e) => { setCurso(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='telefone' label='Insira o seu Telefone' variant='filled' onChange={(e) => { setTelefone(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='email' label='Insira o seu Email' variant='filled' type='email' onChange={(e) => { setEmail(e.target.value) }} required sx={{ marginBlock: '5px' }} />
        </JanelaModal>

    )
}

export default JanelaModalCadastrar;
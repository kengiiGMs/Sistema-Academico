import { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
import JanelaModal from '../janelaModal';
import usarAtualizar from '../../hooks/estudante/usarAtualizar';

const JanelaModalEditar = ({ abrir, fechar, nome, id, endereco, curso, telefone, email }) => {
    const [solicitarEditar, carregando] = usarAtualizar();
    const [nomeEditar, setNomeEditar] = useState(nome);
    const [enderecoEditar, setEnderecoEditar] = useState(endereco);
    const [cursoEditar, setCursoEditar] = useState(curso);
    const [telefoneEditar, setTelefoneEditar] = useState(telefone);
    const [emailEditar, setEmailEditar] = useState(email);

    useEffect(() => {
        setNomeEditar(nome);
        setEnderecoEditar(endereco);
        setCursoEditar(curso);
        setTelefoneEditar(telefone);
        setEmailEditar(email);
    }, [nome, endereco, curso, telefone, email]);

    const efetuarEdicao = async (e) => {
        e.preventDefault();
        await solicitarEditar(nomeEditar, enderecoEditar, cursoEditar, telefoneEditar, emailEditar, id);
        fechar();
    }

    return (
        <JanelaModal fechar={fechar} abrir={abrir} funcaoAoEnviarFormulario={efetuarEdicao} carregando={carregando} textoBotao='Editar' >
            <Typography variant='h5' sx={{ marginBlock: '5px' }}>Atualização de Estudante</Typography>
            <TextField id='nome' label='Insira o seu Nome' variant='filled' value={nomeEditar} onChange={(e) => { setNomeEditar(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='endereco' label='Insira o seu Endereço' variant='filled' value={enderecoEditar} onChange={(e) => { setEnderecoEditar(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='curso' label='Insira o seu Curso' variant='filled' value={cursoEditar} onChange={(e) => { setCursoEditar(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='telefone' label='Insira o seu Telefone' variant='filled' value={telefoneEditar} onChange={(e) => { setTelefoneEditar(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='email' label='Insira o seu Email' variant='filled' value={emailEditar} onChange={(e) => { setEmailEditar(e.target.value) }} required sx={{ marginBlock: '5px' }} />
        </JanelaModal>
    )
}

export default JanelaModalEditar;
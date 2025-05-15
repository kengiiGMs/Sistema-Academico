import { useState } from 'react';
import { Typography, TextField, Alert } from '@mui/material';
import JanelaModal from '../janelaModal';
import useCriarEstudante from '../../hooks/estudante/useCriarEstudante';

const JanelaModalCadastrarEstudante = ({ abrir, fechar, atualizar }) => {
    const [solicitar, loading] = useCriarEstudante()
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [ra, setRa] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [erroMsg, setErroMsg] = useState('');

    const efetuarCadastro = async (e) => {
        e.preventDefault()
        setErroMsg('')
        try {
            await solicitar(nome, email, password, endereco, ra, telefone, passwordConfirmation)
            atualizar()
            fechar()

        } catch (erro) {
            setErroMsg(erro.response?.data?.detalhes || erro.response?.data?.error || 'Erro desconhecido')
        }
    }

    return (
        <JanelaModal fechar={fechar} abrir={abrir} funcaoAoEnviarFormulario={efetuarCadastro} carregando={loading} textoBotao='Cadastrar' >
            <Typography variant='h5' sx={{ marginBlock: '5px' }}>Cadastro de Estudante</Typography>
            {erroMsg && <Alert severity="error" sx={{ mb: 2 }}>{erroMsg}</Alert>}
            <TextField id='nome' label='Insira o Nome' variant='filled' onChange={(e) => { setNome(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='endereco' label='Insira o Endereço' variant='filled' onChange={(e) => { setEndereco(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='curso' label='Insira o RA' type='number' variant='filled' onChange={(e) => { setRa(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='telefone' label='Insira o Telefone' type='number' variant='filled' onChange={(e) => { setTelefone(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='email' label='Insira o Email' variant='filled' onChange={(e) => { setEmail(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='password' label='Insira a senha' type='password' variant='filled' onChange={(e) => { setPassword(e.target.value) }} required sx={{ marginBlock: '5px' }} />
            <TextField id='passwordConfirmation' label='Confirme a senha' type='password' variant='filled' onChange={(e) => { setPasswordConfirmation(e.target.value) }} required sx={{ marginBlock: '5px' }} />
        </JanelaModal>
    )
}

export default JanelaModalCadastrarEstudante;
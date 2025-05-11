import { useEffect, useState } from 'react';
import { Container, Box, TableRow, TableCell, Button, Link, } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import usarListar from '../../hooks/estudante/usarListar';

import BarraDeNavegacao from '../../components/barraDeNavegacao';
import IndicadorDeCarregamento from '../../components/indicadorDeCarregamento';
import Tabela from '../../components/tabela';

import JanelaModalDeletar from '../../components/janelaModalPersonalizada/janelaModalDeletar';
import JanelaModalEditar from '../../components/janelaModalPersonalizada/janelaModalEditar';

const Gestao = () => {
    const [data, solicitar, loading] = usarListar();

    const [abrirModalDeletar, setAbriModalDeletar] = useState(false);
    const [idDeletar, setIdDeletar] = useState('');
    const [nomeDeletar, setNomeDeletar] = useState('');

    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const [idEditar, setIdEditar] = useState('');
    const [nomeEditar, setNomeEditar] = useState('');
    const [enderecoEditar, setEnderecoEditar] = useState('');
    const [cursoEditar, setCursoEditar] = useState('');
    const [telefoneEditar, setTelefoneEditar] = useState('');
    const [emailEditar, setEmailEditar] = useState('');

    const colunas = ['Nome', 'Telefone', 'Endereco', 'Curso', 'Email', 'Ações'];
    const cabecalhoDaTabela = () => {
        return colunas.map((coluna) => {
            return <TableCell key={coluna}>{coluna}</TableCell>
        })
    }

    const corpoDaTabela = () => {
        return data.map((estudante) => (
            <TableRow
                key={estudante.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component='th' scope='row'>
                    {estudante.nome}
                </TableCell>
                <TableCell align='right'>{estudante.telefone}</TableCell>
                <TableCell align='right'>{estudante.endereco}</TableCell>
                <TableCell align='right'>{estudante.curso}</TableCell>
                <TableCell align='right'>{estudante.email}</TableCell>
                <TableCell align='right'>
                    <Button variant='contained' sx={{ marginRight: '10px' }} onClick={() => { prepararParaEditar(estudante.id, estudante.nome, estudante.telefone, estudante.endereco, estudante.curso, estudante.email) }}><EditIcon /></Button>
                    <Button variant='contained' color='error' onClick={() => { prepararParaDeletar(estudante.id, estudante.nome) }}><DeleteIcon /></Button>
                </TableCell>
            </TableRow>
        ))
    }

    const prepararParaDeletar = (id, nome) => {
        setIdDeletar(id);
        setNomeDeletar(nome);
        setAbriModalDeletar(true);
    }

    const prepararParaEditar = (id, nome, telefone, endereco, curso, email) => {
        setIdEditar(id);
        setNomeEditar(nome);
        setTelefoneEditar(telefone);
        setEnderecoEditar(endereco);
        setCursoEditar(curso);
        setEmailEditar(email)
        setAbrirModalEditar(true);
    }

    useEffect(() => {
        solicitar();
    }, []);

    useEffect(() => {
        if (!abrirModalEditar, !abrirModalDeletar, !abrirModalEditar) {
            solicitar();
        }
    }, [abrirModalEditar, abrirModalDeletar, abrirModalEditar])

    return (
        <>
            <BarraDeNavegacao />

            <Container maxWidth={false}>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {loading ? (
                        <IndicadorDeCarregamento tamanho='3rem' />
                    ) : (
                        <Box>
                            <Box sx={{ marginTop: "1rem", marginBottom: "1rem", fontSize: "1.2rem" }}  >
                                <Link href='/home' underline='hover'>Retornar</Link>
                            </Box>

                            <Tabela cabecalho={cabecalhoDaTabela()} corpo={corpoDaTabela()} />

                            <JanelaModalDeletar abrir={abrirModalDeletar} fechar={() => setAbriModalDeletar(false)} nome={nomeDeletar} id={idDeletar} />
                            <JanelaModalEditar abrir={abrirModalEditar} fechar={() => setAbrirModalEditar(false)} nome={nomeEditar} id={idEditar} endereco={enderecoEditar} curso={cursoEditar} telefone={telefoneEditar} email={emailEditar} />
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    )
}

export default Gestao;
import React, { useEffect } from 'react';
import { Container, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, CircularProgress } from '@mui/material';
import usarListar from '../../hooks/estudante/usarListar';

const Home = () => {
    const [data, solicitar, loading] = usarListar();

    useEffect(() => {
        solicitar();
    }, []);

    return (
        <Container maxWidth={false} sx={{ width: '100vw' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {loading ? (
                    <CircularProgress size="3rem" />
                ) : (
                    <Box>
                        <Typography variant="h1" sx={{ fontSize: '60px', textAlign: 'center' }}>Estudantes</Typography>

                        <Button variant="contained" sx={{ marginBottom: '10px' }}>Cadastrar Estudante</Button>

                        <TableContainer component={Paper} sx={{ maxWidth: 780 }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell align="right">Telefone</TableCell>
                                        <TableCell align="right">Endereço</TableCell>
                                        <TableCell align="right">Curso</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Ações</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((estudante) => (
                                        <TableRow
                                            key={estudante.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {estudante.nome}
                                            </TableCell>
                                            <TableCell align="right">{estudante.telefone}</TableCell>
                                            <TableCell align="right">{estudante.endereco}</TableCell>
                                            <TableCell align="right">{estudante.curso}</TableCell>
                                            <TableCell align="right">{estudante.email}</TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" sx={{ marginRight: '5px' }}>Editar</Button>
                                                <Button variant="contained" color='error'>Deletar</Button>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
            </Box>
        </Container >
    )
}

export default Home;
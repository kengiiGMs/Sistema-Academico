import { useEffect } from 'react';
import useListarEstudantes from '../../hooks/estudante/useListarEstudantes';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import IndicadorDeCarregamento from '../../components/indicadorDeCarregamento';
import BarraDeNavegacao from '../../components/barraDeNavegacao';


const Gestao = () => {
    const [solicitar, dados, loading] = useListarEstudantes();

    useEffect(() => {
        solicitar();
    }, []);

    return (
        <Box>
            <BarraDeNavegacao />
            {loading ? (
                <IndicadorDeCarregamento />
            ) : (
                <Box sx={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TableContainer sx={{ maxWidth: { xs: '95%', sm: '70%' }, borderRadius: '10px' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ color: 'var(--primaryColor)', fontWeight: 'bold' }} >Nome</TableCell>
                                    <TableCell sx={{ color: 'var(--primaryColor)', fontWeight: 'bold' }}>Email</TableCell>
                                    <TableCell sx={{ color: 'var(--primaryColor)', fontWeight: 'bold' }}>Endereço</TableCell>
                                    <TableCell sx={{ color: 'var(--primaryColor)', fontWeight: 'bold' }}>RA</TableCell>
                                    <TableCell sx={{ color: 'var(--primaryColor)', fontWeight: 'bold' }}>Telefone</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ backgroundColor: 'white' }}>
                                {Array.isArray(dados) && dados.map((estudante) => (
                                    <TableRow key={estudante.id} >
                                        <TableCell>{estudante.nome}</TableCell>
                                        <TableCell>{estudante.usuario.email}</TableCell>
                                        <TableCell sx={{
                                            maxWidth: 200,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                            title={estudante.endereco}
                                        >{estudante.endereco}</TableCell>
                                        <TableCell>{estudante.ra}</TableCell>
                                        <TableCell>{estudante.telefone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Box>
    );
};

export default Gestao;

import { TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';

const Tabela = ({ cabecalho, corpo }) => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {cabecalho}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {corpo}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tabela;
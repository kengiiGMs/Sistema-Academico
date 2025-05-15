import { Typography, Box, List, ListItem } from '@mui/material';
import BarraDeNavegacao from '../../components/barraDeNavegacao';
import useBuscarEstudantes from '../../hooks/estudante/useBuscarEstudante';
import { useEffect } from 'react';
import IndicadorDeCarregamento from '../../components/indicadorDeCarregamento';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Home = () => {

    const [solicitar, dados, loading] = useBuscarEstudantes();

    useEffect(() => {
        const carregar = async () => {
            await solicitar()
        }

        carregar()
    }, [])

    return (
        <Box>
            <BarraDeNavegacao />
            {
                loading ? (
                    <IndicadorDeCarregamento />
                ) : dados && dados.usuario ? (
                    <Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            maxWidth={{ xs: '40%', sm: '30%' }}
                            sx={{
                                bgcolor: 'white',
                                p: '1vh',
                                borderRadius: '10px',
                                m: '3vh',
                                boxShadow: 3,
                                fontSize: { xs: '3.5vh', sm: '5vh' }
                            }}
                        >
                            <AccountCircleIcon sx={{ fontSize: 'inherit' }} />
                            <Typography sx={{ fontSize: 'inherit' }} >  {dados.nome}</Typography>
                        </Box>

                        <Box component="hr" maxWidth="95%" sx={{ borderTop: '1px solid #ccc', my: '3.5vh' }} />

                        <Box
                            smaxWidth={{ xs: '90%', sm: '80%', lg: '50%' }}
                            sx={{ bgcolor: 'white', borderRadius: '10px', m: '3vh', p: '1vh', boxShadow: 3 }}>

                            <Box
                                display="flex"
                                alignItems="center"
                                sx={{ p: '1vh', margin: '1vh', fontSize: { xs: '3vh', sm: '4vh' } }}>

                                <ListAltIcon sx={{ fontSize: 'inherit' }} />
                                <Typography sx={{ fontSize: 'inherit', }} >Seus dados</Typography>
                            </Box>

                            <Box component="hr" maxWidth="99%" sx={{ border: 'none', borderTop: '1px solid #ccc' }} />
                            <List sx={{ fontSize: { xs: '2vh', sm: '2.5vh' }, }}>
                                <ListItem sx={{ fontSize: 'inherit' }}>RA: {dados.ra}</ListItem>
                                <ListItem sx={{ fontSize: 'inherit' }}>Telefone: {dados.telefone}</ListItem>
                                <ListItem sx={{ fontSize: 'inherit' }}>Endereço: {dados.endereco}</ListItem>
                                <ListItem sx={{ fontSize: 'inherit' }}>Email: {dados.usuario.email}</ListItem>
                            </List>
                        </Box>
                    </Box >
                ) : (
                    <Typography>Erro nenhum dado encontrado</Typography>
                )
            }
        </Box >
    )
}

export default Home;
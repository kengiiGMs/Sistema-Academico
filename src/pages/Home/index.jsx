import { Typography, Box } from '@mui/material';
import BarraDeNavegacao from '../../components/barraDeNavegacao';

const Home = () => {
    return (
        <Box>
            <BarraDeNavegacao />
            <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography>A</Typography>
            </Box>
        </Box>
    )
}

export default Home;
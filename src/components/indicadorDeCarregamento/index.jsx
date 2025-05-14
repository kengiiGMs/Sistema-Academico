import { CircularProgress, Container, Box } from '@mui/material';

const IndicadorDeCarregamento = () => {
    return (
        <Container maxWidth={false} sx={{ width: '100vw' }}>
            <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <CircularProgress size="3rem" />
            </Box>
        </Container>
    )
}

export default IndicadorDeCarregamento;
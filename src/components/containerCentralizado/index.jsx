import { Container, Box } from '@mui/material';

const ContainerCenter = ({ children }) => {
    return (
        <Container maxWidth={false} sx={{ height: '90vh' }}>
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                {children}
            </Box>
        </Container>
    )
}

export default ContainerCenter;
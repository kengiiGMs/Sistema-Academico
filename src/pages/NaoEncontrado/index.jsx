import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NaoEncontrado = () => {
    const navigate = useNavigate();

    return (
        <ContainerCenter>
            <Container sx={{ width: { xs: '70vw', sm: '50vw', lg: '30vw' }, p: 1, color: 'white', textAlign: 'center' }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h5">Página não encontrada</Typography>
                <Button variant="outlined" onClick={() => { navigate("/") }} sx={{ marginTop: '1.5vw' }}>Voltar para o Login</Button>
            </Container>
        </ContainerCenter>
    )
}

export default NaoEncontrado;

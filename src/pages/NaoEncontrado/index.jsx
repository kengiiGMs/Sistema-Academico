import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NaoEncontrado = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container sx={{ width: { xs: '70vw', sm: '50vw', lg: '30vw' }, textAlign: 'center', background: 'white', padding: '20px', borderRadius: '10px' }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h5">Página não encontrada</Typography>
                <Button variant="outlined" onClick={() => { navigate("/") }} sx={{ marginTop: '1.5vw' }}>Voltar para o Login</Button>
            </Container>
        </Container>
    )
}

export default NaoEncontrado;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, CircularProgress } from '@mui/material';
import usarValidarToken from "../hooks/validarToken/usarValidarToken";

const RotaProtegida = ({ children }) => {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(null);

    useEffect(() => {
        const verificar = async () => {
            const valido = await usarValidarToken();
            if (!valido) {
                navigate("/");
            } else {
                setAutenticado(true);
            }
        };

        verificar();
    }, [navigate]);

    if (autenticado === null) {
        return (
            <Container maxWidth={false} sx={{ width: '100vw' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <CircularProgress size="3rem" />
                </Box>
            </Container>
        )
    }

    return <>{children}</>;
};

export default RotaProtegida;

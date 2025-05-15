import { Button, IconButton, AppBar, Toolbar, Box } from '@mui/material';
import useRemoverToken from '../../hooks/usuario/useRemoverToken';

const BarraDeNavegacao = () => {
    const [solicitar] = useRemoverToken();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Box component="img" src="/logoFullWhite.png" sx={{ width: '40px', display: 'block', margin: 'auto', borderRadius: '100px' }}></Box>

                </IconButton>
                <Box sx={{ flexGrow: '1' }}>  </Box>
                <Button color="inherit" onClick={solicitar}>Sair</Button>

            </Toolbar>
        </AppBar>
    )
}

export default BarraDeNavegacao;
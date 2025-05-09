import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import usarDeletarToken from '../../hooks/deletarToken/usarDeletarToken';

const BarraDeNavegacao = () => {
    const [solicitarDeletarToken] = usarDeletarToken();

    return (
        <AppBar position='static' color='inherit'>
            <Toolbar>

                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Sistema Acadêmico
                </Typography>

                <div>
                    <Button variant='contained' sx={{ marginBlock: '5px' }} color='error' onClick={() => { solicitarDeletarToken() }}>Sair</Button>
                </div>

            </Toolbar>
        </AppBar >
    )
}

export default BarraDeNavegacao;
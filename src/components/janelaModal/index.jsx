import { Modal, Box, Container, Button, Link } from '@mui/material';

const JanelaModal = ({ abrir, fechar, funcaoAoEnviarFormulario, children, carregando, textoBotao }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
        color: 'black'
    };


    return (
        <Modal
            open={abrir}
            onClose={fechar}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <form onSubmit={funcaoAoEnviarFormulario}>
                    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                        {children}
                        <Button variant='contained' type='submit' sx={{ marginBlock: '5px' }} disabled={carregando}>{textoBotao}</Button>
                    </Container>
                </form>
                <Container>
                    <Link sx={{ color: 'red', cursor: 'pointer' }} underline='none' onClick={fechar}>Cancelar</Link>
                </Container>
            </Box>
        </Modal>

    )
}

export default JanelaModal;
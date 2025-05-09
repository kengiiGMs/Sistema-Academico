import { Card, CardContent, Stack } from '@mui/material';

const CartaoComFormulario = ({ children, funcaoAoEnviarFormulario }) => {
    return (
        <Card sx={{ width: { xs: '70vw', sm: '50vw', lg: '30vw' }, p: 1 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={funcaoAoEnviarFormulario}>
                    <Stack spacing={{ xs: 1, sm: 2 }}>
                        {children}
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}

export default CartaoComFormulario;
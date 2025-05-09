import { CircularProgress } from '@mui/material';

const IndicadorDeCarregamento = ({ tamanho }) => {
    return (
        <CircularProgress size={tamanho} />
    )
}

export default IndicadorDeCarregamento;
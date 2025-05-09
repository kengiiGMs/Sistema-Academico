import { Typography } from '@mui/material';
import JanelaModal from '../janelaModal';
import usarDeletar from '../../hooks/estudante/usarDeletar';

const JanelaModalDeletar = ({ abrir, fechar, nome, id }) => {
    const [solicitarDeletar, carregando] = usarDeletar();

    const efetuarExclusao = async (e) => {
        e.preventDefault();

        await solicitarDeletar(id);
        fechar();
    }

    return (
        <JanelaModal fechar={fechar} abrir={abrir} funcaoAoEnviarFormulario={efetuarExclusao} carregando={carregando} textoBotao='Deletar' >
            <Typography variant='h5' sx={{ marginBlock: '5px' }}>Deletar Estudante</Typography>
            <Typography variant='h5' sx={{ marginBlock: '25px', marginTop: '10px' }}>Deseja deletar {nome} ?</Typography>
        </JanelaModal>

    )
}

export default JanelaModalDeletar;
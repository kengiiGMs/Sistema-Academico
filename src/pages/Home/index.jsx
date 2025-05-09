import { useEffect, useState } from 'react';
import { Container, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, CircularProgress, Modal, TextField, Link, AppBar, Toolbar } from '@mui/material';
import usarListar from '../../hooks/estudante/usarListar';
import usarCriar from '../../hooks/estudante/usarCriar';
import usarDeletar from '../../hooks/estudante/usarDeletar';
import usarDeletarToken from '../../hooks/deletarToken/usarDeletarToken';

const Home = () => {
    const [data, solicitar, loading] = usarListar();
    const [solicitarCriar, loadingCriar] = usarCriar();
    const [solicitarDeletar, loadingDeletar] = usarDeletar();
    const [solicitarDeletarToken] = usarDeletarToken();

    const [modalCadastro, setModalCadastro] = useState(false);
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [curso, setCurso] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const [modalDeletar, setModalDeletar] = useState(false);
    const [idDeletar, setIdDeletar] = useState("");
    const [nomeDeletar, setNomeDeletar] = useState("");


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


    const abrirModalCadastro = () => {
        setModalCadastro(true);
    }

    const fecharModalCadastro = () => {
        setModalCadastro(false);
    }

    const efetuarCadastro = async (e) => {
        e.preventDefault();
        await solicitarCriar(nome, endereco, curso, telefone, email);
        solicitar();
        fecharModalCadastro();
    }

    const abrirModalDeletar = () => {
        setModalDeletar(true);
    }

    const fecharModalDeletar = () => {
        setModalDeletar(false);
    }

    const prepararParaDeletar = (id, nome) => {
        setIdDeletar(id);
        setNomeDeletar(nome);
        abrirModalDeletar();
    }

    const efetuarExclusao = async (e) => {
        e.preventDefault();

        await solicitarDeletar(idDeletar);
        solicitar();
        fecharModalDeletar();
    }

    useEffect(() => {
        solicitar();
    }, []);

    return (
        <>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sistema Acadêmico
                    </Typography>

                    <div>
                        <Button variant="contained" sx={{ marginBlock: '5px' }} disabled={loadingCriar} color='error' onClick={() => { solicitarDeletarToken() }}>Sair</Button>
                    </div>

                </Toolbar>
            </AppBar>

            <Container maxWidth={false} sx={{ width: '100vw' }}>



                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {loading ? (
                        <CircularProgress size="3rem" />
                    ) : (
                        <Box>
                            <Typography variant="h1" sx={{ fontSize: '60px', textAlign: 'center' }}>Estudantes</Typography>

                            <Button variant="contained" sx={{ marginBottom: '10px' }} onClick={abrirModalCadastro}>Cadastrar Estudante</Button>

                            <TableContainer component={Paper} sx={{ maxWidth: 780 }}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nome</TableCell>
                                            <TableCell align="right">Telefone</TableCell>
                                            <TableCell align="right">Endereço</TableCell>
                                            <TableCell align="right">Curso</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((estudante) => (
                                            <TableRow
                                                key={estudante.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {estudante.nome}
                                                </TableCell>
                                                <TableCell align="right">{estudante.telefone}</TableCell>
                                                <TableCell align="right">{estudante.endereco}</TableCell>
                                                <TableCell align="right">{estudante.curso}</TableCell>
                                                <TableCell align="right">{estudante.email}</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="contained" sx={{ marginRight: '5px' }}>Editar</Button>
                                                    <Button variant="contained" color='error' onClick={() => { prepararParaDeletar(estudante.id, estudante.nome) }}>Deletar</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Modal
                                open={modalCadastro}
                                onClose={fecharModalCadastro}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <form onSubmit={efetuarCadastro}>
                                        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="h5" sx={{ marginBlock: '5px' }}>Cadastro de Estudante</Typography>
                                            <TextField id="nome" label="Insira o seu Nome" variant="filled" onChange={(e) => { setNome(e.target.value) }} required sx={{ marginBlock: '5px' }} />
                                            <TextField id="endereco" label="Insira o seu Endereço" variant="filled" onChange={(e) => { setEndereco(e.target.value) }} required sx={{ marginBlock: '5px' }} />
                                            <TextField id="curso" label="Insira o seu Curso" variant="filled" onChange={(e) => { setCurso(e.target.value) }} required sx={{ marginBlock: '5px' }} />
                                            <TextField id="telefone" label="Insira o seu Telefone" variant="filled" onChange={(e) => { setTelefone(e.target.value) }} required sx={{ marginBlock: '5px' }} />
                                            <TextField id="email" label="Insira o seu Email" variant="filled" onChange={(e) => { setEmail(e.target.value) }} required sx={{ marginBlock: '5px' }} />

                                            <Button variant="contained" type="submit" sx={{ marginBlock: '5px' }} disabled={loadingCriar}>Cadastrar</Button>
                                        </Container>
                                    </form>
                                    <Container>
                                        <Link sx={{ color: 'red' }} underline='none' onClick={() => { fecharModalCadastro() }}>Cancelar</Link>
                                    </Container>
                                </Box>
                            </Modal>

                            <Modal
                                open={modalDeletar}
                                onClose={fecharModalDeletar}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <form onSubmit={efetuarExclusao}>
                                        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="h5" sx={{ marginBlock: '5px' }}>Deletar Estudante</Typography>
                                            <Typography variant="h5" sx={{ marginBlock: '25px', marginTop: '10px' }}>Deseja deletar {nomeDeletar} ?</Typography>


                                            <Button variant="contained" type="submit" sx={{ marginBlock: '5px' }} disabled={loadingDeletar}>Deletar</Button>
                                        </Container>
                                    </form>
                                    <Container>
                                        <Link sx={{ color: 'red' }} underline='none' onClick={() => { fecharModalDeletar() }}>Cancelar</Link>
                                    </Container>
                                </Box>
                            </Modal>
                        </Box>
                    )}
                </Box>
            </Container >
        </>
    )
}

export default Home;
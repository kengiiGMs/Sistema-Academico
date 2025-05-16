import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useValidarToken from "../hooks/usuario/useValidarToken";

const Autenticado = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const verificar = async () => {
            const valido = await useValidarToken();
            if (valido) {
                if (valido.usuario.tipo === 'ESTUDANTE') {
                    navigate('/home')
                } else if (valido.usuario.tipo === 'PROFESSOR') {
                    navigate('/turmas')
                } else if (valido.usuario.tipo === 'DIRETOR') {
                    navigate('/gestao')
                }
            } else {
                navigate('/')
            }
        };

        verificar();
    }, []);

    return <>{children}</>;
};

export default Autenticado;

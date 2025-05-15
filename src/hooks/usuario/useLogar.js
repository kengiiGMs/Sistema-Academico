import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useLogar = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function solicitar(email, senha) {
        try {
            setLoading(true);

            const resposta = await api.post("/usuarios/login", { "email": email, "password": senha });

            if (resposta.data.token) {
                Cookies.set("token", resposta.data.token, { expires: 7 });
                Cookies.set("id_usuario", resposta.data.usuario.id, { expires: 7 });
            }

            if (resposta.data.usuario.tipo === 'DIRETOR') {
                navigate('/gestao')
            }
            if (resposta.data.usuario.tipo === 'ESTUDANTE') {
                navigate('/home')
            }
            if (resposta.data.usuario.tipo === 'PROFESSOR') {
                navigate('/turmas')
            }

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false);
        }
    }
    return [solicitar, loading];
}

export default useLogar;
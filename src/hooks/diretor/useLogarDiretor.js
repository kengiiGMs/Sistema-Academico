import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useLogarDiretor = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function solicitar(email, senha) {
        try {
            setLoading(true);

            const resposta = await api.post("/diretores/login", { "email": email, "password": senha });

            if (resposta.data.token) {
                Cookies.set("token_adm", resposta.data.token, { expires: 7 });
            }

            navigate('/gestao')
        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false);
        }
    }
    return [solicitar, loading];
}

export default useLogarDiretor;
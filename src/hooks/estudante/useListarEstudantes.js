import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";

const useListarEstudantes = () => {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(false);

    async function solicitar() {
        try {
            setLoading(true);

            const token = Cookies.get('token_diretor');

            const resposta = await api.get("/estudantes", { headers: { 'Authorization': `Bearer ${token}` } });

            setDados(resposta.data);

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false);
        }
    }
    return [solicitar, dados, loading];
}

export default useListarEstudantes;
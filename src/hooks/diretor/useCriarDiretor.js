import { useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";

const useCriarDiretor = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function solicitar(nome, email, password, password_confirmation) {
        try {
            setLoading(true)

            await api.post('/diretores', { email: email, password: password, nome: nome, password_confirmation: password_confirmation });

            alert('Diretor cadastrado');

            navigate('/')
        } catch (erro) {
            console.error(erro)
            alert(`Erro: ${erro.response?.data?.detalhes || "Erro - server"}`);
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default useCriarDiretor;
import { useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";

const useCriarEstudante = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function solicitar(nome, email, password, endereco, curso, telefone, password_confirmation) {
        try {
            setLoading(true)

            await api.post('/estudantes', { email: email, password: password, nome: nome, endereco: endereco, curso: curso, telefone: telefone, password_confirmation: password_confirmation });

            alert('Estudante cadastrado');

            navigate('/')
        } catch (erro) {
            console.error(erro)
            alert(`Erro: ${erro.response?.data?.detalhes || erro.response?.data?.error}`);
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default useCriarEstudante;
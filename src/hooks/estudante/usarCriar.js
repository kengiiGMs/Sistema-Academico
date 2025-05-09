import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";

const usarCriar = () => {
    const [loading, setLoading] = useState(false);
    async function solicitar(nome, endereco, curso, telefone, email) {
        try {
            setLoading(true)
            const token = Cookies.get('token');

            await api.post('/estudante', { nome: nome, endereco: endereco, curso: curso, telefone: telefone, email: email }, { headers: { 'Authorization': `Bearer ${token}` } });

            alert('Estudante cadastrado');

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default usarCriar;
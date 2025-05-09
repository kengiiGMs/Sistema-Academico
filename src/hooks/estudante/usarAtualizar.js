import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";

const usarAtualizar = () => {
    const [loading, setLoading] = useState(false);
    async function solicitar(nome, endereco, curso, telefone, email, id) {
        try {
            setLoading(true)
            const token = Cookies.get('token');
            console.log(id);
            await api.put(`/estudante/${id}`, { nome: nome, endereco: endereco, curso: curso, telefone: telefone, email: email }, { headers: { 'Authorization': `Bearer ${token}` } });

            alert('Estudante editado');

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default usarAtualizar;
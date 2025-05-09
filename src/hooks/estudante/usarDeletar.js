import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";

const usarDeletar = () => {
    const [loading, setLoading] = useState(false);
    async function solicitar(id) {
        try {
            setLoading(true)
            const token = Cookies.get('token');
            console.log(id);
            await api.delete(`/estudante/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });

            alert('Estudante deletado');

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default usarDeletar;
import { useState } from "react";
import api from "../../service/api";

const usarCriar = () => {
    const [loading, setLoading] = useState(false);

    async function solicitar(email, password) {
        try {
            setLoading(true)

            await api.post('/usuario', { email: email, password: password });

            alert('Usuário cadastrado');

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default usarCriar;
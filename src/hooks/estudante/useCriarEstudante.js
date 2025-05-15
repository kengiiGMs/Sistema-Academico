import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";

const useCriarEstudante = () => {
    const [loading, setLoading] = useState(false);

    async function solicitar(nome, email, password, endereco, ra, telefone, password_confirmation) {
        try {
            setLoading(true)

            const token = Cookies.get('token');

            await api.post('/estudantes', { email: email, password: password, nome: nome, endereco: endereco, ra: ra, telefone: telefone, tipo: 'ESTUDANTE', password_confirmation: password_confirmation }, { headers: { 'Authorization': `Bearer ${token}` } });

        } catch (erro) {
            console.error(erro)
            throw erro;
        } finally {
            setLoading(false)
        }
    }
    return [solicitar, loading];
}

export default useCriarEstudante;
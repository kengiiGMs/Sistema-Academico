import api from "../../service/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useRemoverToken = () => {
    const navigate = useNavigate();

    async function solicitar() {
        try {
            const token = Cookies.get('token');
            await api.post('/usuarios/token/remover', {}, { headers: { 'Authorization': `Bearer ${token}` } });
            Cookies.remove('token');
            Cookies.remove('id_usuario');

            alert('Deslogado');

            navigate("/");

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        }
    }
    return [solicitar];
}

export default useRemoverToken;
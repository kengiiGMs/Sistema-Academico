import api from "../../service/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useDeletarTokenDiretor = () => {
    const navigate = useNavigate();

    async function solicitar() {
        try {
            const token = Cookies.get('token_diretor');
            await api.post('/diretores/token/remover', {}, { headers: { 'Authorization': `Bearer ${token}` } });
            Cookies.remove('token_diretor');

            alert('Deslogado');

            navigate("/");

        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        }
    }
    return [solicitar];
}

export default useDeletarTokenDiretor;
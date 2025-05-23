import Cookies from "js-cookie";
import api from "../../service/api";

const useValidarTokenDiretor = async () => {
    const token = Cookies.get("token_diretor");

    if (!token) {
        return false
    } else {
        try {
            const resposta = await api.post("/diretores/token/validar", {}, { headers: { 'Authorization': `Bearer ${token}` } })

            if (resposta.status === 200) {
                return true
            } else {
                Cookies.remove('token_diretor');
                return false
            }
        } catch (error) {
            Cookies.remove('token_diretor');
            return false
        }
    }
}

export default useValidarTokenDiretor;
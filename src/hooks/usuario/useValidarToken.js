import Cookies from "js-cookie";
import api from "../../service/api";

const useValidarToken = async () => {
    const token = Cookies.get("token");
    const user = Cookies.get("id_usuario");

    if (!token || !user) {
        Cookies.remove('token');
        Cookies.remove('id_usuario');
        return false
    } else {
        try {
            const resposta = await api.post("/usuarios/token/validar", {}, { headers: { 'Authorization': `Bearer ${token}` } })

            if (resposta.status === 200) {
                return resposta.data
            } else {
                Cookies.remove('token');
                Cookies.remove('id_usuario');
                return false
            }
        } catch (error) {
            Cookies.remove('token');
            Cookies.remove('id_usuario');
            return false
        }
    }
}

export default useValidarToken;
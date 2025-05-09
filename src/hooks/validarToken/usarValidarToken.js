import Cookies from "js-cookie";
import api from "../../service/api";

const usarValidarToken = async () => {
    const token = Cookies.get("token");

    if (!token) {
        return false
    } else {
        try {
            const resposta = await api.post("/validarToken", {}, { headers: { 'Authorization': `Bearer ${token}` } })

            if (resposta.status === 200) {
                return true
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    }
}

export default usarValidarToken;
import { useState } from "react";
import api from "../../service/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const usarLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function solicitar(email, senha) {
        try {
            setLoading(true);

            const resposta = await api.post("/login", { "email": email, "password": senha });

            if (resposta.data.token) {
                Cookies.set("token", resposta.data.token, { expires: 7 });
                navigate("/home");
            }
        } catch (erro) {
            alert(`Erro: ${erro.response?.data?.error || "Erro - server"}`);
        } finally {
            setLoading(false);
        }
    }
    return [solicitar, loading];
}

export default usarLogin;
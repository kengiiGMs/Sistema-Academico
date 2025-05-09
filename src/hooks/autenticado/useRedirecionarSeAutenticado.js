import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import usarValidarToken from "../validarToken/usarValidarToken"

const useRedirecionarSeAutenticado = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const valido = usarValidarToken(token);
            if (valido) {
                navigate('/home');
            } else {
                Cookies.remove('token');
            }
        }
    }, []);
}

export default useRedirecionarSeAutenticado;
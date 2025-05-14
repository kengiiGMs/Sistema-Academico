import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useValidarTokenDiretor from "../hooks/diretor/useValidarTokenDiretor";
import IndicadorDeCarregamento from "../components/indicadorDeCarregamento";

const RotaProtegidaDiretor = ({ children }) => {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(null);

    useEffect(() => {
        const verificar = async () => {
            const valido = await useValidarTokenDiretor();
            if (!valido) {
                navigate("/diretor");
            } else {
                setAutenticado(true);
            }
        };

        verificar();
    }, [navigate]);

    if (autenticado === null) {
        return (
            <IndicadorDeCarregamento />
        )
    }

    return <>{children}</>;
};

export default RotaProtegidaDiretor;

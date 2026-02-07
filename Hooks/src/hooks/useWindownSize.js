import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        //função para atualizar o estado com as novas dimensões da janela
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        //Evento que dispara a função handleResize toda vez que a janela for redimensionada
        window.addEventListener('resize', handleResize)

        return () => { //Limpeza de memoria, remove o event listener quando o componente for desmontado
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}
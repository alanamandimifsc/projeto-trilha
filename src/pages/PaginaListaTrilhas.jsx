import CardTrilha from "../components/CardTrilha";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext"


function PaginaListaTrilhas() {

    const { trilhas, isLoading } = useContext(TrilhasContext);
    return (
        <>
            <div className="menu-inferior">
                <img width="100%" height="300px" src={"https://images.pexels.com/photos/18275203/pexels-photo-18275203/free-photo-of-natureza-floresta-selva-mata.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Imagem da trilha menu" />
            </div>
            <div className="container">
                <h1 className="titulo">Explore trilhas incríveis</h1>
                {trilhas && !isLoading ? (
                    trilhas.map((trilha, index) => (
                        <CardTrilha dadosTrilha={trilha} key={index} />
                    ))
                ) : (
                    <span>Não há dados disponíveis</span>
                )
                }
            </div>
        </>

    );
}

export default PaginaListaTrilhas;
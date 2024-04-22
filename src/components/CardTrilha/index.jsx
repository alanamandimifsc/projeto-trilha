import * as PropTypes from "prop-types"
import "./cardTrilha.css"

function CardTrilha({ dadosTrilha }) {
    return (
        <div className="card_container" key={dadosTrilha.name}>
            <div className="card_img">
                <img className="card_imagem" width={200} src={dadosTrilha.urlImagem} alt="Imagem da trilha" />
            </div>
            <div className="card_info" >
                <h1 className='card_titulo'>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} - {dadosTrilha.estado}</h1>

                <p>_____________</p>
                <p id="autor">Por:{dadosTrilha.nomeUsuario}</p>
                <p>Duração: {dadosTrilha.duracao} min</p>
                <p>Distância: {dadosTrilha.trajeto} km</p>
                <p>Dificuldade: {dadosTrilha.dificuldade}</p>
                <p>Tipo: {dadosTrilha.tipo}</p>

            </div>
        </div>
    )
}


// configuração das props types
CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        // enum
        tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
        nomeUsuario: PropTypes.string,
        urlImagem: PropTypes.string.isRequired
    })
}

// aqui vai os prop-types

export default CardTrilha;
import * as PropTypes from 'prop-types';
import './cardTrilha.css';
import useFetch from '../../hooks/useFetch';

function CardTrilha() {
    const [listaTrilhas] = useFetch("/trilhas.json");


    return (
        <>
            {listaTrilhas && listaTrilhas.map((dadosTrilha) => (
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
            ))};
        </>
    );

}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.shape({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.string.isRequired,
        trajeto: PropTypes.string.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.oneOf(['caminhada', 'trakkking', 'corrida', 'ciclismo']).isRequired,
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
    })
}

export default CardTrilha;
import CButton from "../components/atoms/button/CButton";
import PaginaInicialOrganisms from "../components/molecules/organisms/paginaInicialOrganisms";
import { Link } from "react-router-dom";
function PaginaInicial() {
  return (
    <div className="container">
      {/* <img width="100%" height="600px" src={"https://images.pexels.com/photos/18275203/pexels-photo-18275203/free-photo-of-natureza-floresta-selva-mata.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Imagem da trilha menu" /> */}

      <PaginaInicialOrganisms style={{ position: "absolute", top: 0 }} />
      <div className="explore-trilhas">
        <h1 className="titulo">Explore trilhas incríveis</h1>
        <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.</p>
        <Link className="centro-botao" to='/listaTrilhas' >
          <CButton >Explorar trilhas </CButton>
        </Link>
      </div>
      <div className="fotos">
        <div className="info-foto">
          <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
          <Link to='/cadastroTrilha' >
            <CButton>Cadastrar nova trilhas</CButton>
          </Link>
        </div>
        <img src={"https://images.pexels.com/photos/18275203/pexels-photo-18275203/free-photo-of-natureza-floresta-selva-mata.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Imagem da trilha menu" />
      </div>



    </div>
  );
}

export default PaginaInicial
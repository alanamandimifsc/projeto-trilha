import { Link } from "react-router-dom"
import CButton from "../../atoms/button/CButton"
import './paginaInicialOrganisms.css'

function PaginaInicialOrganisms() {
  return (
    <div className="principal">
      <h1>Que tal aproveitar um tempo com a natureza ? </h1>
      < p clasName="descricaoInicial" > Junte - se à comunidade de entusiastas ao ar livre, compartilhe suas
        aventuras e inspire - se com as experiências de outros aventureiros.
        Prepare - se para explorar novos horizontes e se conectar com a natureza
        através do Adventure Trails! </p>
      < div >
        <Link to='/listaTrilhas' >
          <CButton>Explorar trilhas </CButton>
        </Link>
      </div>


    </div>

  )
}

export default PaginaInicialOrganisms;
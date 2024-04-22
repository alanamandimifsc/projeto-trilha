

function PaginaCadastroTrilhas() {
  return (
    <div className="container">
      <h1>Cadastro de Nova Trilha</h1>
      <form>
        <div className="container-cadastro">
          <div>
            <label htmlFor="nometrilha">Nome da Trilha:</label>
            <input type="text" name="nometrilha" required />
          </div>
          <div>
            <label htmlFor="duracao">Duração (min):</label>
            <input type="number" name="duracao" required />
          </div>
          <div>
            <label htmlFor="trajeto" >Trajeto (KM):</label>
            <input type="number" name="trajeto" required />
          </div>
          <div>
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" name="cidade" required />
          </div>
          <div>
            <label htmlFor="estado">Estado:</label>
            <select id="estado" name="estado">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
          <div>
            <label htmlFor="usuario">Usuário:</label>
            <input type="text" name="usuario" required />
          </div>
          <div>
            <label htmlFor="dificuldade">Dificuldade:</label>
            <select name="dificuldade" required>
              <option value="facil">Fácil</option>
              <option value="medio">Médio</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>
          <div>
            <label htmlFor="tipotrilha">Tipo de Trilha:</label>
            <select name="tipotrilha" required>
              <option value="caminhada / trekking">Caminhada / trekking</option>
              <option value="ciclismo">Ciclismo</option>
            </select>
          </div>
          <div>
            <label htmlFor="imagem">Urk da Imagem:</label>
            <input type="text" name="imagem" required />
          </div>
        </div>
      </form>
    </div>
  );
}
export default PaginaCadastroTrilhas;
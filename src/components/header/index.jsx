import "./index.css"
function Header() {

    return (
        <header className="header-menu">
            <div className="menu-superior">
                <p>Adventure Trails FD</p>
                <div className="menu">
                    <p>Explorar Trilhas</p>
                    <p>Cadastrar trilhas</p>
                </div>
            </div>
            <div className="menu-inferior">
                <img width="100%" height="300px" src={"https://images.pexels.com/photos/18275203/pexels-photo-18275203/free-photo-of-natureza-floresta-selva-mata.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Imagem da trilha menu" />
            </div>
        </header>
    );

}
export default Header;
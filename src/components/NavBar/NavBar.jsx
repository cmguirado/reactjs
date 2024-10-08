import CartWidget from "./Cartwidget"
import "./navbar.scss"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ecomerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Producto 1</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Producto 2</a>
                        </li>
                    </ul>
                </div>
            
                <CartWidget className="d-flex ms-lg-0 ms-auto" />
            </div>
        </nav>
    )
}

export default NavBar
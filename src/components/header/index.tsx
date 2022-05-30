import "../header/style.scss"
import { useHistory } from "react-router-dom"
import { FaChromecast, FaSearch, FaUserCircle } from "react-icons/fa"

export const Header = () => {

    const history = useHistory()

    return (
        <main className="container-main" data-testid="header">

        <div className="container-box">
            <figure onClick={() => history.push("/")} data-testid="figure">
                <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="Logo"/>
            </figure>
            <FaSearch className="icon-search-mobile"/>
            <FaUserCircle className="icon-profile-mobile"/>
            <nav className="content">
                <h1 onClick={() => history.push("/")}> Inicio </h1>
                <h1 onClick={() => history.push("/Explore")}> Explorar </h1>
                <h1 onClick={() => history.push("/Library")}> Biblioteca </h1>
                <h1 onClick={() => history.push("/Upgrade")}> Upgrade </h1>
                <h1 onClick={() => history.push("/Search")}> < FaSearch/> Pesquisar </h1>
            </nav>
            <div className="ContentConfig">
                <FaChromecast className="icon-chrome-cast"/>
                <FaUserCircle className="icon-user"/>
            </div>
        </div>

        </main>
    )
}
import "../styles/generales.css"
import "../styles/variables.css"
import "../styles/login.css"
import logoCaeiiDesktop from "../styles/img/logo-caeii-desktop.svg"
import logoAareiiDesktop from "../styles/img/logo-aareii-desktop.svg"
import logoAareii from "../styles/img/aareii.png"
import logoCaeii from "../styles/img/caeii.svg"

function Login() {

    return (<>
        <header>
            <div className="title">
                <img src={logoCaeii}/>
            </div>
            <img id="logo_caeii_desktop" src={logoCaeiiDesktop} alt="Logo de CAEII XX" />
        </header>
        <main id="main_login">
            <div className="login-card">
                <form action="" method="post">
                    <h1>BIENVENIDO</h1>
                    <input type="text" name="user" placeholder="Usuario" id="" />
                    <input type="password" name="pass" placeholder="Contraseña" id="" />
                    <a href="" className="no_contra" >¿olvidaste tu contraseña?</a>
                    <button type="submit">Ingresar</button>
                    <a href="">Registrate</a>
                </form>
            </div>
        </main>
        <footer>
            <div className="logo">
                <img src={logoAareii} alt="Logo de AArEII" />
            </div>
            <img id="logo_aareii_desktop" src={logoAareiiDesktop} alt="Logo de AArEII" />
        </footer>
    </>);

}

export default Login;
import { Link,Outlet } from "react-router-dom"
import '/src/style/estilo.css';

function HomePage(){
    return(
        <>
            <p className="menu"><Link to="/">Inicio</Link></p>
            <p className="menu"><Link to="/naruto">Lista de Personagens</Link></p>
            <div key="key00a">
                <Outlet />
            </div>
        </>
    )
}
export default HomePage
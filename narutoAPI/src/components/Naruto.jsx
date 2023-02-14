import { useEffect, useState } from "react";
import '/src/style/estilo.css';
import axios from "axios";
import { Link,Outlet,useLocation } from "react-router-dom"

function Naruto(){

    const [naruto, setNaruto] = useState([])

    useEffect(()=> {
        getNaruto()
    }, [])

    const getNaruto = () =>{
        axios
        .get("https://naruto-api.fly.dev/api/v1/characters")
        .then((res) => setNaruto(res.data))
        .catch((err) => console.log(err))
    }

    return(
        <>
        <div key="tururu">
            <Outlet />
        </div>
        <div className="todos">

            {naruto.map((personagens, key) => (
                <>
                    <div className="personagem" key={key}>
                        <div className="nomePersonagem"><Link to="/naruto/teste" state={{key}}><div className="nomeInterior">{personagens.name.replace('_', ' ')}</div></Link></div>
                        <div className="imagemPersonagem"><img className="imagemInterior" src={personagens.images[0] || personagens.images[1]}></img></div>
                        <div className="vilaPersonagem"><div className="vilaInterior">{personagens.info.Afiliação.replace(' (Apenas Anime)', '')}</div></div>
                    </div>
                </>
            ))}
            
        </div>
        </>
    )
}

export default Naruto
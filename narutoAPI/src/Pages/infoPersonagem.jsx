import { useEffect, useState } from "react";
import axios from "axios"
import { useLocation } from "react-router-dom"
import '/src/style/infoStyle.css';

function Info(){
    const location = useLocation()

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
        <div className="InfoCard" key="info">
            <div className="InfoImagemPersonagem"><img className="InfoImagemInterior" src={naruto[location.state.key]?.images[0]}></img></div>
            
            <div className="Infos" key="infocards">
                <table className="tabelaInfo">
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="tabelaTitulo">Nome</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.name.replace('_', ' ')}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Estado</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Estado || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Sexo</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Sexo || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Aniversário</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Aniversário || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Idade</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Idade || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Altura</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Altura || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Espécie</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Espécie || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Bijū</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Bijū || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Kekkei Mōra</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Kekkei Mōra'] || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Kekkei Genkai</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Kekkei Genkai'] || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Classificação</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Classificação || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Peso</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Peso || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Tipo Sanguíneo</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Tipo Sanguíneo'] || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Clã</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Clã || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Ocupação</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Ocupação || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Vila</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Afiliação.replace(' (Apenas Anime)', '')}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Time</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Times || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Parceiro</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info.Parceiro || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Patente Ninja</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Patente Ninja'] || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Registro Ninja</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Registro Ninja'] || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Graduação (Genin)</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Graduação (Genin)'] || <>?</>}</td>
                    </tr>
                    <tr>
                        <td className="tabelaTitulo">Graduação (Chūnin)</td>
                        <td>-</td>
                        <td>{naruto[location.state.key]?.info['Graduação (Chūnin)'] || <>?</>}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="InfoSobrePersonagem"><div className="InfoSobreInterior">{naruto[location.state.key]?.about}</div></div>
        </div>
        </>
    )
}

export default Info
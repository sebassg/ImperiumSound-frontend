
import"../styles/nosotros.css"
import { UpsiteLog } from "../componetes/UpsiteLog";
function Nosotros() {
  return (
    <>
    <UpsiteLog></UpsiteLog>
    <div className="tituloObje"><h1>NOSOTROS</h1></div>
    <div className="contenedor1">
        <div className="tarjeta1">
            <h2>Nosotros</h2>
            <p>En Imperium Sound nos dedicamos a ayudarte a entender y controlar el ruido en tu entorno. Creemos que un ambiente acústico saludable es fundamental para el bienestar y la productividad.</p>
            <div className="icono1">
               
                <img src="tu-icono1.png" alt="Icono"/>
            </div>
        </div>

        <div className="tarjeta2">
            <h2>Nuestro compromiso</h2>
            <p>Nos comprometemos a proporcionar una herramienta fiable y precisa para mejorar tu calidad de vida. Creemos que un entorno más tranquilo contribuye a una mejor salud mental y física.</p>
            <div className="icono1">
                
                <img src="tu-icono2.png" alt="Icono"/>
            </div>
        </div>

        <div className="tarjeta3">
            <h2>¿Qué hacemos?</h2>
            <p>Ofrecemos una herramienta en línea fácil de usar que mide el nivel de ruido en cualquier lugar. Con solo unos clics, puedes obtener datos precisos sobre la intensidad del sonido y recibir recomendaciones para mejorar tu espacio acústico.</p>
            <div className="icono1">
            
                <img src="tu-icono3.png" alt="Icono"/>
            </div>
        </div>
    </div>
    </>
  );
}

export default Nosotros;
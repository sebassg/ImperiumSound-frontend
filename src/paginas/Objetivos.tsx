
import "../styles/objetivos.css"
import Upsite from "../componetes/Upsite";
function Objetivos() {
  return (
    <>
    <Upsite></Upsite>
    <div className="tituloObje"><h1>OBJETIVOS</h1></div>
    <div className="contenedor2">
        <div className="tarjetaa1">
            <h2>Vision </h2>
            <p>Aspiramos a ser líderes en el campo del monitoreo acústico, ofreciendo soluciones innovadoras que mejoren la calidad de vida de las personas en todo el mundo. Nos esforzamos por educar a la comunidad sobre la importancia del control del ruido y proporcionar las herramientas necesarias para lograr un entorno más silencioso y saludable</p>
            <div className="icono1">
               
                <img src="tu-icono1.png" alt="Icono"/>
            </div>
        </div>

        <div className="tarjetaa2">
            <h2>Innovación y Tecnología</h2>
            <p>En Imperium sound, estamos a la vanguardia de la tecnología acústica. Nuestra herramienta utiliza algoritmos avanzados y sensores precisos para ofrecerte datos exactos sobre el nivel de ruido. Estamos constantemente mejorando y actualizando nuestra tecnología para asegurarnos de que tengas acceso a las mejores soluciones disponibles en el mercado</p>
            <div className="icono1">
                
                <img src="tu-icono2.png" alt="Icono"/>
            </div>
        </div>

        <div className="tarjetaa3">
            <h2>Responsabilidad Social</h2>
            <p>Nos preocupamos por el impacto del ruido en la salud pública y el medio ambiente. Por eso, colaboramos con organizaciones y comunidades para promover la conciencia sobre la contaminación acústica y sus efectos. A través de campañas educativas y proyectos comunitarios, trabajamos para crear un entorno más saludable y sostenible para todos</p>
            <div className="icono1">
            
                <img src="tu-icono3.png" alt="Icono"/>
            </div>
        </div>
    </div>
    </>
  );
}

export default Objetivos;
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Oracle() {
  return (
    <div className="page-ora">
      <Navbar></Navbar>
      <div
        className="acceuil-presentation-ora acceuil-presentation-content"
        id="ora"
      >
        <div className="img-container"></div>
        <div className="text-container">
          <div className="h-container">
            <h2>LA LECTURE D'ORACLE</h2>
            <h3>se pratique à distance</h3>
            <p className="page-number" id="page-number">
              1
            </p>
          </div>
          <p>
            La lecture d'Oracle pour les animaux est une méthode de
            communication intuitive qui peut aider le gardien de l'animal à
            mieux comprendre le comportement, la santé et les besoins de son
            animal. <br />
            <br />
            Cette pratique utilise les cartes d'oracle et de tarot, en ayant
            demandé l'aide de mes guides au préalable pour obtenir des réponses.
            Il faut donc me communiquer plusieurs questions ainsi que la photo
            de votre animal. <br />
            <br />
            Grâce à cette technique, il est possible d'établir une communication
            différente avec les animaux, en interprétant les messages que les
            cartes nous offrent. Cela permet de répondre à leurs besoins sur
            différents aspects de leur vie, tels que la santé, la nutrition, les
            émotions, la relation avec leur propriétaire, leur environnement,
            etc.
          </p>
        </div>
      </div>
      <div
        className="acceuil-presentation-ora acceuil-presentation-content"
        id="ora1"
      >
        <div className="text-container">
          <div className="h-container">
            <h2>LA LECTURE D'ORACLE</h2>
            <h3>se pratique à distance</h3>
            <p className="page-number" id="page-number">
              2
            </p>
          </div>
          <p>
            La lecture d'Oracle pour les animaux est effectuée à distance,
            n'importe où dans le monde. Elle permet une écoute attentive des
            messages que les cartes nous offrent et qui sont spécifiques à
            chaque animal. <br />
            <br />
            Grâce à sa simplicité et à la précision des résultats qu'elle permet
            d'obtenir une approche différente par rapport à la communication
            animale. En somme, la lecture d'Oracle pour les animaux est un outil
            puissant qui met en évidence les besoins profonds transmis par nos
            guides spirituels.
            <br />
            <br /> Elle peut vous aider à comprendre leur comportement, leur
            santé, leurs émotions, leur environnement et à améliorer leur
            qualité de vie. Elle est également complémentaire avec la
            communication animale car elle peut apporter d'autres informations
            que l'animal n'a pas ou ne connaît pas.
          </p>
          <Link to={"/lecture-oracle/rendez-vous"}>
            <button>PRENDRE RENDEZ-VOUS</button>
          </Link>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
}

export default Oracle;

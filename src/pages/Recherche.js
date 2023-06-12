import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Recherche() {
  return (
    <div className="page-rec">
      <Navbar></Navbar>
      <div
        className="acceuil-presentation-rec acceuil-presentation-content"
        id="rec"
      >
        <div className="img-container"></div>
        <div className="text-container">
          <div className="h-container">
            <h2>RECHERCHE D'ANIMAUX PERDUS</h2>
            <h3>se pratique à distance</h3>
            <p className="page-number" id="page-number">
              1
            </p>
          </div>
          <p>
            Ma méthode de communication animale pour la recherche utilise une
            combinaison de techniques intuitives et énergétiques pour localiser
            et retrouver les animaux perdus. <br />
            <br />
            Je rentre en communication avec votre animal pour le rassurer, le
            guider et l'aider à retrouver son chemin pour rentrer chez lui.
            Grâce à ça, je peux vous communiquer ses messages et lui transmettre
            les vôtres. <br />
            <br />
            J'utilise ma capacité à me connecter intuitivement avec les animaux
            pour ressentir leur énergie et leur emplacement. En utilisant un
            pendule sur une carte géographique, je peux déterminer leur
            localisation approximative et délimiter une zone de recherche.{" "}
            <br />
            <br />
            J'utilise également des oracles pour me guider dans ma recherche.
            Mon objectif est de localiser rapidement et recevoir des indices,
            des images ou des sons qui permettrait de le retrouver.
          </p>
          <Link to={"/recherche-animale/rendez-vous"}>
            <button>PRENDRE RENDEZ-VOUS</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Recherche;

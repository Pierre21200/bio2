import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Recherche() {
  return (
    <div className="page-rec">
      <Navbar></Navbar>
      <div
        className="acceuil-presentation-rec acceuil-presentation-content"
        id="rec">
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
          {/* <Link to={"/recherche-animale/rendez-vous"}>
            <button className="button-anim">PRENDRE RENDEZ-VOUS</button>
          </Link>{" "} */}
        </div>
      </div>
      <div
        className="acceuil-presentation-rec acceuil-presentation-content"
        id="rec1">
        <div className="text-container">
          <div className="h-container">
            <h2>RECHERCHE D'ANIMAUX PERDUS</h2>
            <h3>se pratique à distance</h3>
            <p className="page-number" id="page-number">
              2
            </p>
          </div>
          <p>
            J’établis un lien subtil avec lui, afin de lui transmettre des
            messages de réconfort, d'encouragement et de sécurité. Je lui fais
            savoir qu'il n'est pas seul et que nous faisons tout notre possible
            pour l'aider à rentrer chez lui. <br></br>
            <br></br>Dans le même temps, je suis également à l'écoute des
            messages que l'animal souhaite me transmettre. Je peux recevoir des
            informations importantes sur leur situation actuelle, leurs besoins
            ou les obstacles auxquels ils sont confrontés. <br></br>
            <br></br>Dans cette communication bidirectionnelle, je peux agir
            comme un intermédiaire entre vous et votre animal perdu. Je vous
            transmets les messages que j'ai reçus de lui, vous tenant ainsi
            informé de son état d'esprit, de ses besoins spécifiques ou de toute
            information pertinente pour faciliter sa localisation.
          </p>
        </div>
        <div className="img-container"></div>
      </div>
      <div
        className="acceuil-presentation-rec acceuil-presentation-content"
        id="rec2">
        <div className="img-container"></div>
        <div className="text-container">
          <div className="h-container">
            <h2>RECHERCHE D'ANIMAUX PERDUS</h2>
            <h3>se pratique à distance</h3>
            <p className="page-number" id="page-number">
              3
            </p>
          </div>
          <p>
            Parallèlement à la communication animale, je reste également
            attentive aux signes et aux indices qui se présentent lors de mes
            recherches. Les oracles que j'utilise me guident vers des pistes
            spécifiques ou me révèlent des images qui pourraient être liées à la
            localisation de votre animal. Je m'appuie sur mon intuition et ma
            connexion profonde avec le royaume animal pour interpréter ces
            indices de manière précise et efficace.<br></br>
            <br></br> En combinant ces différentes approches intuitives et
            énergétiques, je m'efforce de créer une méthodologie de recherche
            complète et sensible pour ramener la joie et le soulagement dans
            votre foyer en retrouvant votre animal.
          </p>
          <Link to={"/biorésonance/rendez-vous"}>
            <button className="button-anim">PRENDRE RENDEZ-VOUS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recherche;

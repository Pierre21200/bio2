import morgane from "../utils/img/morgane.webp";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div id="about" className="about">
      <Navbar></Navbar>
      <div className="about-text-container">
        <div className="about-header">
          <h2>Morgane FAUCOMPRÉ</h2>
          <p>29 ans - Assistante Vétérinaire</p>
          <p>7 ans d'expérience en Communication Animale</p>
        </div>
        <div className="img-morgane-container">
          <img src={morgane} alt="Morgane Faucompré"></img>
        </div>
        <div className="about-text">
          Dans un monde où la bienveillance envers les animaux et l'amour de la
          nature sont essentiels, j'ai trouvé ma voie en me connectant
          profondément avec nos amis à quatre pattes. Avec une grande
          sensibilité et un amour inconditionnel pour les êtres vivants, j'ai
          développé une affinité particulière pour la communication animale.
          <br></br>
          La communication animale est l'art de se connecter avec les animaux
          au-delà des mots. Grâce au travail de mes capacités et à mes années
          d'expérience, j'ai découvert qu'en établissant une connexion
          énergétique avec les animaux, il est possible de comprendre leurs
          ressentis, leurs émotions et leurs besoins, même s'ils ne peuvent pas
          s'exprimer verbalement. C'est une approche qui va au-delà des limites
          de la parole, en utilisant l'énergie animale comme moyen de
          communication. <br></br>
          <br></br>Je suis en mesure d'établir une communication profonde avec
          les animaux. Je peux vous aider à comprendre ce que votre compagnon
          souhaite vous dire, qu'il s'agisse d'un problème de santé, d'un
          comportement inhabituel ou simplement d'un désir de partager son amour
          et son affection avec vous. La communication animale ouvre une fenêtre
          sur le monde intérieur des animaux, nous permettant de mieux les
          comprendre et de renforcer notre lien avec eux.<br></br>
          <br></br> En plus de ma pratique en communication animale, j'ai
          récemment ajouté une corde supplémentaire à mon arc en me formant à la
          Biorésonance d'après Paul Schmidt. Cette méthode thérapeutique
          novatrice vise à rééquilibrer l'énergie dans le corps des animaux.
          Elle repose sur le principe que tout dans l'univers, y compris notre
          corps et celui des animaux, émet des fréquences spécifiques.<br></br>
          <br></br> La Biorésonance utilise des appareils spécialisés pour
          détecter et réharmoniser les déséquilibres énergétiques, favorisant
          ainsi la santé et le bien-être des animaux. La combinaison de la
          communication animale et de la Biorésonance me permet d'offrir une
          approche holistique pour aider les animaux à retrouver un équilibre
          physique, émotionnel et énergétique. <br></br>
          <br></br>En travaillant avec moi, vous pourrez non seulement
          comprendre les besoins profonds de votre animal grâce à la
          communication animale, mais vous pourrez également soutenir son
          processus de guérison naturelle en utilisant la Biorésonance. Mon but
          est de vous accompagner dans cette aventure extraordinaire pour tenter
          de résoudre des problèmes de comportement, à soulager des douleurs
          chroniques, à améliorer la santé globale de votre animal ou simplement
          à renforcer votre lien avec lui !<br></br>
          <br></br>
          <span>
            « Laissez vous porter vers un merveilleux voyage qu’est l'énergie
            animale et laissez-vous guider par le langage du cœur de nos
            compagnons les plus fidèles. Je suis là pour vous aider à entendre
            ce qu'ils ont à dire. »
          </span>
        </div>
        <div className="about-icones-reseaux">
          <Link to={"https://www.facebook.com/ComAnimaleMorgane"}>
            <FontAwesomeIcon icon={faFacebookF} size="4x" />
          </Link>
          <Link to={"https://www.instagram.com/comanimale.bioresonance/"}>
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </Link>
          <Link to={"mailto:morgane.faucompre@gmail.com"}>
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </Link>
        </div>
      </div>

      <p></p>
    </div>
  );
}

export default About;

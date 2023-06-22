import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Bioresonance() {
  return (
    <div className="page-bio">
      <Navbar></Navbar>
      <div
        className="acceuil-presentation-bio acceuil-presentation-content"
        id="bio"
      >
        <div className="text-container">
          <div className="h-container">
            <h2>LA BIORESONANCE</h2>
            <h3>se pratique en présentiel (21 - Côte d'or) ou à distance</h3>
            <p className="page-number" id="page-number">
              1
            </p>
          </div>
          <p>
            <span>Qu'est-ce que la biorésonance d'après Paul Schmidt ?</span>
            <br />
            <br /> La biorésonance est une méthode alternative dite "douce"
            utilisée pour accompagner différents problèmes de santé en stimulant
            les capacités d'autorégulation du corps. <br />
            <br />
            Ma méthode est basée sur les travaux de Paul Schmidt, un
            scientifique allemand reconnu pour avoir développé une approche
            novatrice de la bioénergie. J'utilise un appareil pour mesurer les
            fréquences vibratoires des tissus du corps et les rééquilibrer.{" "}
            <br />
            Elle repose sur le principe que tout, y compris notre corps et celui
            des animaux, émet des fréquences spécifiques. Lorsque ces fréquences
            sont perturbées par des déséquilibres énergétiques, des toxines ou
            des blocages, cela peut entraîner des problèmes de santé.
            <br /> <br />
            Comment ça fonctionne ? <br />
            <br />
            Lors de la séance de biorésonance, l'animal est installé dans un
            endroit calme et je dépose une couverture sur son dos. Un câble
            relis l'appareil. Des signaux électromagnétiques non-invasifs (ondes
            naturelles) sont envoyés et permettent de mesurer les fréquences
            vibratoires du corps. <br />
            <br />
            Grâce à cet appareil, je suis en mesure de détecter ces
            déséquilibres énergétiques et de les réharmoniser. La biorésonance
            utilise des appareils spécialisés qui émettent des fréquences
            spécifiques pour stimuler les processus naturels d'auto-guérison du
            corps. Cela permet de rétablir l'équilibre énergétique, de favoriser
            la santé et le bien-être de l'animal dans le but de retrouver
            l’homéostasie du corps.
          </p>
        </div>
        <div className="img-container"></div>
      </div>
      <div
        className="acceuil-presentation-bio acceuil-presentation-content"
        id="bio1"
      >
        <div className="img-container"></div>
        <div className="text-container">
          <div className="h-container">
            <h2>LA BIORESONANCE</h2>
            <h3>se pratique en présentiel (21 - Côte d'or) ou à distance</h3>
            <p className="page-number" id="page-number">
              2
            </p>
          </div>
          <p>
            Quel est le but de la biorésonance d'après Paul Schmidt en présence
            ?<br />
            <br /> La biorésonance est conçue pour aider à soulager les douleurs
            physiques, les maladies et les déséquilibres émotionnels. Elle agit
            en profondeur, en harmonisant l'énergie du corps et en stimulant ses
            propres capacités de guérison.
            <br /> <br />
            Les possibilités sont multiples :<br /> Réduction des douleurs
            physiques, amélioration de la digestion, réduction des allergies et
            amélioration du sommeil, et accompagner des pathologies lourdes
            ect... <br />
            <br />
            Il est possible (et recommandé !) également de soutenir l'organisme
            même quand tout va bien ! C'est une véritable alternative et qui ne
            provoque aucun effets secondaires indésirables. La biorésonance
            offre une solution non invasive et sans effet secondaire, permettant
            de soutenir le corps de votre animal dans son processus de guérison
            naturelle.
          </p>
        </div>
      </div>
      <div
        className="acceuil-presentation-bio acceuil-presentation-content"
        id="bio2"
      >
        <div className="text-container">
          <div className="h-container">
            <h2>LA BIORESONANCE</h2>
            <h3>se pratique en présentiel (21 - Côte d'or) ou à distance</h3>
            <p className="page-number" id="page-number">
              3
            </p>
          </div>
          <p>
            Qui peut en bénéficier ?<br />
            <br /> La biorésonance peut aider les animaux souffrant de
            différents types de maladies et de douleurs chroniques, ainsi que
            les personnes qui cherchent des méthodes alternatives pour améliorer
            leur bien-être.
            <br />
            <br /> Cette approche convient également aux propriétaire qui
            souhaite améliorer la forme de leur animal ou simplement pour être
            en meilleure santé.<br></br>
            N'hésitez pas à me contacter pour en savoir plus sur la biorésonance
            et pour discuter de la manière dont elle peut bénéficier à votre
            animal.
          </p>
          <Link to={"/biorésonance/rendez-vous"}>
            <button className="button-anim">PRENDRE RENDEZ-VOUS</button>
          </Link>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
}

export default Bioresonance;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import flower2 from "../utils/img/flower2.png";
import flower3 from "../utils/img/flower3.png";
import litleCom from "../utils/img/litle-img-com.jpg";
import litleBio from "../utils/img/litle-img-bio.JPG";
import litleRec from "../utils/img/litle-img-rec.jpg";
import litleOra from "../utils/img/litle-img-ora.JPG";
import avis1 from "../utils/img/avis1.jpg";
import avis2 from "../utils/img/avis2.jpg";
import avis3 from "../utils/img/avis3.jpg";
import imgContact from "../utils/img/img-contact.jpg";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { StateContext } from "../utils/context/injex";

function Acceuil() {
  const { anchor, setAnchor } = useContext(StateContext);

  useEffect(() => {
    if (anchor) {
      const anchorElement = document.getElementById(anchor);
      window.scrollTo({
        top: anchorElement.offsetTop,
        behavior: "smooth",
      });
      setAnchor(null);
    }
  }, [anchor, setAnchor]);

  return (
    <div className="acceuil">
      <Navbar></Navbar>
      <div className=" first-sight-container" id="first-sight">
        <div className="first-sight-content first-sight-left-content"></div>
        <div className="first-sight-content first-sight-right-content">
          <h1 className="hero first-text">ÉNERGIE ANIMALE</h1>
          <h1 className="garamond second-text">l'écoute animale</h1>
          <h1 className="seasons third-text">
            COMMUNICATION ANIMALE <br />
            ET
            <br /> BIORESONANCE
          </h1>
          <button
            className="hero"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            EN SAVOIR PLUS
          </button>
        </div>
      </div>

      <div className="second-sight">
        <img src={flower2} alt="flower" className="flower2" />
        {/* <img src={flower1} alt="flower" className="flower1" /> */}
        <img src={flower3} alt="flower" className="flower3" />

        <h2 className="first-text seasons">
          VOUS AIDER A COMPRENDRE VOTRE ANIMAL
        </h2>
        <p className="second-text garamond">
          Comment puis je vous aider ?<br /> Vous souhaitez lui transmettre un
          message ? Lui poser des questions ? Connaître le ressentie sur son
          état de santé physique et émotionnel ? Ce qu’il souhaiterait avoir
          dans sa vie ? Renforcer le lien avec lui ? Avoir des pistes sur des
          problèmes de comportement ? L’arrivé d’un nouveau congénère ? Ce qu’il
          lui plaît ou ce qu’il ne veut pas ? S’il est heureux ? Avoir son
          message ? Le préparer à un déménagement ou à un changement dans sa
          vie ? Connaître son passé ? Ce qu’il peut vous apporter ? Pourquoi
          a-t-il un comportement répétitif ? Retrouver votre animal égaré ?
          Accompagner l’énergie pour affronter des maux et des pathologies
          (biorésonance) ? Toutes les questions qui sont importantes pour vous
          peuvent être poser à votre animal. Je fais simplement l’intermédiaire.
          C’est à lui de décider ensuite de ce qu’il veut vous transmettre !
          <br />
          <br />
          <span>Morgane</span>
        </p>
        <FontAwesomeIcon
          className="second-sight-icon-down"
          icon={faChevronDown}
          size="3x"
          onClick={() => setAnchor("third-sight")}
        />
      </div>

      <div className="third-sight" id="third-sight">
        <div className="first-line">
          <div onClick={() => setAnchor("com")} className="acceuil-com">
            <img src={litleCom} alt="litleDog"></img>
            <h2>Communication Animale</h2>
            <p>
              Vous souhaitez que je fasse l'intermédiaire entre votre animal et
              vous ?
            </p>
          </div>
          <div onClick={() => setAnchor("bio")} className="acceuil-bio">
            <img src={litleBio} alt="appareilBioresonance"></img>
            <h2>Biorésonance Douce d'après Paul Schmidt</h2>
            <p>
              Vous souhaitez accompagner votre animal sur son énergie physique
              et émotionnelle ?
            </p>
          </div>
          <div onClick={() => setAnchor("rec")} className="acceuil-rec">
            <img src={litleRec} alt="outilsRecherche"></img>
            <h2>Recherche Animale</h2>
            <p>Votre animal s'est égaré ?</p>
          </div>
        </div>
        <div className="second-line">
          <div onClick={() => setAnchor("ora")} className="acceuil-ora">
            <img src={litleOra} alt="cartesOracle"></img>
            <h2>Lecture d'Oracle</h2>
            <p>
              Vous souhaitez un tirage de carte d'Oracle pour votre animal ?
            </p>
          </div>
        </div>
      </div>

      <div className="acceuil-presentation-container">
        <div
          className="acceuil-presentation-com acceuil-presentation-content"
          id="com"
        >
          <div className="img-container"></div>
          <div className="text-container">
            <div className="h-container">
              <h2>COMMUNICATION ANIMALE</h2>
              <h3>se pratique à distance</h3>
              <p className="page-number" id="page-number">
                1
              </p>
            </div>
            <p>
              La communication animale est une méthode de communication
              intuitive qui permet de comprendre les émotions, les sentiments,
              les besoins et les comportements des animaux. <br />
              <br />
              Cette méthode est basée sur une connexion émotionnelle et
              intuitive. Les séances de communication animale se déroulent à
              distance via une photo de l'animal. Pendant la séance, je me
              connecte intuitivement avec l'animal, en utilisant des techniques
              de relaxation et de méditation. <br />
              <br />
              Je reçois alors toutes sortent d'informations comme par exemple :
              les besoins de l'animal, ses émotions, son comportement, ses
              gènes/douleurs ect...
              <br /> Mon approche de la communication animale vise à renforcer
              les liens entre les humains et les animaux en établissant une
              connexion empathique profonde. J'aide également les propriétaires
              à résoudre des problèmes comportementaux, à transmettre ou
              recevoir des messages de leurs animaux, à comprendre les besoins
              de leur animal de compagnie, ce qui peut aider à améliorer leur
              qualité de vie.
            </p>
          </div>
        </div>
        <div
          id="com1"
          className="acceuil-presentation-com acceuil-presentation-content"
        >
          <div className="text-container">
            <div className="h-container">
              <h2>COMMUNICATION ANIMALE</h2>
              <h3>se pratique à distance</h3>
              <p className="page-number" id="page-number">
                2
              </p>
            </div>

            <p>
              Je pratique sur tout type d'animaux, mais vous devez être le
              gardien de cet animal (propriétaire) pour m'autoriser à
              communiquer avec lui. <br />
              <br />
              Après 5 ans d'expérience en communication animale, j'ai eu avoir
              la chance de travailler avec de nombreuses espèces animales, que
              je partage sur ma page Facebook. <br />
              <br />
              Je propose une approche empathique en vous aidant à mieux
              comprendre votre animal de compagnie et en vous accompagnant sur
              ce chemin.
            </p>
            <Link to={"/communication-animale"}>
              <button>PRENDRE RENDEZ-VOUS</button>
            </Link>
          </div>
          <div className="img-container"></div>
        </div>
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
              combinaison de techniques intuitives et énergétiques pour
              localiser et retrouver les animaux perdus. <br />
              <br />
              Je rentre en communication avec votre animal pour le rassurer, le
              guider et l'aider à retrouver son chemin pour rentrer chez lui.
              Grâce à ça, je peux vous communiquer ses messages et lui
              transmettre les vôtres. <br />
              <br />
              J'utilise ma capacité à me connecter intuitivement avec les
              animaux pour ressentir leur énergie et leur emplacement. En
              utilisant un pendule sur une carte géographique, je peux
              déterminer leur localisation approximative et délimiter une zone
              de recherche. <br />
              <br />
              J'utilise également des oracles pour me guider dans ma recherche.
              Mon objectif est de localiser rapidement et recevoir des indices,
              des images ou des sons qui permettrait de le retrouver.
            </p>
            <Link to={"/recherche-animale"}>
              <button>PRENDRE RENDEZ-VOUS</button>
            </Link>{" "}
          </div>
        </div>
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
              utilisée pour accompagner différents problèmes de santé en
              stimulant les capacités d'autorégulation du corps. <br />
              <br />
              Ma méthode est basée sur les travaux de Paul Schmidt, un
              scientifique allemand reconnu pour avoir développé une approche
              novatrice de la bioénergie. J'utilise un appareil pour mesurer les
              fréquences vibratoires des tissus du corps et les rééquilibrer.{" "}
              <br />
              <br />
              Comment ça fonctionne ? <br />
              <br />
              Lors de la séance de biorésonance, l'animal est installé dans un
              endroit calme et je dépose une couverture sur son dos. Un câble
              relis l'appareil. Des signaux électromagnétiques non-invasifs
              (ondes naturelles) sont envoyés et permet de mesurer les
              fréquences vibratoires du corps. <br />
              <br />
              Grâce à cet appareil programmé, je peux alors rééquilibrer ces
              fréquences et rétablir l'homéostasie du corps.
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
              Quel est le but de la biorésonance d'après Paul Schmidt en
              présence ?<br />
              <br /> La biorésonance est conçue pour aider à soulager les
              douleurs physiques, les maladies et les déséquilibres émotionnels.
              <br />
              <br />
              Les possibilités sont multiples :<br /> Réduction des douleurs
              physiques, amélioration de la digestion, réduction des allergies
              et amélioration du sommeil, et accompagner des pathologies lourdes
              ect... <br />
              Il est possible (et recommandé !) également de soutenir
              l'organisme même quand tout va bien ! C'est une véritable
              alternative et qui ne provoque aucun effets secondaires
              indésirables.
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
              les personnes qui cherchent des méthodes alternatives pour
              améliorer leur bien-être.
              <br />
              <br /> Cette approche convient également aux propriétaire qui
              souhaite améliorer la forme de leur animal ou simplement pour être
              en meilleure santé.
            </p>
            <Link to={"/biorésonance"}>
              <button>PRENDRE RENDEZ-VOUS</button>
            </Link>{" "}
          </div>
          <div className="img-container"></div>
        </div>
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
              demandé l'aide de mes guides au préalable pour obtenir des
              réponses. Il faut donc me communiquer plusieurs questions ainsi
              que la photo de votre animal. <br />
              <br />
              Grâce à cette technique, il est possible d'établir une
              communication différente avec les animaux, en interprétant les
              messages que les cartes nous offrent. Cela permet de répondre à
              leurs besoins sur différents aspects de leur vie, tels que la
              santé, la nutrition, les émotions, la relation avec leur
              propriétaire, leur environnement, etc.
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
              Grâce à sa simplicité et à la précision des résultats qu'elle
              permet d'obtenir une approche différente par rapport à la
              communication animale. En somme, la lecture d'Oracle pour les
              animaux est un outil puissant qui met en évidence les besoins
              profonds transmis par nos guides spirituels.
              <br />
              <br /> Elle peut vous aider à comprendre leur comportement, leur
              santé, leurs émotions, leur environnement et à améliorer leur
              qualité de vie. Elle est également complémentaire avec la
              communication animale car elle peut apporter d'autres informations
              que l'animal n'a pas ou ne connaît pas.
            </p>
            <Link to={"/lecture-oracle"}>
              <button>PRENDRE RENDEZ-VOUS</button>
            </Link>
          </div>
          <div className="img-container"></div>
        </div>
      </div>

      <div className="acceuil-rendez-vous" id="rdv">
        <div className="img-container"></div>
        <div className="text-container">
          <h2>PRENDRE RENDEZ VOUS POUR UNE SEANCE DE :</h2>
          <Link to={"/biorésonance"}>
            <p>BIORESONANCE</p>
          </Link>
          <Link to={"/communication-animale"}>
            <p>COMMUNICATION ANIMALE</p>
          </Link>
          <Link to={"/recherche-animale"}>
            <p>RECHERCHE ANIMALE</p>
          </Link>
          <Link to={"/lecture-oracle"}>
            <p>LECTURE D'ORACLE</p>
          </Link>
        </div>
      </div>

      <div className="avis-container" id="avis">
        <div className="avis">
          <img src={avis2} alt="poney"></img>
          <p>
            " Elle m'a aidé à mieux comprendre mon petit protégé. Il avait fort
            peur de certaines choses et la communication à aidé à montrer que
            j'étais là pour lui et que je me tracassais de lui et depuis je vois
            une différence de comportement. Elle fait un boulot formidable. je
            ne pourrais pas convaincre tout le monde mais c'est vraiment un
            travail qui mérite de l'attention surtout si vous voulez le meilleur
            pour votre animal et le comprendre au mieux. "
          </p>
          <p className="color">- CECILE GBT </p>
        </div>
        <div className="avis">
          <img src={avis3} alt="cheval"></img>
          <p>
            " Alors, que dire? <br></br>Tout simplement MERCI. Grâce à la
            communication animale, je comprends mieux le comportement de mon
            petit bébé Regalo.. <br />
            Je me posais tellement de questions suite a son comportement de ses
            dernières semaines et voilà que j'ai eu réponses à mes questions. Il
            y a du travail à faire maintenant pour aller de l'avant, pour
            l'aider et ainsi créer sce lien fusionelle même si nous sommes déjà
            très proches! Je l'aime tellement.. Merci beaucoup pour votre aide
            pour mieux le comprendre et aussi pour votre suivi et de vos
            conseils ! "
          </p>
          <p className="color">- SHARLENE ROSE </p>
        </div>
        <div className="avis">
          <img src={avis1} alt="chat"></img>
          <p>
            " Morgane est intervenue sur une situation un peu délicate entre mon
            chat adulte et le petit dernier, Nougat. <br />
            L'entente était vraiment délicate et le lendemain de la
            communication animale, Cerise a commencé à jouer avec le petit
            Nougat. De plus, elle qui a tendance à mordre, s'est bien calmée.
            c'est vraiment super d'avoir pu la rassurer et donner du sens à la
            présence de Nougat dans sa maison. <br />
            Je recommande vivement donc les services de Morgane "
          </p>
          <p className="color">- HERMAN ADELPHI </p>
        </div>
      </div>

      <div className="contact-container" id="contact">
        <img className="img-contact" src={imgContact} alt="bison"></img>
        <p className="contact-energie hero">
          ENERGIE<br></br> ANIMALE
        </p>
        <div className="contact-content">
          <div className="contact-infos">
            <h3>MORGANE FAUCOMPRE</h3>
            <p>
              N° de Téléphone
              <br />
              06.67.67.18.53
            </p>
            <p>
              Adresse Mail <br />
              morgane.faucompre@gmail.com
            </p>
          </div>
          <div className="contact-services">
            <h3>SERVICES</h3>
            <p>Biorésonance</p>
            <p>Communication Animale</p>
            <p>Recherche Animale</p>
            <p>Lecture d'Oracle</p>
          </div>
        </div>
        <div className="contact-icones-reseaux">
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
    </div>
  );
}

export default Acceuil;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import flower1 from "../utils/img/flower1.webp";
import flower2 from "../utils/img/flower2.webp";
import flower3 from "../utils/img/flower3.webp";
import flower5 from "../utils/img/flower5.webp";
import flower6 from "../utils/img/flower6.webp";
import flower7 from "../utils/img/flower7.webp";
import flower8 from "../utils/img/flower8.webp";
import flower9 from "../utils/img/flower9.webp";
import flower10 from "../utils/img/flower10.webp";
import papillon1 from "../utils/img/papillon1.webp";
import papillon2 from "../utils/img/papillon2.webp";

import avis1 from "../utils/img/avis1.webp";
import avis2 from "../utils/img/avis2.webp";
import avis3 from "../utils/img/avis3.webp";
import imgContact from "../utils/img/img-contact.webp";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../utils/context/injex";
import { Parallax } from "react-scroll-parallax";

function Acceuil() {
  const { anchor, setAnchor } = useContext(StateContext);

  const [logoScroll, setLogoScroll] = useState(null);
  const [bgImgScroll, setBgImgScroll] = useState(null);
  useEffect(() => {
    setLogoScroll(document.getElementById("logo-scroll"));
    setBgImgScroll(document.getElementById("bg-img-scroll"));
  }, []);

  useEffect(() => {
    if (logoScroll && bgImgScroll) {
      document.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
          logoScroll.style.transition = "opacity 1s";
          logoScroll.style.opacity = 0;
          setTimeout(() => {
            logoScroll.style.display = "none";
          }, 1000);
        }

        if (scrollY > 200) {
          bgImgScroll.style.transition = "opacity 1s";
          bgImgScroll.style.opacity = 0;
          bgImgScroll.style.display = "none";
          setTimeout(() => {
            logoScroll.style.display = "none";
          }, 1000);
        }
      });
    }
  }, [logoScroll, bgImgScroll]);

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
      <Parallax
        style={{ display: "flex" }}
        id="bg-img-scroll"
        startScroll={0}
        endScroll={400}
        scale={["1", "5"]}></Parallax>

      <div id="logo-scroll"></div>
      <div className=" first-sight-container" id="first-sight">
        <img
          src={papillon1}
          alt="papillon-decoration"
          className="papillon1 deco"
        />
        {/* sdfs */}
        {/* <div className="first-sight-content first-sight-left-content"></div> */}
        <div className="first-sight-content first-sight-right-content">
          <h2 className="hero first-text">
            ÉNERGIE ANIMALE
            <br />
            <span className="garamond second-text">l'écoute animale</span>
          </h2>
          {/* <h2 className="garamond second-text">l'écoute animale</h2> */}
          <h1 className="seasons third-text">
            COMMUNICATION ANIMALE <br />
            ET
            <br /> BIORESONANCE
          </h1>
          <button
            className="hero, button-anim"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }>
            EN SAVOIR PLUS
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "150vh" }}>
        <div className="second-sight">
          <img src={flower1} alt="flower-decoration" className="flower1 deco" />
          <img src={flower2} alt="flower-decoration" className="flower2 deco" />

          <h2 className="first-text seasons">
            VOUS AIDER A COMPRENDRE VOTRE ANIMAL
          </h2>
          <p className="second-text garamond">
            Comment puis je vous aider ?<br /> Vous souhaitez lui transmettre un
            message ? Lui poser des questions ? Connaître le ressentie sur son
            état de santé physique et émotionnel ? Ce qu’il souhaiterait avoir
            dans sa vie ? Renforcer le lien avec lui ? Avoir des pistes sur des
            problèmes de comportement ? L’arrivé d’un nouveau congénère ? Ce
            qu’il lui plaît ou ce qu’il ne veut pas ? S’il est heureux ? Avoir
            son message ? Le préparer à un déménagement ou à un changement dans
            sa vie ? Connaître son passé ? Ce qu’il peut vous apporter ?
            Pourquoi a-t-il un comportement répétitif ? Retrouver votre animal
            égaré ? Accompagner l’énergie pour affronter des maux et des
            pathologies (biorésonance) ? Toutes les questions qui sont
            importantes pour vous peuvent être poser à votre animal. Je fais
            simplement l’intermédiaire. C’est à lui de décider ensuite de ce
            qu’il veut vous transmettre !
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
          <img src={flower3} alt="flower-decoration" className="flower3 deco" />
          <img src={flower5} alt="flower-decoration" className="flower5 deco" />
          <img src={flower6} alt="flower-decoration" className="flower6 deco" />
          <img src={flower7} alt="flower-decoration" className="flower7 deco" />
          <img
            src={flower10}
            alt="flower-decoration"
            className="flower10 deco"
          />
          <div className="first-line">
            <div className="acceuil-com">
              <Link to={"/communication-animale"}>
                <div className="img-container img-container-com"></div>

                <h2>Communication Animale</h2>
                <p>
                  Vous souhaitez que je fasse l'intermédiaire entre votre animal
                  et vous ?
                </p>
              </Link>
            </div>

            <div className="acceuil-bio">
              <Link to={"/biorésonance"}>
                <div className="img-container img-container-bio"></div>
                <h2>Biorésonance Douce d'après Paul Schmidt</h2>
                <p>
                  Vous souhaitez accompagner votre animal sur son énergie
                  physique et émotionnelle ?
                </p>
              </Link>
            </div>
          </div>
          <div className="second-line">
            <div className="acceuil-rec">
              <Link to={"/recherche-animale"}>
                <div className="img-container img-container-rec"></div>
                <h2>Recherche Animale</h2>
                <p>Votre animal s'est égaré ?</p>
              </Link>
            </div>
            <div className="acceuil-ora">
              <Link to={"/lecture-oracle"}>
                <div className="img-container img-container-ora"></div>
                <h2>Lecture d'Oracle</h2>
                <p>
                  Vous souhaitez un tirage de carte d'Oracle pour votre animal ?
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="acceuil-rendez-vous" id="rdv">
          <div className="img-container"></div>
          <div className="text-container">
            <h2>PRENDRE RENDEZ VOUS POUR UNE SEANCE DE :</h2>
            <Link
              to={"/biorésonance/rendez-vous"}
              onClick={() => window.scrollTo(0, 0)}>
              <p>BIORESONANCE</p>
            </Link>
            <Link
              to={"/communication-animale/rendez-vous"}
              onClick={() => window.scrollTo(0, 0)}>
              <p>COMMUNICATION ANIMALE</p>
            </Link>
            <Link
              to={"/recherche-animale/rendez-vous"}
              onClick={() => window.scrollTo(0, 0)}>
              <p>RECHERCHE ANIMALE</p>
            </Link>
            <Link
              to={"/lecture-oracle/rendez-vous"}
              onClick={() => window.scrollTo(0, 0)}>
              <p>LECTURE D'ORACLE</p>
            </Link>
          </div>
        </div>
        <div className="avis-container" id="avis">
          <div className="avis">
            <img
              src={flower8}
              alt="flower-decoration"
              className="flower8 deco"
            />
            <img
              src={flower9}
              alt="flower-decoration"
              className="flower9 deco"
            />
            <img
              src={papillon2}
              alt="flower-decoration"
              className="papillon2 deco"
            />

            <img src={avis2} alt="poney"></img>
            <p>
              " Elle m'a aidé à mieux comprendre mon petit protégé. Il avait
              fort peur de certaines choses et la communication à aidé à montrer
              que j'étais là pour lui et que je me tracassais de lui et depuis
              je vois une différence de comportement. Elle fait un boulot
              formidable. je ne pourrais pas convaincre tout le monde mais c'est
              vraiment un travail qui mérite de l'attention surtout si vous
              voulez le meilleur pour votre animal et le comprendre au mieux. "
            </p>
            <p className="color">- CECILE GBT </p>
          </div>
          <div className="avis">
            <img src={avis3} alt="cheval"></img>
            <p>
              " Alors, que dire? <br></br>Tout simplement MERCI. Grâce à la
              communication animale, je comprends mieux le comportement de mon
              petit bébé Regalo.. <br />
              Je me posais tellement de questions suite a son comportement de
              ses dernières semaines et voilà que j'ai eu réponses à mes
              questions. Il y a du travail à faire maintenant pour aller de
              l'avant, pour l'aider et ainsi créer sce lien fusionelle même si
              nous sommes déjà très proches! Je l'aime tellement.. Merci
              beaucoup pour votre aide pour mieux le comprendre et aussi pour
              votre suivi et de vos conseils ! "
            </p>
            <p className="color">- SHARLENE ROSE </p>
          </div>
          <div className="avis">
            <img src={avis1} alt="chat"></img>
            <p>
              " Morgane est intervenue sur une situation un peu délicate entre
              mon chat adulte et le petit dernier, Nougat. <br />
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
          {/* <img className="img-contact" src={imgContact} alt="bison"></img> */}
          <p className="contact-energie">
            ENERGIE<br></br> ANIMALE
          </p>
          <div className="contact-content">
            <div className="contact-infos">
              <h3>MORGANE FAUCOMPRE</h3>
              <p>
                <span>N° de Téléphone</span>
                <br />
                06.67.67.18.53
              </p>
              <p>
                <span>Adresse Mail </span>
                <br />
                communiquer.animaux@gmail.com
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
        <div className="politic-link-container">
          <Link to={"/politique-de-confidentialité"}>
            <p>Politique de confidentialité</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;

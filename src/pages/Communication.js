import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar";

function Communication() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-com">
      <Navbar></Navbar>
      <div
        className="acceuil-presentation-com acceuil-presentation-content"
        id="com">
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
            La communication animale est une méthode de communication intuitive
            qui permet de comprendre les émotions, les sentiments, les besoins
            et les comportements des animaux. <br />
            <br />
            Cette méthode est basée sur une connexion émotionnelle et intuitive.
            Les séances de communication animale se déroulent à distance via une
            photo de l'animal. Pendant la séance, je me connecte intuitivement
            avec l'animal, en utilisant des techniques de relaxation et de
            méditation. <br />
            <br />
            Je reçois alors toutes sortent d'informations comme par exemple :
            les besoins de l'animal, ses émotions, son comportement, ses
            gènes/douleurs ect...
            <br /> Mon approche de la communication animale vise à renforcer les
            liens entre les humains et les animaux en établissant une connexion
            empathique profonde. J'aide également les propriétaires à résoudre
            des problèmes comportementaux, à transmettre ou recevoir des
            messages de leurs animaux, à comprendre les besoins de leur animal
            de compagnie, ce qui peut aider à améliorer leur qualité de vie.
          </p>
        </div>
      </div>
      <div
        id="com1"
        className="acceuil-presentation-com acceuil-presentation-content">
        <div className="text-container">
          <div className="h-container">
            <h2>COMMUNICATION ANIMALE</h2>
            <h3>se pratique à distance</h3>
            <p className="page-number" id="page-number">
              2
            </p>
          </div>

          <p>
            Je pratique sur tout type d'animaux, mais vous devez être le gardien
            de cet animal (propriétaire) pour m'autoriser à communiquer avec
            lui. <br />
            <br />
            Après 5 ans d'expérience en communication animale, j'ai eu la chance
            de travailler avec de nombreuses espèces animales, que je partage
            sur ma page Facebook. <br />
            <br />
            Je propose une approche empathique en vous aidant à mieux comprendre
            votre animal de compagnie et en vous accompagnant sur ce chemin.
          </p>
          <Link
            to={"/communication-animale/rendez-vous"}
            onClick={() => window.scrollTo(0, 0)}>
            <button className="button-anim">PRENDRE RENDEZ-VOUS</button>
          </Link>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
}

export default Communication;

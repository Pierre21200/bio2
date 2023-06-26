import { useState, useContext, useEffect } from "react";
import { StateContext } from "../../utils/context/injex";
import { verifForm } from "../../utils/verifFrom/index";
import {
  postDates,
  postBioInfos,
  postComInfos,
  postOraInfos,
  postRecInfos,
  getAllDates,
} from "../../utils/fetch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import flower5 from "../../utils/img/flower5.webp";

function Form({ bio, rec, ora, com }) {
  const { dataBio, dataRec, dataOra, dataCom, dates, setDates } =
    useContext(StateContext);

  const [showRecap, setShowRecap] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningMail, setWarningMail] = useState(false);

  const [file, setFile] = useState();

  useEffect(() => {
    getAllDates(setDates);
  }, [dataBio, dataCom, dataOra, dataRec, setDates]);

  // Calendar;

  function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  function isWednesday(date) {
    return date.getDay() === 3;
  }

  function handlePostBio(body, e) {
    e.preventDefault(e);
    if (verifForm(body) === true) {
      postBioInfos(body, bio);
      postDates(body);
      setShowRecap(true);
    } else if (verifForm(body) === "mail") {
      setWarningMail(true);
    } else {
      setWarning(true);
    }
  }

  function handlePostCom(body, e) {
    e.preventDefault(e);
    if (verifForm(body) && file) {
      postDates(body);

      postComInfos(body, file, (com = true));
      setShowRecap(true);
    } else {
      setWarning(true);
    }
  }
  function handlePostRec(body, e) {
    e.preventDefault(e);
    if (verifForm(body) && file) {
      postDates(body);

      postRecInfos(body, file, (rec = true));
      setShowRecap(true);
    } else {
      setWarning(true);
    }
  }
  function handlePostOra(body, e) {
    e.preventDefault(e);
    if (verifForm(body) && file) {
      postDates(body);
      postOraInfos(body, file, (ora = true));
      setShowRecap(true);
    } else {
      setWarning(true);
    }
  }

  const [bioInfosForm, setBioInfosForm] = useState({
    animalName: "",
    animalSpecies: "",
    ownerName: "",
    localisation: "",
    mail: "",
    why: "",
    date: "",
  });

  const [comInfosForm, setComInfosForm] = useState({
    animalName: "",
    ownerName: "",
    date: "",
    mail: "",
    why: "",
  });

  const [recInfosForm, setRecInfosForm] = useState({
    animalName: "",
    ownerName: "",
    localisation: "",
    why: "",
    date: "",
    mail: "",
  });

  const [oraInfosForm, setOraInfosForm] = useState({
    animalName: "",
    ownerName: "",
    why: "",
    date: "",
    mail: "",
  });

  if (bio && !showRecap) {
    return (
      <div className="contact-bio">
        {/* <img className="flower5" src={flower5} alt="flower"></img> */}
        <Navbar></Navbar>
        <div className="contact-presentation">
          <div className="header">
            <h2>LA BIORESONANCE</h2>
            <h3>Comment se déroule la séance</h3>
          </div>
          <p>
            Je pratique la biorésonance d’après Paul Schmidt en Cote d’Or (21)
            sur tout type d’animaux. Vous pouvez donc choisir le jour de la
            séance en fonction des disponibilité sur ce calendrier. J’ai besoin
            d’informations concernant les raisons de la prise de rendez vous et
            quelques informations sur la vie de votre animal pour pouvoir vous
            apporter une efficacité optimale le jour de la séance et perdre le
            moins de temps possible. Si vous habitez plus loin et que vous
            souhaitez que je me déplace, il est possible d’organiser une ou
            plusieurs journées avec d’autres animaux de votre secteur (minimum 3
            participants). Les frais de déplacement seront à ma charge.<br></br>
            Si vous êtes partant pour cette belle aventure, je vous invite à
            remplir ce formulaire !
          </p>
          <p>Tarif : 75 euros + frais de déplacement</p>
        </div>
        <form
          className="bioform"
          onSubmit={(e) => handlePostBio(bioInfosForm, e)}>
          <div className="form-line">
            <label htmlFor="nom-animal">
              Nom de l'animal
              <input
                type="texte"
                id="nom-animal"
                name="nom-animal"
                value={bioInfosForm.animalName}
                onChange={(e) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    animalName: e.target.value,
                  })
                }></input>
            </label>
            <label htmlFor="espace-animal">
              Espece de l'animal
              <input
                type="texte"
                id="espece-animal"
                name="espece-animal"
                value={bioInfosForm.animalSpecies}
                onChange={(e) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    animalSpecies: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <div className="form-line">
            <label htmlFor="nom-gardien">
              Nom du gardien
              <input
                type="texte"
                id="nom-gardien"
                name="nom-gardien"
                value={bioInfosForm.ownerName}
                onChange={(e) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    ownerName: e.target.value,
                  })
                }></input>
            </label>
            <label htmlFor="mail">
              Adresse <br className="cache"></br>Mail
              <input
                type="mail"
                id="mail"
                name="mail"
                value={bioInfosForm.mail}
                onChange={(e) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    mail: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <div className="form-line">
            <label htmlFor="rdv">
              Rendez-vous
              <DatePicker
                id="rdv"
                name="rdv"
                locale={fr}
                selected={bioInfosForm.date}
                onChange={(date) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    date: date,
                  })
                }
                dateFormat="dd/MM/yyyy"
                filterDate={(date) => isWeekend(date) || isWednesday(date)}
                placeholderText="Sélectionnez une date"
                excludeDates={dates}
              />
            </label>
            <label>
              Lieux/Adresse
              <input
                type="texte"
                id="lieu"
                name="lieu"
                value={bioInfosForm.localisation}
                onChange={(e) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    localisation: e.target.value,
                  })
                }></input>
            </label>
          </div>

          <label className="big-label">
            Pour quelles raisons souhaitez vous pratiquer la bioressonance ?
            <textarea
              type="text"
              id="why"
              name="why"
              value={bioInfosForm.why}
              onChange={(e) =>
                setBioInfosForm({ ...bioInfosForm, why: e.target.value })
              }></textarea>
          </label>
          <div
            className={`${
              warning ? "warning" : warningMail ? "mail-warning" : "advice"
            }`}>
            {warning
              ? "Tous les champs ne sont pas remplis"
              : warningMail
              ? "L'adresse mail ne semble pas correcte"
              : "Tous les champs sont requis"}
          </div>
          <div className="form-button-container">
            <button className="button-anim" type="submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    );
  } else if (com && !showRecap) {
    return (
      <div className="contact-com">
        {/* <img className="flower5" src={flower5} alt="flower"></img> */}

        <Navbar></Navbar>

        <div className="contact-presentation">
          <h2>La Communication Animale</h2>
          <p>
            Sans donner de détails pour que je sois le moins influencée
            possible, vous pouvez écrire les questions , les messages ou les
            interrogations que vous avez à propos de votre animal. Il est
            possible de communiquer avec tout type d’animaux ! Je pratique à
            distance, vous pouvez donc choisir le jour de la communication : Un
            jour où l’animal est au calme de préférence sans perturbation (
            éviter les journées où vous avez des invités, où vous faites une
            grande balade, où vous déménagez par exemple...). Je reste connectée
            toute la journée de la séance pour recevoir d'autres informations si
            l'animal le souhaite. Je rédige ensuite un compte rendu qui vous
            sera transmis en PDF sur votre adresse mail.<br></br>Si vous êtes
            partant pour cette belle aventure, je vous invite à remplir ce
            formulaire !
          </p>
          <p>Tarif : 50 euros</p>
        </div>
        <form
          className="comform"
          encType="multipart/from-data"
          onSubmit={(e) => handlePostCom(comInfosForm, e)}>
          <label className="big-label-picture">
            Photo récente
            <input
              className="input-file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="image"></input>
            <div className="false-input-file">Choisir un fichier</div>
          </label>
          <div className="form-line">
            <label htmlFor="nom-animal">
              Nom de l'animal&nbsp;
              <input
                type="texte"
                id="nom-animal"
                name="nom-animal"
                value={comInfosForm.animalName}
                onChange={(e) =>
                  setComInfosForm({
                    ...comInfosForm,
                    animalName: e.target.value,
                  })
                }></input>
            </label>
            <label htmlFor="nom-gardien">
              Nom du gardien&nbsp;
              <input
                type="texte"
                id="nom-gardien"
                name="nom-gardien"
                value={comInfosForm.ownerName}
                onChange={(e) =>
                  setComInfosForm({
                    ...comInfosForm,
                    ownerName: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <div className="form-line">
            <label className="label-datepicker">
              Rendez-<br className="cache"></br>vous
              <DatePicker
                locale={fr}
                selected={comInfosForm.date}
                onChange={(date) =>
                  setComInfosForm({
                    ...comInfosForm,
                    date: date,
                  })
                }
                dateFormat="dd/MM/yyyy"
                filterDate={(date) => isWeekend(date) || isWednesday(date)}
                placeholderText="Sélectionnez une date"
                excludeDates={dates}
              />
            </label>
            <label htmlFor="mail">
              Adresse Mail&nbsp;
              <input
                type="texte"
                id="mail"
                name="mail"
                value={comInfosForm.mail}
                onChange={(e) =>
                  setComInfosForm({
                    ...comInfosForm,
                    mail: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <label className="big-label">
            Pour quelles raisons souhaitez pratiquer la communication animale ?
            <textarea
              type="texte"
              id="why"
              name="why"
              value={comInfosForm.why}
              onChange={(e) =>
                setComInfosForm({ ...comInfosForm, why: e.target.value })
              }></textarea>
          </label>
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>{" "}
          <div className="form-button-container">
            <button className="button-anim" type="submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    );
  } else if (rec && !showRecap) {
    return (
      <div className="contact-rec">
        {/* <img className="flower5" src={flower5} alt="flower"></img> */}

        <Navbar></Navbar>

        <div className="contact-presentation">
          <h2>La Recherche Animale</h2>
          <p>
            Je pratique à distance et sur tout type d’animaux ! Pendant cette
            séance j’utilise mon pendule, mes oracles et une carte imprimée du
            lieu où l’animal à disparu. Je communique également avec lui pour
            avoir toutes les informations possibles. Je reste connectée toute la
            journée de la séance pour recevoir d'autres informations si l'animal
            le souhaite. Je rédige ensuite un compte rendu contenant les détails
            que j’ai pu recevoir pour le retrouver. Ce document vous sera
            transmis rapidement en PDF sur votre adresse mail.<br></br>
            Si vous souhaitez que je vous aide à retrouver votre animal égaré,
            je vous laisse remplir le formulaire.
          </p>
          <p>Tarif : 50 euros</p>
        </div>
        <form
          className="recform"
          encType="multipart/from-data"
          onSubmit={(e) => handlePostRec(recInfosForm, e)}>
          <div className="form-line">
            <label>
              Photo récente
              <input
                className="input-file"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                name="image"></input>
              <div className="false-input-file">Choisir un fichier</div>
            </label>

            <label htmlFor="nom-animal">
              Nom de l'animal&nbsp;
              <input
                type="texte"
                id="nom-animal"
                name="nom-animal"
                value={recInfosForm.animalName}
                onChange={(e) =>
                  setRecInfosForm({
                    ...recInfosForm,
                    animalName: e.target.value,
                  })
                }></input>{" "}
            </label>
          </div>

          <div className="form-line">
            {" "}
            <label htmlFor="nom-gardien">
              Nom du gardien&nbsp;
              <input
                type="texte"
                id="nom-gardien"
                name="nom-gardien"
                value={recInfosForm.ownerName}
                onChange={(e) =>
                  setRecInfosForm({
                    ...recInfosForm,
                    ownerName: e.target.value,
                  })
                }></input>
            </label>
            <label htmlFor="localisation">
              Lieu de vie de l'animal&nbsp;
              <input
                type="textearea"
                id="localisation"
                name="localisation"
                value={recInfosForm.localisation}
                onChange={(e) =>
                  setRecInfosForm({
                    ...recInfosForm,
                    localisation: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <div className="form-line">
            <label className="label-datepicker">
              Rendez-<br className="cache"></br>vous
              <DatePicker
                locale={fr}
                selected={recInfosForm.date}
                onChange={(date) =>
                  setRecInfosForm({
                    ...recInfosForm,
                    date: date,
                  })
                }
                dateFormat="dd/MM/yyyy"
                filterDate={(date) => isWeekend(date) || isWednesday(date)}
                placeholderText="Sélectionnez une date"
                excludeDates={dates}
              />
            </label>
            <label className="labelmail" htmlFor="mail">
              Adresse Mail&nbsp;
              <input
                type="texte"
                id="mail"
                name="mail"
                value={recInfosForm.mail}
                onChange={(e) =>
                  setRecInfosForm({
                    ...recInfosForm,
                    mail: e.target.value,
                  })
                }></input>
            </label>
          </div>

          <label className="big-label">
            Des précisions à me donner et un message a lui transmettre ?{" "}
            <textarea
              type="texte"
              id="why"
              name="why"
              value={recInfosForm.why}
              onChange={(e) =>
                setRecInfosForm({ ...recInfosForm, why: e.target.value })
              }></textarea>
          </label>
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>
          <div className="form-button-container">
            <button className="button-anim" type="submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    );
  } else if (ora && !showRecap) {
    return (
      <div className="contact-ora">
        {/* <img className="flower5" src={flower5} alt="flower"></img> */}

        <Navbar></Navbar>

        <div className="contact-presentation">
          <h2>
            La Lecture d<span>'</span>Oracle
          </h2>
          <p>
            Sans donner de détails pour que je sois le moins influencée
            possible, vous pouvez écrire jusqu’à 3 questions ou interrogations
            que vous avez à propos de votre animal. Je pratique à distance, vous
            pouvez donc choisir le jour de la communication. Je vous transmet
            ensuite une photo des cartes tirées, une belle explication de chaque
            carte et une réponse pour chacune de vos questions sur votre adresse
            mail.
            <br></br>Si vous êtes partant pour cette belle aventure, je vous
            invite à remplir ce formulaire !
          </p>
          <p>Tarif : 15 euros</p>
        </div>
        <form
          className="oraform"
          encType="multipart/from-data"
          onSubmit={(e) => handlePostOra(oraInfosForm, e)}>
          <label className="big-label-picture">
            Photo récente
            <input
              className="input-file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="image"></input>
            <div className="false-input-file">Choisir un fichier</div>
          </label>
          <div className="form-line">
            {" "}
            <label htmlFor="nom-animal">
              Nom de l'animal&nbsp;
              <input
                type="texte"
                id="nom-animal"
                name="nom-animal"
                value={oraInfosForm.animalName}
                onChange={(e) =>
                  setOraInfosForm({
                    ...oraInfosForm,
                    animalName: e.target.value,
                  })
                }></input>{" "}
            </label>
            <label htmlFor="nom-gardien">
              Nom du gardien&nbsp;
              <input
                type="texte"
                id="nom-gardien"
                name="nom-gardien"
                value={oraInfosForm.ownerName}
                onChange={(e) =>
                  setOraInfosForm({
                    ...oraInfosForm,
                    ownerName: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <div className="form-line">
            {" "}
            <label className="label-datepicker">
              Rendez-<br className="cache"></br>vous
              <DatePicker
                locale={fr}
                selected={oraInfosForm.date}
                onChange={(date) =>
                  setOraInfosForm({
                    ...oraInfosForm,
                    date: date,
                  })
                }
                dateFormat="dd/MM/yyyy"
                filterDate={(date) => isWeekend(date) || isWednesday(date)}
                placeholderText="Sélectionnez une date"
                excludeDates={dates}
              />
            </label>
            <label htmlFor="mail">
              Adresse Mail&nbsp;
              <input
                type="texte"
                id="mail"
                name="mail"
                value={oraInfosForm.mail}
                onChange={(e) =>
                  setOraInfosForm({
                    ...oraInfosForm,
                    mail: e.target.value,
                  })
                }></input>
            </label>
          </div>
          <label className="big-label">
            Quels sont les questions pour lesquelles vous souhaitez obtenir des
            réponses ?
            <textarea
              type="texte"
              id="why"
              name="why"
              value={oraInfosForm.why}
              onChange={(e) =>
                setOraInfosForm({ ...oraInfosForm, why: e.target.value })
              }></textarea>
          </label>{" "}
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>
          <div className="form-button-container">
            <button className="button-anim" type="submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    );
  } else if (showRecap) {
    return (
      <div className="confirmation">
        <Navbar></Navbar>
        Vous êtes partis pour une belle aventure ! <br></br>
        <br></br>
        Je vous invite maintenant à patientez jusqu'à ce que je valide votre
        formulaire. <br></br>Un mail de finalisation vous permettra de procéder
        au réglement (Virement bancaire ou Paypal). <br></br> <br></br>Si vous
        avez besoin, n'hésitez pas à me contacter sur ma page Facebook,
        Instagram, ou par Mail.
        <br />A bientôt !
        <div className="confirmation-icones-reseaux">
          <Link to={"https://www.facebook.com/ComAnimaleMorgane"}>
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </Link>
          <Link to={"https://www.instagram.com/comanimale.bioresonance/"}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link to={"mailto:morgane.faucompre@gmail.com"}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        </div>
        <div className="politic-link-container">
          <Link to={"/politique-de-confidentialité"}>
            <p>Politique de confidentialité</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Form;

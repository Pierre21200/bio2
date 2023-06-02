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
import flower5 from "../../utils/img/flower5.png";

function Form({ bio, rec, ora, com }) {
  const { dataBio, dataRec, dataOra, dataCom, dates, setDates } =
    useContext(StateContext);

  const [showRecap, setShowRecap] = useState(false);
  const [warning, setWarning] = useState(false);
  const [file, setFile] = useState();

  // useEffect(() => {
  //   fetchDatas(setDataBio, setDataCom, setDataOra, setDataRec, setDatas);
  // }, [setDataBio, setDataCom, setDataOra, setDataRec]);

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
    if (verifForm(body)) {
      postBioInfos(body, bio);
      postDates(body);
      setShowRecap(true);
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
        <img className="flower5" src={flower5} alt="flower"></img>
        <Navbar></Navbar>
        <div className="contact-presentation">
          <div className="header">
            <h2>LA BIORESONANCE</h2>
            <h3>Comment se déroule la séance</h3>
          </div>
          <p>
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout.{" "}
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout.
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout.{" "}
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout.
          </p>
          <p>Tarif : 1000 euros</p>
        </div>
        <form
          className="bioform"
          onSubmit={(e) => handlePostBio(bioInfosForm, e)}
        >
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
                }
              ></input>
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
                }
              ></input>
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
                }
              ></input>
            </label>
            <label htmlFor="mail">
              Adresse <br className="cache"></br>Mail
              <input
                type="texte"
                id="mail"
                name="mail"
                value={bioInfosForm.mail}
                onChange={(e) =>
                  setBioInfosForm({
                    ...bioInfosForm,
                    mail: e.target.value,
                  })
                }
              ></input>
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
                }
              ></input>
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
              }
            ></textarea>
          </label>
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>
          <div className="form-button-container">
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
    );
  } else if (com && !showRecap) {
    return (
      <div className="contact-com">
        <img className="flower5" src={flower5} alt="flower"></img>

        <Navbar></Navbar>

        <div className="contact-presentation">
          <h2>La Communication Animale</h2>
          <p>
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout
          </p>
        </div>
        <form
          className="comform"
          encType="multipart/from-data"
          onSubmit={(e) => handlePostCom(comInfosForm, e)}
        >
          <label className="big-label-picture">
            Photo récente
            <input
              className="input-file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="image"
            ></input>
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
                }
              ></input>
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
                }
              ></input>
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
                }
              ></input>
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
              }
            ></textarea>
          </label>
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>{" "}
          <div className="form-button-container">
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
    );
  } else if (rec && !showRecap) {
    return (
      <div className="contact-rec">
        <img className="flower5" src={flower5} alt="flower"></img>

        <Navbar></Navbar>

        <div className="contact-presentation">
          <h2>La Recherche Animale</h2>
          <p>
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout
          </p>
        </div>
        <form
          className="recform"
          encType="multipart/from-data"
          onSubmit={(e) => handlePostRec(recInfosForm, e)}
        >
          <div className="form-line">
            <label>
              Photo récente
              <input
                className="input-file"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                name="image"
              ></input>
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
                }
              ></input>{" "}
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
                }
              ></input>
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
                }
              ></input>
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
                }
              ></input>
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
              }
            ></textarea>
          </label>
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>
          <div className="form-button-container">
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
    );
  } else if (ora && !showRecap) {
    return (
      <div className="contact-ora">
        <img className="flower5" src={flower5} alt="flower"></img>

        <Navbar></Navbar>

        <div className="contact-presentation">
          <h2>La Recherche Animale</h2>
          <p>
            Paragraphe du déroulé de la séance, le tarif, la réservation, la
            date, du retour mail, du paiement et de la confirmation, du retour
            de ta part et de ton bilan etc Bien rassuré le client sur tout
          </p>
        </div>
        <form
          className="oraform"
          encType="multipart/from-data"
          onSubmit={(e) => handlePostOra(oraInfosForm, e)}
        >
          <label className="big-label-picture">
            Photo récente
            <input
              className="input-file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="image"
            ></input>
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
                }
              ></input>{" "}
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
                }
              ></input>
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
                }
              ></input>
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
              }
            ></textarea>
          </label>{" "}
          <div className={` ${warning ? "warning" : "advice"}`}>
            {warning
              ? "Tout les champs ne sont pas remplis"
              : "Tous les champs sont requis"}
          </div>
          <div className="form-button-container">
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
    );
  } else if (showRecap) {
    return (
      <div className="confirmation">
        <Navbar></Navbar>
        Votre demande de rendez-vous a bien été prise un compte. <br />
        Un email de confirmation vous sera envoyé.
        <br />
        Si vous avez besoin, n'hésitez pas à me contacter sur ma page Facebook,
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
      </div>
    );
  }
}

export default Form;

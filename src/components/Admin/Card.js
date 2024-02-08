import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { changePastAppointment } from "../../utils/fetch";
// import { changeRdv, changePay, changePastAppointment } from "../../utils/fetch";

function Card({
  category,
  item,
  setModalActive,
  modalActive,
  handleDelete,
  handleConfirmedRdv,
  handleConfirmedPay,
  confirmed,
}) {
  const [changingRdv, setChangingRdv] = useState(null);
  const [changingPay, setChangingPay] = useState(null);
  const [changingPastAppointment, setChangingPastAppointment] = useState(null);

  useEffect(() => {
    setChangingRdv(item.confirmed);
    setChangingPay(item.confirmedPaiement);
    setChangingPastAppointment(item.pastAppointment);
  }, [confirmed, item.confirmed, item.confirmedPaiement, item.pastAppointment]);

  function convertDate(dateString) {
    const daysOfWeek = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    const monthsOfYear = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = ("0" + date.getDate()).slice(-2);
    const monthOfYear = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek} ${dayOfMonth} ${monthOfYear} ${year}`;
  }
  function handleConfirmedPastAppointment(item) {
    changePastAppointment(item);
    setChangingPastAppointment(!changingPastAppointment);
  }

  if (category === "bio") {
    return (
      <div>
        {/* {modalConfirmed}
        {modalConfirmedPaiement} */}
        <div
          className={`card ${modalActive ? "flou" : ""} ${
            confirmed ? "1" : "2"
          }`}>
          <FontAwesomeIcon
            onClick={() => handleDelete(item)}
            className="icon-delete"
            size="2xl"
            icon={faTrashAlt}
          />

          <div className="card-button-container">
            <button
              className={` ${changingRdv ? "off-locked" : "on"}`}
              onClick={() =>
                !changingPay && !changingRdv ? handleConfirmedRdv(item) : null
              }>
              {changingRdv
                ? "Informations Confirmées"
                : "Confirmez Informations"}
            </button>
            <div
              className={` ${changingRdv ? "progression-done" : ""} ${
                changingPay ? "" : ""
              } progression first-progression`}></div>
            <button
              className={` ${!changingRdv ? "on-locked" : ""}
            ${changingRdv && !changingPay ? "on" : ""}
            ${changingPay ? "off-locked" : ""}`}
              onClick={() =>
                changingRdv && !changingPay ? handleConfirmedPay(item) : null
              }>
              {changingPay ? "Paiement Confirmé" : "Confirmez Paiement"}
            </button>
            <div
              className={` ${
                changingPay ? "progression-done" : ""
              } progression first-progression`}></div>
            <button
              className={` ${
                changingPay && !changingPastAppointment ? "on" : ""
              }
            ${!changingPay ? "on-locked" : ""}
            ${changingPastAppointment ? "special" : ""}`}
              onClick={() =>
                changingRdv && changingPay
                  ? handleConfirmedPastAppointment(item)
                  : null
              }>
              {changingPastAppointment
                ? "Désarchivez Rendez-vous"
                : "Archivez Rendez-vous"}
            </button>
          </div>

          <div className="card-line">
            <div className="card-content">
              <strong>Nom de l'animal</strong>
              <p>{item.animalName}</p>
            </div>
            <div className="card-content">
              <strong>Espèce de l'animal</strong> <p>{item.animalSpecies}</p>
            </div>
          </div>
          <div className="card-line">
            <div className="card-content">
              <strong>Nom du gardien </strong> <p>{item.ownerName}</p>
            </div>

            <div className="card-content">
              <strong>Lieux/Adresse </strong>
              <p>{item.localisation}</p>
            </div>
          </div>
          <div className="card-line">
            <div className="card-content">
              <strong>Rendez-vous </strong>
              <p> {convertDate(item.date)}</p>
            </div>
            <div className="card-content">
              <strong>Adresse Mail </strong> <p>{item.mail}</p>
            </div>
          </div>
          <div className="card-content big-div">
            <strong>
              Pour quelles raisons souhaitez-vous pratiquer la biorésonnance ?
            </strong>
            <p> {item.why}</p>
          </div>
          <div className="trait"></div>
        </div>
      </div>
    );
  } else if (category === "com") {
    return (
      <div>
        <div className={`card ${modalActive ? "flou" : ""}`}>
          <FontAwesomeIcon
            onClick={() => handleDelete(item)}
            className="icon-delete"
            size="2xl"
            icon={faTrashAlt}
          />
          <div className="card-button-container">
            <button
              className={` ${changingRdv ? "off-locked" : "on"}`}
              onClick={() =>
                !changingPay && !changingRdv ? handleConfirmedRdv(item) : null
              }>
              {changingRdv
                ? "Informations Confirmées"
                : "Confirmez Informations"}
            </button>
            <div
              className={` ${changingRdv ? "progression-done" : ""} ${
                changingPay ? "" : ""
              } progression first-progression`}></div>
            <button
              className={` ${!changingRdv ? "on-locked" : ""}
            ${changingRdv && !changingPay ? "on" : ""}
            ${changingPay ? "off-locked" : ""}`}
              onClick={() =>
                changingRdv && !changingPay ? handleConfirmedPay(item) : null
              }>
              {changingPay ? "Paiement Confirmé" : "Confirmez Paiement"}
            </button>
            <div
              className={` ${
                changingPay ? "progression-done" : ""
              } progression first-progression`}></div>
            <button
              className={` ${
                changingPay && !changingPastAppointment ? "on" : ""
              }
            ${!changingPay ? "on-locked" : ""}
            ${changingPastAppointment ? "special" : ""}`}
              onClick={() =>
                changingRdv && changingPay
                  ? handleConfirmedPastAppointment(item)
                  : null
              }>
              {changingPastAppointment
                ? "Désarchivez Rendez-vous"
                : "Archivez Rendez-vous"}
            </button>
          </div>
          <div className="header-card-admin">
            <div className="img-container">
              {/* <img src="http://bioback.herokuapp.com/images/20230827_095508.jpg1693123305418.jpg"></img> */}
              <a href={item.imageUrl}>
                <img src={item.imageUrl} alt="" />
              </a>
            </div>
            <div className="header-content">
              <div className="card-content">
                <strong>Nom de l'animal</strong> <p>{item.animalName}</p>
              </div>
              <div className="card-content">
                <strong>Nom du gardien</strong> <p>{item.ownerName}</p>
              </div>
            </div>
          </div>
          <div className="card-line">
            <div className="card-content">
              <strong>Rendez-vous</strong> <p>{convertDate(item.date)}</p>
            </div>
            <div className="card-content">
              <strong>Adresse Mail</strong> <p>{item.mail}</p>
            </div>
          </div>
          <div className="card-content big-div">
            <strong>
              Pour quelles raisons souhaitez-vous pratiquer la communication
              animale ?
            </strong>
            <p>{item.why}</p>
          </div>
          <div className="trait"></div>
        </div>
      </div>
    );
  } else if (category === "rec") {
    return (
      <div>
        {/* {modalConfirmed}
        {modalConfirmedPaiement} */}
        <div className={`card ${modalActive ? "flou" : ""}`}>
          <FontAwesomeIcon
            onClick={() => handleDelete(item)}
            className="icon-delete"
            size="2xl"
            icon={faTrashAlt}
          />{" "}
          {/* {modalConfirmed} */}
          <div className="card-button-container">
            <button
              className={` ${changingRdv ? "off-locked" : "on"}`}
              onClick={() =>
                !changingPay && !changingRdv ? handleConfirmedRdv(item) : null
              }>
              {changingRdv
                ? "Informations Confirmées"
                : "Confirmez Informations"}
            </button>
            <div
              className={` ${changingRdv ? "progression-done" : ""} ${
                changingPay ? "" : ""
              } progression first-progression`}></div>
            <button
              className={` ${!changingRdv ? "on-locked" : ""}
            ${changingRdv && !changingPay ? "on" : ""}
            ${changingPay ? "off-locked" : ""}`}
              onClick={() =>
                changingRdv && !changingPay ? handleConfirmedPay(item) : null
              }>
              {changingPay ? "Paiement Confirmé" : "Confirmez Paiement"}
            </button>
            <div
              className={` ${
                changingPay ? "progression-done" : ""
              } progression first-progression`}></div>
            <button
              className={` ${
                changingPay && !changingPastAppointment ? "on" : ""
              }
            ${!changingPay ? "on-locked" : ""}
            ${changingPastAppointment ? "special" : ""}`}
              onClick={() =>
                changingRdv && changingPay
                  ? handleConfirmedPastAppointment(item)
                  : null
              }>
              {changingPastAppointment
                ? "Désarchivez Rendez-vous"
                : "Archivez Rendez-vous"}
            </button>
          </div>
          <div className="header-card-admin">
            <div className="img-container">
              <a href={item.imageUrl}>
                <img src={item.imageUrl} alt=""></img>
              </a>
            </div>
            <div className="header-content">
              <div className="card-content">
                <strong>Nom de l'animal</strong> <p>{item.animalName}</p>
              </div>
              <div className="card-content">
                <strong>Nom du gardien</strong> <p>{item.ownerName}</p>
              </div>
            </div>
          </div>
          <div className="card-content big-div">
            <strong>
              Lieux de vie de l'animal et dernier endroit ou il a été vu
            </strong>
            <p>{item.localisation}</p>
          </div>
          <div className="card-content big-div">
            <strong>Avez-vous un message à lui transmettre ?</strong>
            <p>{item.why}</p>
          </div>
          <div className="card-line">
            <div className="card-content">
              <strong>Rendez-vous </strong> <p>{convertDate(item.date)}</p>
            </div>
            <div className="card-content">
              <strong>Adresse Mail </strong> <p>{item.mail}</p>
            </div>
          </div>
          <div className="trait"></div>
        </div>
      </div>
    );
  } else if (category === "ora") {
    return (
      <div>
        {/* {modalConfirmed}
        {modalConfirmedPaiement} */}
        <div className={`card ${modalActive ? "flou" : ""}`}>
          <FontAwesomeIcon
            onClick={() => handleDelete(item)}
            className="icon-delete"
            size="2xl"
            icon={faTrashAlt}
          />
          {/* {modalConfirmed} */}
          <div className="card-button-container">
            <button
              className={` ${changingRdv ? "off-locked" : "on"}`}
              onClick={() =>
                !changingPay && !changingRdv ? handleConfirmedRdv(item) : null
              }>
              {changingRdv
                ? "Informations Confirmées"
                : "Confirmez Informations"}
            </button>
            <div
              className={` ${changingRdv ? "progression-done" : ""} ${
                changingPay ? "" : ""
              } progression first-progression`}></div>
            <button
              className={` ${!changingRdv ? "on-locked" : ""}
            ${changingRdv && !changingPay ? "on" : ""}
            ${changingPay ? "off-locked" : ""}`}
              onClick={() =>
                changingRdv && !changingPay ? handleConfirmedPay(item) : null
              }>
              {changingPay ? "Paiement Confirmé" : "Confirmez Paiement"}
            </button>
            <div
              className={` ${
                changingPay ? "progression-done" : ""
              } progression first-progression`}></div>
            <button
              className={` ${
                changingPay && !changingPastAppointment ? "on" : ""
              }
            ${!changingPay ? "on-locked" : ""}
            ${changingPastAppointment ? "special" : ""}`}
              onClick={() =>
                changingRdv && changingPay
                  ? handleConfirmedPastAppointment(item)
                  : null
              }>
              {changingPastAppointment
                ? "Désarchivez Rendez-vous"
                : "Archivez Rendez-vous"}
            </button>
          </div>
          <div className="header-card-admin">
            <div className="img-container">
              <img src={item.imageUrl} alt=""></img>
            </div>
            <div className="header-content">
              <div className="card-content">
                <strong>Nom de l'animal</strong> <p>{item.animalName}</p>
              </div>
              <div className="card-content">
                <strong>Nom du gardien</strong> <p>{item.ownerName}</p>
              </div>
            </div>
          </div>
          <div className="card-content big-div">
            <strong>
              Quelles sont les qestions pour lesquelles vous souhaitez obtenir
              des réponses ?
            </strong>
            <p> {item.why}</p>
          </div>
          <div className="card-line">
            <div className="card-content">
              <strong>Rendez-vous </strong> <p>{convertDate(item.date)}</p>
            </div>
            <div className="card-content">
              <strong>Adresse Mail </strong> <p>{item.mail}</p>
            </div>
          </div>
          <div className="trait"></div>
        </div>
      </div>
    );
  }
}

export default Card;

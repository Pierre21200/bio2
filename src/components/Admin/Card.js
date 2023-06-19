import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { changeRdv } from "../../utils/fetch";

function Card({ category, item, modalActive, handleDelete }) {
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

  if (category === "bio") {
    return (
      <div className={`card ${modalActive ? "flou" : ""}`}>
        <FontAwesomeIcon
          onClick={() => handleDelete(item)}
          className="icon-delete"
          size="2xl"
          icon={faTrashAlt}
        />
        <button onClick={() => changeRdv(item)}>
          {item.confirmed ? "Annuler Rendez-vous" : "Confirmez Rendez-vous"}
        </button>
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
    );
  } else if (category === "com") {
    return (
      <div className={`card ${modalActive ? "flou" : ""}`}>
        <FontAwesomeIcon
          onClick={() => handleDelete(item)}
          className="icon-delete"
          size="2xl"
          icon={faTrashAlt}
        />
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
    );
  } else if (category === "rec") {
    return (
      <div className={`card ${modalActive ? "flou" : ""}`}>
        <FontAwesomeIcon
          onClick={() => handleDelete(item)}
          className="icon-delete"
          size="2xl"
          icon={faTrashAlt}
        />
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
    );
  } else if (category === "ora") {
    return (
      <div className={`card ${modalActive ? "flou" : ""}`}>
        <FontAwesomeIcon
          onClick={() => handleDelete(item)}
          className="icon-delete"
          size="2xl"
          icon={faTrashAlt}
        />{" "}
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
            Quelles sont les qestions pour lesquelles vous souhaitez obtenir des
            réponses ?
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
    );
  }
}

export default Card;

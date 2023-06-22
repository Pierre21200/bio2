import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { StateContext } from "../utils/context/injex";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({
  admin,
  filter,
  setFilter,
  setShowCalendar,
  modalActive,
  setSubFilter,
  subFilter,
}) {
  const { setAnchor } = useContext(StateContext);
  const [checkInfo, setCheckInfo] = useState(false);
  const [checkPay, setCheckPay] = useState(false);
  const [checkArc, setCheckArc] = useState(false);

  function setFilterAndCalendar(filter) {
    setFilter(filter);
    setShowCalendar(false);
  }

  function handleCalendar() {
    setFilter("calendar");
    setShowCalendar(true);
  }

  function goToAnchor(anchor) {
    setAnchor(anchor);
  }
  function handleDropdown() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.visibility === "hidden") {
      navbar.style.visibility = "visible";
    } else {
      navbar.style.visibility = "hidden";
    }
  }

  function handleCheck(data) {
    if (data === "infos") {
      setCheckInfo(true);
      setCheckArc(false);
      setCheckPay(false);
      setSubFilter("infos");
    } else if (data === "paiement") {
      setCheckInfo(false);
      setCheckArc(false);
      setCheckPay(true);
      setSubFilter("paiement");
    } else if (data === "archive") {
      setCheckInfo(false);
      setCheckArc(true);
      setCheckPay(false);
      setSubFilter("archive");
    }

    if (data === subFilter) {
      setSubFilter(null);
      setCheckInfo(false);
      setCheckArc(false);
      setCheckPay(false);
    }
  }

  if (admin) {
    return (
      <div className={`navbar-admin ${modalActive ? "flou" : ""}`}>
        <div
          className={`${filter === "all" ? "navbar-focus" : ""} pointer`}
          onClick={() => setFilterAndCalendar("all")}
        >
          TOUS
        </div>
        <div
          className={`${filter === "bio" ? "navbar-focus" : ""} pointer`}
          onClick={() => setFilterAndCalendar("bio")}
        >
          BIORESONANCE
        </div>
        <div
          className={`${filter === "com" ? "navbar-focus" : ""} pointer`}
          onClick={() => setFilterAndCalendar("com")}
        >
          COMMUNICATION
        </div>
        <div
          className={`${filter === "rec" ? "navbar-focus" : ""} pointer`}
          onClick={() => setFilterAndCalendar("rec")}
        >
          RECHERCHE
        </div>
        <div
          className={`${filter === "ora" ? "navbar-focus" : ""} pointer`}
          onClick={() => setFilterAndCalendar("ora")}
        >
          ORACLE
        </div>

        <div
          className={`${filter === "calendar" ? "navbar-focus" : ""} pointer`}
          onClick={() => handleCalendar()}
        >
          CALENDRIER
        </div>
        <div
          className={`navbar-side ${
            filter === "calendar" || filter === "date" ? "hide-navbar-side" : ""
          } `}
          onClick={() => {
            if (filter !== "calendar" && filter !== "date") {
              setSubFilter();
            }
          }}
        >
          <div>
            En attente de Confirmation des informations
            <input
              type="checkbox"
              onChange={() => handleCheck("infos")}
              checked={checkInfo}
              disabled={filter === "calendar" || filter === "date"}
            ></input>
          </div>
          <div>
            En attente de Paiement{" "}
            <input
              type="checkbox"
              onChange={() => handleCheck("paiement")}
              checked={checkPay}
              disabled={filter === "calendar" || filter === "date"}
            ></input>
          </div>
          <div>
            Rendez-vous archivées{" "}
            <input
              type="checkbox"
              onChange={() => handleCheck("archive")}
              checked={checkArc}
              disabled={filter === "calendar" || filter === "date"}
            ></input>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-client" id="navbar">
        <div className="navbar-dropdown" onClick={() => handleDropdown()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Link to="/">
          <div onClick={() => goToAnchor("first-sight")}>ACCEUIL</div>
        </Link>
        <Link to="/biorésonance">
          <div>BIORESONANCE</div>
        </Link>
        <Link to="/communication-animale">
          <div>COMMUNICATION ANIMALE</div>
        </Link>
        <Link to="/recherche-animale">
          <div>RECHERCHE ANIMALE</div>
        </Link>
        <Link to="/lecture-oracle">
          <div>LECTURE D'ORACLE</div>
        </Link>
        <Link to="/">
          <div onClick={() => goToAnchor("avis")}>AVIS</div>
        </Link>
        <Link to="/">
          <div onClick={() => goToAnchor("rdv")}>RENDEZ-VOUS</div>
        </Link>
      </div>
    );
  }
}

export default Navbar;

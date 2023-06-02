import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../utils/context/injex";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ admin, filter, setFilter, setShowCalendar, modalActive }) {
  const { setAnchor } = useContext(StateContext);

  function setFilterAndCalendar(filter) {
    setFilter(filter);
    setShowCalendar(false);
  }

  function handleCalendar() {
    setFilter(null);
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

  if (admin) {
    return (
      <div className={`navbar-admin ${modalActive ? "flou" : ""}`}>
        <div
          className={`${filter === "" ? "navbar-focus" : ""}`}
          onClick={() => setFilterAndCalendar("")}
        >
          TOUS
        </div>
        <div
          className={`${filter === "bio" ? "navbar-focus" : ""}`}
          onClick={() => setFilterAndCalendar("bio")}
        >
          BIORESONANCE
        </div>
        <div
          className={`${filter === "com" ? "navbar-focus" : ""}`}
          onClick={() => setFilterAndCalendar("com")}
        >
          COMMUNICATION
        </div>
        <div
          className={`${filter === "rec" ? "navbar-focus" : ""}`}
          onClick={() => setFilterAndCalendar("rec")}
        >
          RECHERCHE
        </div>
        <div
          className={`${filter === "ora" ? "navbar-focus" : ""}`}
          onClick={() => setFilterAndCalendar("ora")}
        >
          ORACLE
        </div>
        <div
          className={`${
            filter === null || filter === "date" ? "navbar-focus" : ""
          }`}
          onClick={() => handleCalendar()}
        >
          CALENDRIER
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
        <Link to="/">
          <div onClick={() => goToAnchor("bio")}>BIORESONANCE</div>
        </Link>
        <Link to="/">
          <div onClick={() => goToAnchor("com")}>COMMUNICATION ANIMALE</div>
        </Link>
        <Link to="/">
          <div onClick={() => goToAnchor("rec")}>RECHERCHE ANIMALE</div>
        </Link>
        <Link to="/">
          <div onClick={() => goToAnchor("ora")}>LECTURE D'ORACLE</div>
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

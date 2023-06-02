import { useState, useEffect, useContext } from "react";
import { StateContext } from "../utils/context/injex";
import "react-datepicker/dist/react-datepicker.css";
import Card from "../components/Admin/Card";
import { fetchDatas, changeRdv, changePay, deleteInfos } from "../utils/fetch";
import Calendar from "../components/Admin/Calendar";
import Login from "../components/Admin/Login";
// import Signup from "../components/Admin/Signup";

import jwt_decode from "jwt-decode";
import Navbar from "../components/Navbar";

function Admin() {
  const {
    dataBio,
    setDataBio,
    dataRec,
    setDataRec,
    dataOra,
    setDataOra,
    dataCom,
    setDataCom,
    datas,
    setDatas,
    dates,
    setDates,
  } = useContext(StateContext);

  const [itemToDelete, setItemToDelete] = useState(null);

  const [auth, setAuth] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);

  const [thisDate, setThisDate] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [filter, setFilter] = useState("all");

  // fetchData

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();
      if (currentDate > expirationDate) {
        localStorage.removeItem("authToken");
        setAuth(null);
      } else {
        setAuth(token);
      }
    } else {
      setAuth(null);
    }
    if (auth) {
      fetchDatas(setDataBio, setDataCom, setDataOra, setDataRec, setDatas);
    }
  }, [filter, confirmed, thisDate, auth]);

  useEffect(() => {
    if (auth) {
      if (filter === "bio") {
        setDatas(dataBio);
      } else if (filter === "com") {
        setDatas(dataCom);
      } else if (filter === "rec") {
        setDatas(dataRec);
      } else if (filter === "ora") {
        setDatas(dataOra);
      } else if (filter === "rdvConf") {
        setDatas(datas.filter((item) => item.confirmed));
      } else if (filter === "rdvInf") {
        setDatas(datas.filter((item) => !item.confirmed));
      } else if (filter === "payConf") {
        setDatas(datas.filter((item) => item.confirmedPaiement));
      } else if (filter === "payInf") {
        setDatas(datas.filter((item) => !item.confirmedPaiement));
      } else if (filter === "date") {
        setDatas(
          datas.filter(
            (item) => convertDate(item.date) === convertDate(thisDate)
          )
        );
      } else if (filter === "calendar") {
        setDatas([]);
      } else if (filter === "all") {
        setDatas(datas);
      }
    }
  }, [dataOra, dataBio, dataCom, dataRec, filter, auth]);

  useEffect(() => {
    if (auth) {
      const bioCalendar = dataBio.map((item) => new Date(item.date));
      const comCalendar = dataCom.map((item) => new Date(item.date));
      const recCalendar = dataRec.map((item) => new Date(item.date));
      const oraCalendar = dataOra.map((item) => new Date(item.date));
      const allDates = [
        ...bioCalendar,
        ...comCalendar,
        ...recCalendar,
        ...oraCalendar,
      ];
      setDates(allDates);
    }
  }, [dataBio, dataCom, dataRec, dataOra, setDates, auth]);

  function handledatepicker(date) {
    setThisDate(date.date);
    setFilter("date");
  }

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

  function handleDelete(item) {
    document.getElementById("modal").style.display = "block";
    setItemToDelete(item);
    setModalActive(true);
  }

  function handleCancelDelete() {
    document.getElementById("modal").style.display = "none";
    setModalActive(false);
  }

  function handleConfirmDelete() {
    document.getElementById("modal").style.display = "none";
    deleteInfos(itemToDelete);
    setItemToDelete(null);
    setConfirmed(!confirmed);
    setModalActive(false);
  }

  if (datas) {
    if (auth) {
      return (
        <div className="admin-page">
          <Navbar
            admin
            setFilter={setFilter}
            filter={filter}
            setShowCalendar={setShowCalendar}
            Calendar={Calendar}
            modalActive={modalActive}
          ></Navbar>
          <div className="modal" id="modal">
            <p>
              Attention
              <br />
              les informations seront définitivement supprimés de la base de
              données
            </p>
            <div className="button-container">
              <button onClick={() => handleConfirmDelete()}>Confirmer</button>
              <button onClick={() => handleCancelDelete()}>Annuler</button>
            </div>
          </div>

          <div className={`admin-body ${modalActive ? "flou" : ""}`}>
            {showCalendar ? (
              <div className="calendar-container">
                <Calendar
                  dates={dates}
                  handledatepicker={handledatepicker}
                ></Calendar>
              </div>
            ) : null}

            <div className="cards-container">
              {datas.map((item) => (
                <div
                  key={item._id}
                  className={`card-container ${
                    item.category === "bio"
                      ? "card-bio"
                      : item.category === "com"
                      ? "card-com"
                      : item.category === "rec"
                      ? "card-rec"
                      : "card-ora"
                  }`}
                >
                  <div className="title-card-admin">
                    <div className="title-card">
                      {item.category === "bio" ? <h2>BIORESONANCE</h2> : null}
                      {item.category === "com" ? (
                        <h2>COMMUNICATION ANIMALE</h2>
                      ) : null}
                      {item.category === "rec" ? (
                        <h2>RECHERCHE ANIMALE</h2>
                      ) : null}
                      {item.category === "ora" ? <h2>LECTURE ORACLE</h2> : null}
                    </div>
                  </div>

                  <Card
                    confirmed={confirmed}
                    setConfirmed={setConfirmed}
                    category={item.category}
                    item={item}
                    handleDelete={handleDelete}
                    modalActive={modalActive}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      // return <Login setAuth={setAuth}></Login>;
      return <Login setAuth={setAuth}></Login>;
    }
  }
}

export default Admin;

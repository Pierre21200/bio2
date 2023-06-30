import { useState, useEffect, useContext } from "react";
import { StateContext } from "../utils/context/injex";
import "react-datepicker/dist/react-datepicker.css";
import Card from "../components/Admin/Card";
import { fetchDatas, deleteInfos, deleteDate } from "../utils/fetch";
import Calendar from "../components/Admin/Calendar";
import Login from "../components/Admin/Login";
import Signup from "../components/Admin/Signup";
import { changeRdv, changePay, changePastAppointment } from "../utils/fetch";

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

  // const [changingRdv, setChangingRdv] = useState(false);
  // const [changingPay, setChangingPay] = useState(false);
  // const [changingPastAppointment, setChangingPastAppointment] = useState(false);

  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToConfirmRdv, setItemToConfirmRdv] = useState(null);
  const [itemToConfirmPay, setItemToConfirmPay] = useState(null);

  const [auth, setAuth] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);

  const [thisDate, setThisDate] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [filter, setFilter] = useState("all");
  const [subFilter, setSubFilter] = useState(null);

  const [finalDatas, setFinalDatas] = useState([]);

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
  }, [filter, confirmed, thisDate, auth, subFilter]);

  // Filter n subfilter
  useEffect(() => {
    if (auth) {
      if (filter === "all") {
        setFinalDatas(datas.filter((item) => !item.pastAppointment));
        if (subFilter === "infos") {
          setFinalDatas(
            datas.filter((item) => !item.pastAppointment && !item.confirmed)
          );
        }
        if (subFilter === "paiement") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmedPaiement &&
                item.confirmed &&
                !item.pastAppointment
            )
          );
        }
        if (subFilter === "archive") {
          setFinalDatas(datas.filter((item) => item.pastAppointment));
        }
      } else if (filter === "bio") {
        setFinalDatas(
          datas.filter(
            (item) => !item.pastAppointment && item.category === "bio"
          )
        );
        if (subFilter === "infos") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmed &&
                !item.pastAppointment &&
                item.category === "bio"
            )
          );
        }
        if (subFilter === "paiement") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmedPaiement &&
                item.confirmed &&
                !item.pastAppointment &&
                item.category === "bio"
            )
          );
        }
        if (subFilter === "archive") {
          setFinalDatas(
            datas.filter(
              (item) => item.pastAppointment && item.category === "bio"
            )
          );
        }
      } else if (filter === "com") {
        setFinalDatas(
          datas.filter(
            (item) => !item.pastAppointment && item.category === "com"
          )
        );
        if (subFilter === "infos") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmed &&
                !item.pastAppointment &&
                item.category === "com"
            )
          );
        }
        if (subFilter === "paiement") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmedPaiement &&
                item.confirmed &&
                !item.pastAppointment &&
                item.caategory === "com"
            )
          );
        }
        if (subFilter === "archive") {
          setFinalDatas(
            datas.filter(
              (item) => item.pastAppointment && item.category === "com"
            )
          );
        }
      } else if (filter === "rec") {
        setFinalDatas(
          datas.filter(
            (item) => !item.pastAppointment && item.category === "rec"
          )
        );
        if (subFilter === "infos") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmed &&
                !item.pastAppointment &&
                item.category === "rec"
            )
          );
        }
        if (subFilter === "paiement") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmedPaiement &&
                item.confirmed &&
                !item.pastAppointment &&
                item.caategory === "rec"
            )
          );
        }
        if (subFilter === "archive") {
          setFinalDatas(
            datas.filter(
              (item) => item.pastAppointment && item.category === "rec"
            )
          );
        }
      } else if (filter === "ora") {
        setFinalDatas(
          datas.filter(
            (item) => !item.pastAppointment && item.category === "ora"
          )
        );
        if (subFilter === "infos") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmed &&
                !item.pastAppointment &&
                item.category === "ora"
            )
          );
        }
        if (subFilter === "paiement") {
          setFinalDatas(
            datas.filter(
              (item) =>
                !item.confirmedPaiement &&
                item.confirmed &&
                !item.pastAppointment &&
                item.caategory === "ora"
            )
          );
        }
        if (subFilter === "archive") {
          setFinalDatas(
            datas.filter(
              (item) => item.pastAppointment && item.category === "ora"
            )
          );
        }
      } else if (filter === "date") {
        setFinalDatas(
          datas.filter(
            (item) =>
              !item.pastAppointment &&
              convertDate(item.date) === convertDate(thisDate)
          )
        );
      } else if (filter === "calendar") {
        setFinalDatas([]);
      }
    }
  }, [datas, confirmed]);

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
    document.getElementById("modalDelete").style.display = "block";
    setItemToDelete(item);
    setModalActive(true);
  }

  function handleCancelDelete() {
    document.getElementById("modalDelete").style.display = "none";
    setModalActive(false);
  }

  function handleConfirmDelete() {
    document.getElementById("modalDelete").style.display = "none";
    deleteInfos(itemToDelete);
    deleteDate(itemToDelete);
    setItemToDelete(null);
    setConfirmed(!confirmed);
    setModalActive(false);
  }

  function handleConfirmedRdv(item) {
    document.getElementById("modalConfirmed").style.display = "block";
    setModalActive(true);
    setItemToConfirmRdv(item);
  }

  function handleSureRdv() {
    document.getElementById("modalConfirmed").style.display = "none";
    changeRdv(itemToConfirmRdv);
    setConfirmed(!confirmed);
    setModalActive(false);
    setItemToConfirmRdv(null);
  }

  function handleCancelRdv() {
    document.getElementById("modalConfirmed").style.display = "none";
    setModalActive(false);
    setItemToConfirmRdv(null);
  }

  function handleConfirmedPay(item) {
    document.getElementById("modalConfirmedPaiement").style.display = "block";
    setModalActive(true);
    setItemToConfirmPay(item);
  }

  function handleSurePay() {
    document.getElementById("modalConfirmedPaiement").style.display = "none";
    changePay(itemToConfirmPay);
    setModalActive(false);
    setConfirmed(!confirmed);
    setItemToConfirmPay(null);
  }

  function handleCancelPay() {
    document.getElementById("modalConfirmedPaiement").style.display = "none";
    setModalActive(false);
    setItemToConfirmPay(null);
  }

  if (datas) {
    if (auth) {
      return (
        <div className="admin-page">
          <Navbar
            admin
            setFilter={setFilter}
            setSubFilter={setSubFilter}
            filter={filter}
            subFilter={subFilter}
            setShowCalendar={setShowCalendar}
            Calendar={Calendar}
            modalActive={modalActive}></Navbar>
          <div className="modal" id="modalDelete">
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
          <div className="modal" id="modalConfirmed">
            <p>
              Attention
              <br />
              Le formulaire sera confirmé, un mail contenant les informations de
              paiement sera envoyé au client, êtes-vous sur ?
            </p>
            <div className="button-container">
              <button onClick={() => handleSureRdv()}>Confirmer</button>
              <button onClick={() => handleCancelRdv()}>Annuler</button>
            </div>
          </div>
          <div className="modal" id="modalConfirmedPaiement">
            <p>
              Attention
              <br />
              Le paiement sera confirmé, un email de confirmation de paiement
              sera envoyé au client, êtes-vous sur ?
            </p>
            <div className="button-container">
              <button onClick={() => handleSurePay()}>Confirmer</button>
              <button onClick={() => handleCancelPay()}>Annuler</button>
            </div>
          </div>
          <div>
            {showCalendar ? (
              <div className="calendar-container">
                <Calendar
                  dates={dates}
                  handledatepicker={handledatepicker}></Calendar>
              </div>
            ) : null}

            <div className="cards-container">
              {finalDatas.map((item) => (
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
                  }`}>
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
                    setModalActive={setModalActive}
                    handleConfirmedRdv={handleConfirmedRdv}
                    handleConfirmedPay={handleConfirmedPay}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      // return <Signup setAuth={setAuth}></Signup>;
      return <Login setAuth={setAuth}></Login>;
    }
  }
}

export default Admin;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { postDates, putDates } from "../../utils/fetch";
import { useEffect } from "react";

function Calendar({
  dates,
  handledatepicker,
  adminDates,
  setConfirmed,
  confirmed,
}) {
  const [released, setRelease] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [adminFree, setAdminFree] = useState([]);
  const [adminNotFree, setAdminNotFree] = useState([]);
  const [changingDay, setChangingDay] = useState();

  function generateCalendar() {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendar = [];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || day > daysInMonth) {
          week.push(null);
        } else {
          const currentDate = new Date(year, month, day);
          week.push({
            day,
            date: currentDate,
            isToday: currentDate.toDateString() === new Date().toDateString(),
          });
          day++;
        }
      }
      calendar.push(week);
      if (day > daysInMonth) {
        break;
      }
    }

    return calendar;
  }

  const calendarData = generateCalendar();

  function handlePrevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  }

  function handleNextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  }

  useEffect(() => {
    if (adminDates) {
      setAdminFree(adminDates.filter((date) => date.free === true));
      setAdminNotFree(adminDates.filter((date) => date.free === false));
    }
  }, [adminDates]);

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-month">
          <button onClick={handlePrevMonth}>Prev</button>
          <span>
            {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </span>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Dim</th>
              <th>Lun</th>
              <th>Mar</th>
              <th>Mer</th>
              <th>Jeu</th>
              <th>Ven</th>
              <th>Sam</th>
            </tr>
          </thead>
          <tbody>
            {calendarData.map((week, index) => (
              <tr key={index}>
                {week.map((day, index) => (
                  <td key={index}>
                    {day && (
                      <span
                        className={`date ${
                          dates.some(
                            (date) => date.getTime() === day.date.getTime()
                          )
                            ? "rdv"
                            : ""
                        } ${
                          selectedDate === JSON.stringify(day.date)
                            ? "date-selected"
                            : ""
                        }

                        ${
                          day.date.getDay() === 0 ||
                          day.date.getDay() === 3 ||
                          day.date.getDay() === 6 ||
                          adminFree.some(
                            (date) =>
                              day.date.toISOString() ===
                              new Date(date.date).toISOString()
                          )
                            ? "free"
                            : ""
                        }

                        ${
                          adminNotFree.some(
                            (date) =>
                              day.date.toISOString() ===
                              new Date(date.date).toISOString()
                          )
                            ? "not-free"
                            : ""
                        }

                       
                        
                        `}
                        onClick={() => {
                          if (
                            dates.some(
                              (date) => date.getTime() === day.date.getTime()
                            )
                          ) {
                            const changeDate =
                              document.getElementById("change-date");
                            changeDate.style.visibility = "hidden";
                            // La date correspond à une date dans dates
                            setSelectedDate(JSON.stringify(day.date));
                            handledatepicker(day);
                          } else {
                            handledatepicker(null);
                            setSelectedDate(JSON.stringify(day.date));
                            setChangingDay(day);
                            const changeDate =
                              document.getElementById("change-date");
                            changeDate.style.visibility = "visible";
                            console.log(changingDay);
                          }
                        }}>
                        {day.day}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="change-date" className="change-date">
        <p>Changer ma disponibilité pour cette date ? </p>
        <button
          onClick={() => {
            if (
              adminDates.some(
                (date) =>
                  changingDay.date.toISOString() ===
                    new Date(date.date).toISOString() &&
                  !dates.some(
                    (date) => date.getTime() === changingDay.date.getTime()
                  )
              )
            ) {
              putDates(changingDay);
            } else if (
              (changingDay.date.getDay() === 0 ||
                changingDay.date.getDay() === 3 ||
                changingDay.date.getDay() === 6) &&
              !dates.some(
                (date) => date.getTime() === changingDay.date.getTime()
              )
            ) {
              postDates({ changingDay, cancelled });
            } else if (
              !dates.some(
                (date) => date.getTime() === changingDay.date.getTime()
              )
            ) {
              postDates({ changingDay, released });
            }

            const changeDate = document.getElementById("change-date");
            changeDate.style.visibility = "hidden";

            setConfirmed(!confirmed);
          }}>
          Oui
        </button>
        <button
          onClick={() => {
            const changeDate = document.getElementById("change-date");
            changeDate.style.visibility = "hidden";
          }}>
          Non
        </button>
      </div>
    </div>
  );
}

export default Calendar;

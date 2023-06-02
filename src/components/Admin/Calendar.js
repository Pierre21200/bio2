import React, { useState } from "react";

function Calendar({ dates, handledatepicker }) {
  const [date, setDate] = useState(new Date());

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
              <th>Lun</th>
              <th>Mar</th>
              <th>Mer</th>
              <th>Jeu</th>
              <th>Ven</th>
              <th>Sam</th>
              <th>Dim</th>
            </tr>
          </thead>
          <tbody>
            {calendarData.map((week, index) => (
              <tr key={index}>
                {week.map((day, index) => (
                  <td key={index}>
                    {day && (
                      <span
                        className={`${
                          dates.some(
                            (date) => date.getTime() === day.date.getTime()
                          )
                            ? "rdv"
                            : null
                        }`}
                        onClick={() => {
                          if (
                            dates.some(
                              (date) => date.getTime() === day.date.getTime()
                            )
                          ) {
                            // La date correspond à une date dans dates
                            handledatepicker(day);
                          }
                        }}
                      >
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
    </div>
  );
}

export default Calendar;

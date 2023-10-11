import React, { useState, createContext } from "react";
// const jwt = require("jsonwebtoken");

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [dataBio, setDataBio] = useState([]);
  const [dataRec, setDataRec] = useState([]);
  const [dataOra, setDataOra] = useState([]);
  const [dataCom, setDataCom] = useState([]);
  const [datas, setDatas] = useState([]);
  const [dates, setDates] = useState([]);
  const [anchor, setAnchor] = useState(null);

  return (
    <StateContext.Provider
      value={{
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
        anchor,
        setAnchor,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

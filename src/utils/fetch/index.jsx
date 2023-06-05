// Définir BACKEND_URL localement pour le développement
const BACKEND_URL = "https://bioback.herokuapp.com";

export async function fetchDatas(setDataBio, setDataCom, setDataOra, setDataRec, setDatas) {
  const token = localStorage.getItem("authToken");
  try {
    const [bioResponse, comResponse, oraResponse, recResponse] = await Promise.all([
      fetch(BACKEND_URL + "/bioanimale/bioinfos", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
      }),
      fetch(BACKEND_URL + "/bioanimale/cominfos", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
      }),
      fetch(BACKEND_URL + "/bioanimale/orainfos", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
      }),
      fetch(BACKEND_URL + "/bioanimale/recinfos", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
      })
    ]);

    const [bioJsonData, comJsonData, oraJsonData, recJsonData] = await Promise.all([
      bioResponse.json(),
      comResponse.json(),
      oraResponse.json(),
      recResponse.json()
    ]);


    await Promise.all([
      setDataBio(bioJsonData),
      setDataCom(comJsonData),
      setDataOra(oraJsonData),
      setDataRec(recJsonData)
    ])

    setDatas([].concat(bioJsonData, comJsonData, oraJsonData, recJsonData));

  } catch (error) {
    console.log(error);
  }
}

export async function getAllDates(setDates) {
  try {
    const response = await fetch(BACKEND_URL + '/bioanimale/dates', {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    const allDates = await response.json()


    const newCalendar = allDates.filter((date, index) => {
      const dateStr = new Date(date.date).toISOString();
      return (
        allDates.findIndex(
          (otherDate) => new Date(otherDate.date).toISOString() === dateStr
        ) !== index
      );
    }).map((item) => new Date(item.date));


    setDates(newCalendar)
  }
  catch (e) {
    console.log(e)
  }
}



// Post


export async function postDates(body) {

  try {
    const response = await fetch(BACKEND_URL + "/bioanimale/dates", {
      method: 'POST', headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function postBioInfos(body) {

  try {
    const response = await fetch(BACKEND_URL +"/bioanimale/bioinfos", {
      method: 'POST', headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}


export async function postComInfos(body, file) {
  const formData = new FormData();
  formData.append("image", file);
  Object.keys(body).forEach((key) => formData.append(key, body[key]));

  try {
    await fetch(BACKEND_URL +"/bioanimale/cominfos", {
      method: "POST",
      body: formData,
    });
  } catch (e) {
    console.log(e);
  }
}



export async function postRecInfos(body, file) {
  const formData = new FormData();
  formData.append("image", file);
  Object.keys(body).forEach((key) => formData.append(key, body[key]));
  try {
    await fetch(BACKEND_URL +"/bioanimale/recinfos", {
      method: "POST",
     
      body: formData,
    });
    console.log('infos enregistréés !')
  } catch (e) {
    console.log(e);
  }

}

export async function postOraInfos(body, file) {
  const formData = new FormData();
  formData.append("image", file);
  Object.keys(body).forEach((key) => formData.append(key, body[key]));

  try {
    await fetch(BACKEND_URL +"/bioanimale/orainfos", {
      method: "POST",
     
      body: formData,
    });
    console.log('infos enregistréés !')
  } catch (e) {
    console.log(e);
  }

}


export async function changeRdv(body) {
  const token = localStorage.getItem("token");

  const data = { id: body._id, category: body.category, rdv: true };

  if (body.category === 'bio') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/bioinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  }

  if (body.category === 'com') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/cominfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  } if (body.category === 'rec') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/recinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  }


  if (body.category === 'ora') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/orainfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes


        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  }


}

export async function changePay(body) {
  const token = localStorage.getItem("token");
  const data = { id: body._id, category: body.category, pay: true };
  if (body.category === 'bio') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/bioinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  }
  if (body.category === 'ora') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/orainfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  } if (body.category === 'com') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/cominfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  } if (body.category === 'rec') {
    try {
      const response = await fetch(BACKEND_URL +"/bioanimale/recinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export async function deleteInfos(body) {
  
  const token = localStorage.getItem("authToken");
  const data = { id: body._id, category: body.category };
  var path = ''


  try {
    if (data.category === 'bio') {
      path = 'bioinfos'
    } else if (data.category === 'com') {
      path = 'cominfos'
    } else if (data.category === 'rec') {
      path = 'recinfos'
    } else if (data.category === 'ora') {
      path = 'orainfos'
    }

    const response = await fetch(BACKEND_URL + `/bioanimale/${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
      },
      body: JSON.stringify(data),
    });
   
    


    if (response.ok) {
      console.log("infos supprimés avec succès !");
      return response.json();
    } else {
      throw new Error("Erreur lors de la suppression des infos");
    }

  } catch { }

  
}


export async function deleteDate(body) {
  const token = localStorage.getItem("authToken");
  console.log(body)

  try {
    await fetch(`http://localhost:8000/bioanimale/dates`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
      },
      body: JSON.stringify(body),
    });
  }
  catch (e) {
    console.log(e)
  }

}

export async function signUser(body) {
  try {
    const response = await fetch(BACKEND_URL +`/bioanimale/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error)
  }
};

export async function logUser(body, setAuth) {
  try {
    const response = await fetch(BACKEND_URL +`/bioanimale/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      setAuth(token);
      localStorage.setItem('authToken', token);
      console.log('Token enregistré dans le localStorage');
    }
    

  } catch (error) {
    console.log(error)
  }
}



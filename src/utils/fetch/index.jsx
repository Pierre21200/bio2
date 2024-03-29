import emailjs from 'emailjs-com';
import flower5 from '../img/flower5.webp'


const BACKEND_URL = 'https://bioback.herokuapp.com'


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


// Configurer les informations de connexion SMTP
const serviceIDtoAdmin = 'service_2ipacxo';

const templateIDtoAdmin = 'template_0lv9fnp';
const publicKeytoAdmin = 'iG24iKfn71sEe52nR';

// const templateIDtoClient = 'template_9ictspl';
// const templateIDtoClientConfirmed = 'template_9ictspl';
// const templateIDtoClientConfirmedPaiement = 'template_9ictspl';
// communiquer.animaux@gmail.com


// Fonction pour envoyer l'e-mail
const sendEmailToAdmin = (data, category) => {
  let cat = ''
  if (category === 'bio') {
    cat = 'Biorésonance'
  }
  if (category === 'com') {
    cat = 'Communication Animale'
  } if (category === 'rec') {
    cat = 'Recherche Animale'
  } if (category === 'ora') {
    cat = `Lecture d'oracle`
  }

  const date = convertDate(data.date)

  const templateParams = {
    to_name: 'Morgane',
    subject: 'Nouvelle demande de rendez-vous !',
    from_name: 'ENERGIE ANIMALE',
    to_email: 'communiquer.animaux@gmail.com',
    message: `Vous avez une nouvelle demande de rendez-vous pour une séance de ${cat} dans votre espace administrateur pour la date du ${date} `,
  };

  emailjs.send(serviceIDtoAdmin, templateIDtoAdmin, templateParams, publicKeytoAdmin)
    .then((response) => {
      console.log('E-mail sent successfully:', response.status);
    })
    .catch((error) => {
      console.error('Error sending e-mail:', error);
    });
};

const sendEmailToClient = (data, category) => {
  let cat = ''
  if (category === 'bio') {
    cat = 'Biorésonance'
  }
  if (category === 'com') {
    cat = 'Communication Animale'
  } if (category === 'rec') {
    cat = 'Recherche Animale'
  } if (category === 'ora') {
    cat = `Lecture d'oracle`
  }

  const date = convertDate(data.date)


  const templateParams = {
    to_name: data.ownerName,
    to_email: data.mail,
    subject: 'Demande de rendez-vous !',
    from_name: 'ENERGIE ANIMALE',
    message: `Votre demande de rendez-vous pour une séance de ${cat} en date du ${date} a bien été confirmé. Nous traitons votre demande, vous recevrez prochainement un second mail contenant les informations de paiement. Le règlement doit etre impérativement effectué avant la date de rendez-vous. \n\n A bientôt ! \n`,
  };

  emailjs.send(serviceIDtoAdmin, templateIDtoAdmin, templateParams, publicKeytoAdmin)
    .then((response) => {
      console.log('E-mail sent successfully:', response.status);
    })
    .catch((error) => {
      console.error('Error sending e-mail:', error);
    });
};

const sendEmailToClientConfirmed = (data) => {
  let cat = ''
  if (data.category === 'bio') {
    cat = 'Biorésonance'
  }
  if (data.category === 'com') {
    cat = 'Communication Animale'
  } if (data.category === 'rec') {
    cat = 'Recherche Animale'
  } if (data.category === 'ora') {
    cat = `Lecture d'oracle`
  }

  const date = convertDate(data.date)


  const templateParams = {
    to_name: data.ownerName,
    to_email: data.mail,
    subject: 'Demande de rendez-vous accepté !',
    from_name: 'ENERGIE ANIMALE',
    message: `Votre demande de rendez-vous pour une séance de ${cat} en date du ${date} a bien été confirmé. \n\nVoici les informations de paiement : \n\nIBAN : FR76 1213 5003 0004 2532 6206 001\nMME Morgane FAUCOMPRE\n\nOu par Paypal (https://www.paypal.com/signin) avec l'adresse mail : \ncommuniquer.animaux@gmail.com \n\n A bientôt ! \n`,
  };

  emailjs.send(serviceIDtoAdmin, templateIDtoAdmin, templateParams, publicKeytoAdmin)
    .then((response) => {
      console.log('E-mail sent successfully:', response.status);
    })
    .catch((error) => {
      console.error('Error sending e-mail:', error);
    });
};

const sendEmailToClientConfirmedPaiement = (data) => {
  let cat = ''
  if (data.category === 'bio') {
    cat = 'Biorésonance'
  }
  if (data.category === 'com') {
    cat = 'Communication Animale'
  } if (data.category === 'rec') {
    cat = 'Recherche Animale'
  } if (data.category === 'ora') {
    cat = `Lecture d'oracle`
  }

  const date = convertDate(data.date)


  const templateParams = {
    to_name: data.ownerName,
    to_email: data.mail,
    subject: 'Votre paiement est confirmé !',
    from_name: 'ENERGIE ANIMALE',
    message: `Votre paiement pour une séance de ${cat} en date du ${date} a bien été confirmé. \n\n A bientôt ! \n`,
  };

  emailjs.send(serviceIDtoAdmin, templateIDtoAdmin, templateParams, publicKeytoAdmin)
    .then((response) => {
      console.log('E-mail sent successfully:', response.status);
    })
    .catch((error) => {
      console.error('Error sending e-mail:', error);
    });
};





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

export async function getAllDates(setDates, setAdminDates) {
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


    const datesWithFreeFalse = allDates
      .filter((date) => date.free === false)
      .map((item) => new Date(item.date));

    const datesWithFreeTrue = allDates
      .filter((date) => date.free === true)
      .map((item) => new Date(item.date));




    setAdminDates(datesWithFreeTrue)
    setDates([...newCalendar, ...datesWithFreeFalse]);
  }
  catch (e) {
    console.log(e)
  }
}


export async function getAllDatesAdmin(setAdminDates) {
  try {
    const response = await fetch(BACKEND_URL + '/bioanimale/dates', {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    const allDates = await response.json()

    setAdminDates(allDates)

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
  } catch (error) {
    console.log(error);
  }
}

export async function putDates(body) {
  console.log(body)
  try {
    const response = await fetch(BACKEND_URL + "/bioanimale/dates", {
      method: 'PUT', headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.log(error);
  }
}




export async function postBioInfos(body) {
  try {

    const response = await fetch(BACKEND_URL + "/bioanimale/bioinfos", {
      method: 'POST', headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    });
    await response.json();
    sendEmailToAdmin(body, 'bio');
    sendEmailToClient(body, 'bio');


  } catch (error) {
    console.log(error);
  }
}

export async function postComInfos(body, file) {

  const formData = new FormData();
  formData.append("image", file);
  Object.keys(body).forEach((key) => formData.append(key, body[key]));
  try {
    await fetch(BACKEND_URL + "/bioanimale/cominfos", {
      method: "POST",
      body: formData,
    });

    sendEmailToAdmin(body, 'com');
    sendEmailToClient(body, 'com');
  }
   catch (e) {
    console.log(e);
  }
}

export async function postRecInfos(body, file) {
  const formData = new FormData();
  formData.append("image", file);
  Object.keys(body).forEach((key) => formData.append(key, body[key]));
  try {
    await fetch(BACKEND_URL + "/bioanimale/recinfos", {
      method: "POST",

      body: formData,
    });
    console.log('infos enregistréés !')

    sendEmailToAdmin(body, 'rec');
    sendEmailToClient(body, 'rec');

  } catch (e) {
    console.log(e);
  }

}

export async function postOraInfos(body, file) {
  const formData = new FormData();
  formData.append("image", file);
  Object.keys(body).forEach((key) => formData.append(key, body[key]));

  try {
    await fetch(BACKEND_URL + "/bioanimale/orainfos", {
      method: "POST",

      body: formData,
    });
    console.log('infos enregistréés !')
    sendEmailToAdmin(body, 'ora');
    sendEmailToClient(body, 'ora');
  } catch (e) {
    console.log(e);
  }

}

export async function changeRdv(body) {
  const token = localStorage.getItem("authToken");
  const data = { id: body._id, category: body.category, rdv: true };

  if (body.category === 'bio') {
    try {
      const response = await fetch(BACKEND_URL + "/bioanimale/bioinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
        body: JSON.stringify(data),
      });



      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmed(body)
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
      const response = await fetch(BACKEND_URL + "/bioanimale/cominfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmed(body)
        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  } if (body.category === 'rec') {
    try {
      const response = await fetch(BACKEND_URL + "/bioanimale/recinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmed(body)

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
      const response = await fetch(BACKEND_URL + "/bioanimale/orainfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes


        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmed(body)

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
  const token = localStorage.getItem("authToken");
  const data = { id: body._id, category: body.category, pay: true };
  if (body.category === 'bio') {
    try {
      const response = await fetch(BACKEND_URL + "/bioanimale/bioinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmedPaiement(body)

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
      const response = await fetch(BACKEND_URL + "/bioanimale/orainfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmedPaiement(body)

        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  } if (body.category === 'com') {
    try {
      const response = await fetch(BACKEND_URL + "/bioanimale/cominfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmedPaiement(body)

        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  } if (body.category === 'rec') {
    try {
      const response = await fetch(BACKEND_URL + "/bioanimale/recinfos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + token // Ajout du token dans les en-têtes

        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("infos enregistrées !");
        sendEmailToClientConfirmedPaiement(body)

        return response.json();
      } else {
        throw new Error("Erreur lors de la modification des infos");
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export async function changePastAppointment(body) {
  const token = localStorage.getItem("authToken");
  const data = { id: body._id, category: body.category, pastAppointment: true };
  if (body.category === 'bio') {
    try {
      const response = await fetch(BACKEND_URL + "/bioanimale/bioinfos", {
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
      const response = await fetch(BACKEND_URL + "/bioanimale/orainfos", {
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
      const response = await fetch(BACKEND_URL + "/bioanimale/cominfos", {
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
      const response = await fetch(BACKEND_URL + "/bioanimale/recinfos", {
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

export async function deleteAdminDate(body) {
  const token = localStorage.getItem("authToken");

  try {
    await fetch(`http://localhost:8000/bioanimale/admindates`, {
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
    const response = await fetch(BACKEND_URL + `/bioanimale/signup`, {
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
    const response = await fetch(BACKEND_URL + `/bioanimale/login`, {
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



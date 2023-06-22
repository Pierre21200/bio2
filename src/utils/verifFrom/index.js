export function verifForm(body) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  var allElementsAreValid = Object.values(body).every(function (element) {
    return (
      (typeof element === "string" && element.length > 0) ||
      typeof element === "object"
    );
  });

  if (allElementsAreValid) {
    if (emailRegex.test(body.mail)) {
      return true;
    } else {
      return "mail";
    }
  } else {
    return false;
  }
}

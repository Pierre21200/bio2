export function verifForm(body) {
  var allElementsAreValid = Object.values(body).every(function (element) {
    return (
      (typeof element === "string" && element.length > 0) ||
      typeof element === "object"
    );
  });

  if (allElementsAreValid) {
    return true;
  } else {
    return false;
  }
}

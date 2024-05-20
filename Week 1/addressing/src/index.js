const englishCode = "en-US";
const spanishCode = "es-ES";
const iranianCode = "fa-IR";
const iranianString = "/درباره-ما";
const spanishString = "/acerca-de";
const englishString = "/about-us";
function getAboutUsLink(language) {
  switch (language) {
    case englishCode:
      return englishString;
    case spanishCode:
      return spanishString;
    case iranianCode:
      return iranianString;
  }
}
module.exports = getAboutUsLink;

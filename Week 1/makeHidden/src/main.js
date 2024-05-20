// you can use this data to test your code
const data = require("./data.json");

function makeHidden(list) {
  return list.map((info) => {
    const secureMobile = `${info.details.mobile.slice(
      0,
      6
    )}***${info.details.mobile.slice(-2)}`;
    const secureCart = `****-****-****-${info.details.card_no.split("-")[3]}`;
    return {
      ...info,
      details: {
        mobile: secureMobile,
        card_no: secureCart,
      },
      is_secure: true,
    };
  });
}
console.log(makeHidden(data));

module.exports = makeHidden;

async function main() {
  const translate = require("@vitalets/google-translate-api");

  const res = await translate("Tôi nói tiếng việt không rành", { to: "en" });

  console.log(res.text); //=> I speak English
  console.log(res.from.language.iso); //=> nl
}

main();

const Characters = require("./models/character-model");

async function createCharacte(name, x, y, height, width) {
  const character = new Characters({
    name: name,
    x: x,
    y: y,
    height: height,
    width: width,
  });

  await character.save();

  console.log("character creation done");
}

(async () => {
  await createCharacte("leonardo", 762, 767, 62, 33);
})();

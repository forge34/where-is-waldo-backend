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
  await createCharacte("leonardo", 762, 767, 59, 30);
  await createCharacte("goku", 811, 1166, 89, 51);
  await createCharacte("guitar guy", 1123, 1388, 110, 100);
  await createCharacte("mojo jojo", 278, 844, 66, 55);
  await createCharacte("jason voorhees", 698, 661, 70, 55);
})();

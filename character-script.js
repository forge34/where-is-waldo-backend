const Characters = require("./models/character-model");

async function createCharacte(name, x, y, width, height) {
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
  // await createCharacte("leonardo", 762, 767, 59, 30);
  // await createCharacte("goku", 811, 1166, 89, 51);
  // await createCharacte("guitar guy", 1123, 1388, 110, 100);
  // await createCharacte("mojo jojo", 278, 844, 66, 55);
  // await createCharacte("jason voorhees", 698, 661, 70, 55);
  //
  const leo = [(1152 / 1920).toFixed(2), (1078 / 2689).toFixed(2)];
  const goku = [(1230 / 1920).toFixed(2), (1684 / 2689).toFixed(2)];
  const guitar = [(1713 / 1920).toFixed(2), (2048 / 2689).toFixed(2)];
  const mojo = [(424 / 1920).toFixed(2), (1197 / 2689).toFixed(2)];
  const jason = [(1061 / 1920).toFixed(2), (915 / 2689).toFixed(2)];

  await createCharacte(
    "leonardo",
    leo[0],
    leo[1],
    (45 / 1920).toFixed(2),
    (90 / 2689).toFixed(2),
  );
  await createCharacte(
    "goku",
    goku[0],
    goku[1],
    (45 / 1920).toFixed(2),
    (93 / 2689).toFixed(2),
  );
  await createCharacte(
    "guitar guy",
    guitar[0],
    guitar[1],
    (84 / 1920).toFixed(2),
    (86 / 2689).toFixed(2),
  );
  await createCharacte(
    "mojo jojo",
    mojo[0],
    mojo[1],
    (44 / 1920).toFixed(2),
    (60 / 2689).toFixed(2),
  );
  await createCharacte(
    "jason voorhees",
    jason[0],
    jason[1],
    (44 / 1920).toFixed(2),
    (63 / 2689).toFixed(2),
  );
})();

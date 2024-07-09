const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    mongoose.connection.on("error", (err) => {
      console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
})();

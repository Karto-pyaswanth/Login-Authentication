const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DB);

  mongoose.connection.on('error', (err) => {
    console.log(err);
    console.log("Could not connect database!");
  });

  mongoose.connection.once('open', () => {
    console.log("Connected to database successfully");
  });
};
const mongoose = require('mongoose');
const URI = process.env.MONGO;

exports.connect_db = () => {
  mongoose
    .connect(URI)
    .then((data) => console.log(`Mongo connnected at ${data.connection.host}`))
    .catch((err) => console.log(`Mongo connection Error ${err}`));
};

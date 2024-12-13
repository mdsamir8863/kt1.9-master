const app = require('./app');
const { connect_db } = require('./monogo_connect');
const PORT = process.env.PORT || 2021;

connect_db();

app.listen(PORT, () => {
  console.log(`Kitelle services are up and live at port ${PORT}`);
});

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sql12678001", "sql12678001", "WjxQNSgXcH", {
  host: "sql12.freesqldatabase.com",
  dialect: "mysql",
});
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connection;

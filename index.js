const app = require("./app");

const { PORT } = process.env;
// process.env.PORT

app.listen(PORT, () => console.log("app is running like any thing "));

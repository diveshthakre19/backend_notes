const mongoose = require("mongoose");
const { MONGO_URL } = process.env;

exports.connect() = ()=>{
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("Database is connected"))
      .catch((error) => {
        console.log("DB connection fail"), console.log(error), process.exit(1);
      });
    
}
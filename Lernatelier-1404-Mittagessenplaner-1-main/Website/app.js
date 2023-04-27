const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const url =
  "mongodb+srv://julianzurkinden:julianzurkinden@la1304.iss6ctc.mongodb.net/Login?retryWrites=true&w=majority";

const app = express();
app.use(cors());

const newSchema = new mongoose.Schema({
  name: String,
  email: String,
  benutzername: String,
  passwort: String,
});

const newModel = mongoose.model("data", newSchema);

mongoose.connect(url).then(() => {
  console.log("Connected!");
});

app.get("/data", async (req, res) => {
      const data =await newModel.find({});
      res.send({status: "ok", data:data})
    
});

app.post('/data', async (req, res) => {
  const username = req.body.benutzername;
  const password = req.body.passwort;

  const user = await newModel.findOne({ benutzername: username });
  if (!user || user.passwort !== password) {
    res.send({ success: false });
  } else {
  

    res.send({ success: true });

  }


});


app.listen(3000, () => {
  console.log("running on port 3000");
});

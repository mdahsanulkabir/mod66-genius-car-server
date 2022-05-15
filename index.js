const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();


//middlewire
app.use(cors());
app.use(express.json());

//database connection

const uri = "mongodb+srv://dbuser1:<password>@cluster0.qftnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('genius car db connected');
  client.close();
});



app.get('/', (req, res) => {
    res.send('Running genius server');
});

app.listen(port, () => {
    console.log('Listening to port, ',port);
})
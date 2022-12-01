const express = require("express");
const cors = require("cors");

require('./db/config');

const app = express();
const user = require('./db/user');
const driver = require('./db/driver');
app.use(cors())
app.use(express.json());


app.post('/registerUser', async(req, res)=>{
    console.log(req.body)
    let User = new user(req.body.formData);
    console.log(User);
    let result = await User.save();
    result = result.toObject();
    res.send(result);

});

app.post('/registerDriver', async(req, res)=>{
    console.log(req.body)
    let Driver = new driver(req.body.formData);
    console.log(Driver);
    let result = await Driver.save();
    result = result.toObject();
    res.send(result);
});

app.get("/alldrivers", async (req, res) => {
    const filters = req.query;
    let users = await driver.find();
    if (users.length > 0) {
        res.send(users);
    } else {
        res.send("No Driver found");
    }
});




app.listen(3000);
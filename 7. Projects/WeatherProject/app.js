const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
    const url ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=b01d2d77c52b36c37e3d80ee92daf89d&units=metric"

    https.get(url,function(response){
        console.log(response);
    })

})

app.listen(3000, function(req,res){
    console.log("Server is running smooth");
});
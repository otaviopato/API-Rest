const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 40,
            title: "Sear of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 100
        },
    ]
}
app.get("/games",(req, res) =>{
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/games/:id",(req, res) =>{
    if(isNaN(req.params.id)){
        res.send(400);
    }
    else {
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);
        if(game != undefined){
            res.sendStatus = 200;
            res.json(game);
        }
        else{
            res.sendStatus = 404;
        }
    }
});

app.post("/games", (req, res) =>{
    var {title, price, year} = req.body;
    DB.games.push({
        id: 50,
        title,
        price,
        year
    });
    res.sendStatus = 200;
});

app.delete("/games/:id", (req, res) =>{
    if(isNaN(req.params.id)){
        res.send(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);
        
        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
        
    }
});

app.put("/games/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.send(400);
    }
    else {
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);
        if(game != undefined){
            var {title, price, year} = req.body;
            if(title != undefined){
                game.title = title;
            }
            if(price != undefined){
                game.price = price;
            }
            if(year != undefined){
                game.year = year;
            }
            res.sendStatus(200);
        }
        else{
            res.sendStatus = 404;
        }
    }
})
app.listen(45678,() =>{
    console.log("API RODANDO!")
});
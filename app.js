import express from 'express';
import hbs from 'express-handlebars';
import { appendFileSync } from 'fs';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/layouts"}));
app.set('views', __dirname + "/views");
app.set('view engine', 'hbs');


app.get("/", (req, res) => {
    res.render("index", {title: "Resource Hub!"});
});

app.get("/resources", (req, res) => {
    var resources = [
        {name: "How to Java?", source: "url", tags: ["java", "kotlin"], user: "John", summary: "bla bla bla"},
        {name: "How to Node?", source: "url", tags: ["javascript"], user: "Kevin", summary: "bla bla bla"},
        {name: "How to Android?", source: "url", tags: ["java", "kotlin", "android"], user: "George", summary: "bla bla bla"}        
    ]
    res.render("resources", {resources: resources});
});

app.get("/tags", (req, res) => {
    res.send("get-tags");
});

app.post("/resources", (req, res) => {
    res.send("post-resources");
});

app.get("/resources/new", (req, res) => {
    const tags = [{name: "Java"}, {name: "Python"}]
    res.render("new-resource", {tags: tags});
});

app.post("/tags", (req, res) => {
    res.send("post-tags")
});

app.listen(8080, ()=> {
    console.log("started");
});

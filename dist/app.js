'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _fs = require('fs');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.engine('hbs', (0, _expressHandlebars2.default)({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/layouts" }));
app.set('views', __dirname + "/views");
app.set('view engine', 'hbs');

app.get("/", function (req, res) {
    res.render("index", { title: "Resource Hub!" });
});

app.get("/resources", function (req, res) {
    var resources = [{ name: "How to Java?", source: "url", tags: ["java", "kotlin"], user: "John", summary: "bla bla bla" }, { name: "How to Node?", source: "url", tags: ["javascript"], user: "Kevin", summary: "bla bla bla" }, { name: "How to Android?", source: "url", tags: ["java", "kotlin", "android"], user: "George", summary: "bla bla bla" }];
    res.render("resources", { resources: resources });
});

app.get("/tags", function (req, res) {
    res.send("get-tags");
});

app.post("/resources", function (req, res) {
    res.send("post-resources");
});

app.get("/resources/new", function (req, res) {
    var tags = [{ name: "Java" }, { name: "Python" }];
    res.render("new-resource", { tags: tags });
});

app.post("/tags", function (req, res) {
    res.send("post-tags");
});

app.listen(8080, function () {
    console.log("started");
});
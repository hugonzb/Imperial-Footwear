"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

var _config = _interopRequireDefault(require("./config"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var mongodbUrl = _config["default"].MONGODB_URL;

_mongoose["default"].connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})["catch"](function (error) {
  return console.log(error.reason);
});

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use("/api/users", _userRoutes["default"]);
app.get("/api/shoes/:id", function (req, res) {
  var shoeId = req.params.id;

  var shoe = _data["default"].shoes.find(function (x) {
    return x.id === shoeId;
  });

  if (shoe) res.send(shoe);else res.status(404).send({
    msg: "Shoe not found. Please contact Hugo to let him know"
  });
});
app.get("/api/shoes", function (req, res) {
  res.send(_data["default"].shoes);
});
app.listen(5000, function () {
  return console.log("Server successfully started");
});
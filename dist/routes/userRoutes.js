"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.post('/signin', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var signinUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _userModel["default"].findOne({
              email: req.body.email,
              password: req.body.password
            });

          case 2:
            signinUser = _context.sent;

            if (signinUser) {
              res.send({
                name: signinUser.name,
                email: signinUser.email,
                token: (0, _util.getToken)(signinUser)
              });
            } else {
              res.status(401).send({
                msg: 'Invalid Email or Password.'
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/register', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, newUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user = new _userModel["default"]({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            });
            _context2.next = 3;
            return user.save();

          case 3:
            newUser = _context2.sent;

            if (newUser) {
              res.send({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                token: (0, _util.getToken)(newUser)
              });
            } else {
              res.status(401).send({
                msg: 'Invalid User Data.'
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;